# RAG Core Service

- 저장소: `rag`
- 사이트 반영 레벨: Infrastructure
- 상태 판단: 여러 제품에서 사용할 수 있는 공용 검색/인덱싱 백엔드. 권위 문서는 `docs/.ssot/contracts/*`이며 PRD는 `v1.1-draft / Draft` 상태다. 회사의 AI 인프라 역량을 보여주는 핵심 내부 플랫폼으로 적합하지만, 일부 계약/소스 드리프트가 있다.

## 1. 한 줄 정의

RAG Core Service는 LLM을 직접 호출하지 않고 문서, 코드, 운영 데이터의 인덱싱과 검색을 API로 제공하는 Agentryx 공용 retrieval 백엔드다.

## 2. 확인된 제품/서비스

README는 이 저장소를 "Agentryx.ai 공용 RAG 코어 서비스"라고 설명한다. 핵심 원칙은 "순수 RAG API"다. 즉, 코어 서비스는 인덱싱과 검색만 담당하고, LLM 호출은 소비자 서비스 또는 LLM Proxy가 수행한다.

소비 서비스가 텍스트를 push하면 RAG Core가 chunking, embedding, sparse vectorization, Qdrant upsert를 처리한다. 검색 요청 시 dense, BM25, hybrid, RRF 기반 결과를 반환한다.

PRD와 architecture 기준 범위는 HTTP 기반 indexing/search API다. LLM 호출, 프롬프트/대화 루프, 사용자 UI는 명시적으로 범위 밖이다.

## 3. 대상 사용자

- ProjectIndex 같은 search-only consumer
- playdex, RemoteT, 웹 챗봇처럼 RAG 검색 결과를 받아 LLM과 결합하는 서비스
- 내부 개발자와 플랫폼 팀
- Python/C# SDK로 검색을 붙이는 서비스 개발자
- 인프라/DevOps 운영자

## 4. 핵심 기능/워크플로

- instance 생성과 Qdrant collection 격리
- document indexing API
- document list/get/delete API
- content hash 기반 unchanged skip
- fixed, heading, semantic chunking
- OpenAI 또는 TEI embedding provider
- Redis embedding cache
- BM25 sparse vector
- Qdrant named vectors
- dense/BM25/hybrid search
- multi-instance search
- instance create/list/get/patch/soft-delete/clone/restore/purge lifecycle
- async indexing job
- API key 관리
- API key/JWT 권한
- stats, health, OpenAPI, metrics
- trace 계약: `X-Trace-Id` 응답 헤더와 `search_meta.trace_id`를 consumer가 LLM Proxy로 전달하는 구조

## 5. 기술 스택/구현 자산

- Python 3.11
- FastAPI
- Pydantic v2
- SQLAlchemy async, asyncpg, Alembic
- PostgreSQL 16
- Qdrant
- Redis
- ARQ worker
- OpenAI embeddings, TEI
- Docker Compose
- pytest, ruff, black, coverage

대표 자산:

- `rag/README.md`
- `rag/pyproject.toml`
- `rag/src/rag/main.py`
- `rag/src/rag/api/routes/documents.py`
- `rag/src/rag/api/routes/search.py`
- `rag/src/rag/api/routes/instances.py`
- `rag/src/rag/indexing/pipeline.py`
- `rag/src/rag/search/hybrid.py`
- `rag/src/rag/db/models.py`
- `rag/sdk/python/rag_sdk/client.py`
- `rag/sdk/csharp/README.md`
- `rag/docs/ops/RUNBOOK.md`

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "Agentryx의 공용 지식 검색 인프라."
- "LLM provider에 종속되지 않는 retrieval core."
- "인스턴스 단위로 격리된 knowledge collection."
- "문서 push, 증분 인덱싱, hybrid search, SDK 제공."
- "제품마다 RAG를 따로 만들지 않고, 하나의 코어 검색 API로 통합."

공개 웹사이트에서는 "RAG as internal infrastructure" 또는 "Knowledge Infrastructure" 섹션에 배치하기 좋다.

## 7. 오픈 질문/리스크

- README가 가리키는 일부 문서 경로와 실제 repo 구조가 다르다.
- Docker Compose에는 `litellm` 서비스가 포함되어 있어 "Core는 LLM을 호출하지 않는다"는 제품 메시지와 배포 구성을 구분해야 한다.
- 기존 문서 업데이트 시 Qdrant stale vector 정리 정책은 추가 확인이 필요하다.
- graph, ABAC, evaluation 관련 코드는 roadmap/future 성격이 섞여 있으므로 공개 메시지에서는 현재 구현과 예정 기능을 분리해야 한다.
- `total_results`는 현재 전체 매치 수가 아니라 반환된 결과 수 `len(results)`로 보이며, full count 정책은 TODO로 남아 있다.
- OpenAPI `MultiSearchRequest.instances`와 schema/source의 `instance_ids`가 불일치한다.
- indexing job status 명칭이 tech spec의 `succeeded|failed|canceled`와 contract/source의 `completed|failed` 사이에서 흔들린다.
- `authority_level_min`은 문서상 숫자가 작을수록 높은 권위라고 설명하지만, source filter 방향은 반대로 보일 수 있어 확인이 필요하다.
- source는 기존 문서 update 시 DB chunk를 삭제하지만 Qdrant 기존 point 삭제가 명확하지 않고, 새 point id가 UUID v4로 보인다. stale vector 위험을 더 구체적으로 추적해야 한다.
- contract는 제공된 `metadata.content_hash` 사용을 설명하지만 source pipeline은 content에서 hash를 계산하는 것으로 보인다.
- API key DELETE route는 source에 있으나 OpenAPI에는 누락된 것으로 보인다.
- PG-backed graph storage, evaluation benchmark, ABAC/v2 scope source는 존재하지만 phase 문서상 advanced/future 성격이 강하다. 별도 runtime/릴리스 근거 없이 출시 기능으로 표현하지 않는다.

## 8. 대표 근거

- `rag/README.md`
- `rag/docs/.ssot/PRD.md`
- `rag/docs/.ssot/contracts/openapi.yaml`
- `rag/docs/.ssot/contracts/schemas.md`
- `rag/docs/.ssot/architectures/system-architecture.md`
- `rag/docs/ops/RUNBOOK.md`
- `rag/pyproject.toml`
- `rag/src/rag/config.py`
- `rag/src/rag/indexing/pipeline.py`
- `rag/src/rag/search/hybrid.py`
- `rag/src/rag/api/routes/*`
- `rag/src/rag/models/search.py`
- `rag/src/rag/worker/tasks.py`
- `rag/sdk/python/rag_sdk/client.py`
