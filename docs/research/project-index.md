# ProjectIndex

- 저장소: `project-index`
- 사이트 반영 레벨: Infrastructure/Planned
- 상태 판단: AI CLI용 MCP 지식베이스 설계 문서 저장소. 구현체보다 PRD, contracts, architecture, tech spec 중심이다.

## 1. 한 줄 정의

ProjectIndex는 Claude Code, Codex CLI, Gemini CLI 같은 AI CLI 도구가 프로젝트 문서를 자동 검색하고 갱신할 수 있게 하는 MCP 기반 사내 RAG 지식베이스 설계다.

## 2. 확인된 제품/서비스

문서상 ProjectIndex는 local MCP server, local Qdrant, shared Qdrant, embedding provider를 이용해 프로젝트별 지식베이스를 만들고, AI CLI가 `kb_search`, `kb_ingest`, `kb_status` 등의 MCP tool로 문서를 검색/갱신하도록 설계한다.

중요한 점은 이 저장소에서 실제 `src/` 구현이나 package manifest가 보이지 않았다는 점이다. 따라서 현재 repo 기준으로는 실행 가능한 사용자-facing 서비스가 아니라 제품/아키텍처/계약 설계 저장소로 보는 것이 정확하다.

## 3. 대상 사용자

- 프로젝트 문서 탐색에 시간을 쓰는 개발자
- PM/운영자 등 문서 기반으로 AI CLI를 쓰는 사용자
- Codex, Claude Code, Gemini CLI, Droid 같은 AI CLI 사용자
- 프로젝트별 지식 격리와 공통 KB 운영이 필요한 플랫폼/DevOps 담당자

## 4. 핵심 기능/워크플로

문서상 워크플로는 다음과 같다.

- `doctor`로 환경 진단
- local Qdrant 시작
- 프로젝트 초기화
- 문서 ingest
- AI CLI에 MCP server 등록
- `kb_search`, `kb_ingest`, `kb_status`, `kb_delete` 등 MCP tool 사용
- local KB와 shared KB를 동시에 검색하고 병합
- Git main branch 기준 shared KB 갱신
- workspace 변경 기반 local KB 동기화
- Markdown/plain text indexing
- project isolation

## 5. 기술 스택/구현 자산

계획상 스택:

- Python 3.10+
- stdio MCP server
- Qdrant 1.13+
- OpenAI embeddings 또는 사내 TEI
- `httpx`, `pyyaml`, `mcp`, `qdrant-client`, `pydantic`
- Docker Compose
- GitHub Actions
- pip package 배포

대표 자산:

- `project-index/README.md`
- `project-index/docs/PRD.md`
- `project-index/docs/architectures/system-architecture.md`
- `project-index/docs/contracts/mcp-tools.md`
- `project-index/docs/tech-specs/mcp-server.md`
- `project-index/docs/tech-specs/search-engine.md`
- `project-index/docs/tech-specs/document-processor.md`
- `project-index/docs/INDEX.md`
- `project-index/docs/TODO.md`
- `project-index/docs/kb/kb-config.yml`

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "AI CLI를 위한 프로젝트 메모리."
- "AI가 문서를 뒤지는 것이 아니라, MCP tool로 근거를 검색한다."
- "local draft와 shared main knowledge를 함께 검색한다."
- "프로젝트별 지식 격리와 Git 기반 동기화."
- "Agentryx 생태계의 지식 레이어 설계."

단, 현 저장소 기준으로는 "planned", "designed", "internal spec" 표현이 안전하다. "이미 pip install 가능한 제품"처럼 쓰면 과장될 수 있다.

## 7. 오픈 질문/리스크

- PRD/Tech Spec은 local+shared simultaneous search를 말하지만 MCP contract에는 cascade/default search 흔적이 남아 있다.
- code AST indexing 관련 필드와 plain text MVP 방향이 섞여 있다.
- embedding provider, chunk size, max file size는 일부 pending으로 보인다.
- README의 `pip install project-index`와 CLI 명령은 repo 안 구현으로 검증되지 않았다.

## 8. 대표 근거

- `project-index/README.md`
- `project-index/docs/PRD.md`
- `project-index/docs/architectures/system-architecture.md`
- `project-index/docs/contracts/mcp-tools.md`
- `project-index/docs/tech-specs/mcp-server.md`
- `project-index/docs/TODO.md`
