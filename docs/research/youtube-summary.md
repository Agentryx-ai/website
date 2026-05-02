# YouTube Summary

- 저장소: `youtube-summary`
- 사이트 반영 레벨: Product Candidate
- 상태 판단: 단일 URL 기반 영상 요약 서비스. 제품 가치가 명확하지만 YouTube 접근 안정성과 계정/쿠키 정책 리스크가 있다.

## 1. 한 줄 정의

YouTube Summary는 YouTube URL 하나로 자막/음성 추출, LLM 기반 구조화 요약, 개인 히스토리 보관을 제공하는 영상 리서치 워크스페이스다.

## 2. 확인된 제품/서비스

백엔드는 `YouTube Summary API`로 노출되며, UI는 "YouTube 영상 요약"을 표기한다. 사용자가 YouTube URL과 출력 언어를 제출하면 백엔드가 작업을 큐에 등록하고, worker가 메타데이터 조회, transcript 추출, LLM 요약, 결과 저장을 수행한다. UI는 상태를 polling하고 완료된 요약을 보여준다.

계정 기능은 요약 산출물 자체를 사용자별로 복제하지 않는다. `summaries`와 `transcript_cache`는 전역 공유 캐시로 두고, `account_summary_history` 링크 테이블로 계정별 히스토리 표시/삭제를 분리한다. 삭제는 계정 히스토리 unlink이며 공유 summary row 삭제가 아니다.

## 3. 대상 사용자

UI 문구상 "개인용 리서치 워크스페이스"에 가깝다.

- 긴 인터뷰, 강의, 리뷰, 브리핑을 빠르게 읽고 싶은 개인 사용자
- 영상 리서치 결과를 보관하고 다시 찾고 싶은 사용자
- 한국어/영어/일본어 등 출력 언어를 바꿔 요약하고 싶은 사용자

## 4. 핵심 기능/워크플로

- email/password 계정 + HttpOnly cookie JWT session. `AUTH_SECRET_KEY` 32자 이상, credentials CORS wildcard 금지, `SameSite=None`이면 secure cookie 필수.
- YouTube URL 요약 요청
- queued, processing, completed, failed, timed_out 상태 관리
- PostgreSQL row 기반 queue/admission/lease/heartbeat와 중복 작업 coalescing
- `POST /api/summarize`는 인증 필수이며, 완료 캐시 hit는 200, queued/processing은 202, queue full은 503 + `Retry-After`를 반환한다.
- transcript cache
- LLM summary cache
- 한국어/영어/일본어 출력 언어 선택. UI 선택지는 ko/en/ja이나, 서버 request schema는 현재 target language를 enum으로 제한하지 않는 문자열 필드로 보인다.
- 히스토리 목록, 검색, 상세, 삭제
- 완료 화면: 개요, 챕터, 핵심 포인트, 키워드
- migration-first rollout과 cookie auth 운영 메모

## 5. 기술 스택/구현 자산

- Backend: Python 3.11+, FastAPI, Uvicorn, SQLAlchemy async, asyncpg, Alembic, PostgreSQL, OpenAI, Anthropic, youtube-transcript-api, yt-dlp, pydub, tiktoken, tenacity
- Frontend: React 18, Vite, TypeScript, Axios, Vitest, Playwright
- Infra: Docker Compose, PostgreSQL, backend, frontend

대표 자산:

- `youtube-summary/README.md`
- `youtube-summary/backend/pyproject.toml`
- `youtube-summary/backend/app/routers/summarize.py`
- `youtube-summary/backend/app/services/summarizer.py`
- `youtube-summary/backend/app/services/transcript.py`
- `youtube-summary/backend/app/services/runtime/worker_manager.py`
- `youtube-summary/frontend/src/pages/HomePage.tsx`
- `youtube-summary/frontend/src/components/SummaryDisplay.tsx`
- `youtube-summary/docs/sisyphus-handoff.md`

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "긴 영상을 읽기 좋은 기록으로 정리."
- "자막 추출부터 구조화 요약까지."
- "요약 결과를 보관함에서 다시 불러오기."
- "출력 언어 선택과 개인 히스토리."
- "영상 리서치 시간을 줄이는 AI 요약 워크스페이스."

## 7. 오픈 질문/리스크

- YouTube 자동 접근 차단이 코드에 운영 리스크로 명시되어 있다.
- cookies/proxy 설정이 필요할 수 있다.
- `AUTH_SECRET_KEY`는 32자 이상 필수다.
- credentials CORS에서는 wildcard origin을 쓸 수 없고, `SameSite=None`이면 secure cookie가 필요하다.
- Sisyphus handoff 기준 account-scoped history/auth 작업은 verification stage로 기록되어 있고, full-review prompt에는 관련 변경이 last commit 이후 uncommitted라고 되어 있다. 출시/운영 상태는 별도 근거 없이 단정하지 않는다.
- 초기 pipeline plan의 "NO auth" guardrail은 이후 account plan/source에 의해 superseded된 것으로 봐야 한다.
- 일부 오래된 E2E 테스트가 현재 로그인 게이트 UI와 맞지 않는 것으로 보인다.
- 공개 서비스화 전 YouTube ToS, 저장/캐시 정책, 저작권/요약 제공 범위를 검토해야 한다.

## 8. 대표 근거

- `youtube-summary/README.md`
- `youtube-summary/backend/pyproject.toml`
- `youtube-summary/backend/app/main.py`
- `youtube-summary/backend/app/routers/auth.py`
- `youtube-summary/backend/app/routers/summarize.py`
- `youtube-summary/.sisyphus/plans/backend-concurrency-controls.md`
- `youtube-summary/.sisyphus/plans/account-scoped-history-and-requests.md`
- `youtube-summary/backend/app/models/account.py`
- `youtube-summary/backend/app/models/summary.py`
- `youtube-summary/backend/app/db/crud.py`
- `youtube-summary/backend/app/core/config.py`
- `youtube-summary/backend/app/services/transcript.py`
- `youtube-summary/frontend/src/pages/HomePage.tsx`
