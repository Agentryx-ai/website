# Itineva

- 저장소: `itineva`
- 사이트 반영 레벨: Product Candidate
- 상태 판단: AI 여행 일정 생성/공유 제품 후보. 구현 자산이 크고 사용자 흐름이 명확하지만 문서와 코드 사이 드리프트가 있다.

## 1. 한 줄 정의

Itineva는 목적지, 기간, 인원, 취향을 입력하면 LLM이 여행 일정 JSON을 생성하고 공통 SPA로 렌더링해 공유 링크로 제공하는 AI 여행 일정 웹사이트 생성 플랫폼이다.

## 2. 확인된 제품/서비스

README는 Itineva를 "AI 기반 여행 일정 웹사이트 자동 생성 플랫폼"으로 정의한다. 사용자가 여행 재료를 입력하면 LLM이 `Itinerary` JSON을 만들고, 공용 SPA가 이를 시각적 페이지로 렌더해 공유 링크를 제공한다.

코드 기준으로는 프로젝트/런/버전 저장, Google Places 기반 장소 보강, Google Routes 기반 동선 검증, 공유 페이지, 갤러리, 결제/초대, 피드백 채팅, 섹션 재생성 등 제품 기능이 상당히 들어 있다.

초기 current 문서는 Run 단일 모델을 지향하지만, 현재 코드에는 `Version` 모델이 도입되어 있다. `Project`는 `featured_version_id`를 갖고, `Run`은 `version_id`에 연결되며, publish/feature/share/import 흐름은 Version을 기준으로 동작한다.

Share/Gallery 구현은 legacy `mode: public|secret|oauth`보다 `visibility: unlisted|public` 중심으로 진행되어 있다. public gallery, published version dropdown, imported itinerary attribution, view/import count, `/s/:slug` SSR, OG short/full image endpoint가 확인된다.

## 3. 대상 사용자

문서상 세그먼트:

- B2C 프로슈머: 개인 여행자가 자기 여행을 시각적으로 기획/공유
- B2B 여행 기획자: 여행사/컨시어지가 고객 맞춤 일정 페이지 제작
- B2B 엔터프라이즈: 대규모 사내 여행/리트릿 운영, BYOK/seat 모델

코드상 사용자:

- 로그인 사용자
- Pro 사용자
- 관리자
- 공유 링크 방문자
- 공개 갤러리에서 일정을 가져오는 사용자

## 4. 핵심 기능/워크플로

- 회원가입, 비밀번호 인증, Google OAuth
- 다단계 여행 입력
- 초안 질문 SSE streaming
- Stage A skeleton partial commit, Stage B day-event parallel generation, Stage C enrichment, Stage D autofix/watchdog
- LLM Gateway와 다중 provider adapter
- Google Places 기반 장소 보강
- Google Routes 기반 동선 검증
- 프로젝트, run, version 관리
- 게시, 공유, 비공개화
- 공개 갤러리
- 공유 일정 가져오기
- imported itinerary attribution, view/import count, published version dropdown
- 피드백 채팅
- 이벤트 대안 교체
- 섹션 재생성
- Stripe Pro 결제
- 초대 티켓
- signup magic link, password login/reset, Google OAuth, nickname update
- 관리자/베타 피드백 라우터

## 5. 기술 스택/구현 자산

- Backend: FastAPI, Python 3.12, SQLAlchemy 2, Alembic, PostgreSQL 16
- Frontend: React 19, Vite 7, TanStack Router, Zustand, Tailwind, Radix, Leaflet, MapLibre, React Map GL
- AI/External: OpenAI, Anthropic, Gemini, Resend, Google Places/Routes, Stripe
- Infra: Docker, single image prod model, ops compose, blue/green deployment direction

대표 자산:

- `itineva/README.md`
- `itineva/docs/current/vision.md`
- `itineva/docs/current/architecture-direction.md`
- `itineva/docs/current/data-contracts.md`
- `itineva/docs/current/ux-and-product.md`
- `itineva/pyproject.toml`
- `itineva/web/package.json`
- `itineva/app/llm/gateway.py`
- `itineva/app/llm/schemas.py`
- `itineva/app/routers/projects.py`
- `itineva/app/services/project_service.py`
- `itineva/web/src/routes/MarketingPage.tsx`
- `itineva/web/src/routes/SharePage.tsx`

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "여행 계획을 웹사이트처럼 만들고 공유."
- "입력 몇 가지로 일정, 지도, 체크리스트, 링크까지 생성."
- "AI 초안에 피드백을 주고 버전으로 발전."
- "공유된 일정을 가져와 내 여행으로 재구성."
- "Pro 구독으로 생성, 피드백, 공유를 확장."

주의할 메시지:

- "source-grounded", "reality adapter", "photo journal"은 문서상 차별화 축이지만 구현 범위가 기능별로 다르다. 현재 구현과 로드맵을 구분해 써야 한다.

## 7. 오픈 질문/리스크

- 데이터 계약 문서는 "Run만 있고 Version은 없다"고 쓰지만 코드에는 `Version` 모델과 `Run.version_id`가 있다.
- Vision/가격 계획 문서는 결제/초대를 후순위 또는 제한 범위로 설명하지만 코드에는 Stripe와 invite 흐름이 이미 들어 있다.
- Auth/Billing/Invite가 구현되어 있지만 이것이 실제 결제 출시 또는 법적 운영 상태를 의미하지는 않는다.
- BYOK는 문서/스키마상 개념은 있으나 완성된 사용자 키 관리 흐름은 확인되지 않았다.
- 공유 모드 중 `secret`/`oauth`는 TODO/legacy로 보인다. 공개 설명에서는 구현 완료로 쓰지 않는다.
- roadmap의 OSM/web-search verification worker, full alternatives UX, BYOK/org/seat 모델, real Prometheus metrics는 아직 부분 구현 또는 미구현으로 봐야 한다.
- architecture 문서는 provider adapter를 OpenAI/Anthropic/Azure로 쓰지만 현재 config는 OpenAI/Anthropic/Gemini다.
- staged generation plan은 Stage B day failure를 부분 실패/재시도 가능처럼 설계하지만, 현재 source는 day event exception에서 run 전체를 failed 처리한다.
- `/metrics`는 placeholder 성격이다.
- Makefile의 backend mypy는 실패해도 통과하는 설정이 보인다.
- 외부 API 키가 없으면 LLM/Resend/Google/Stripe 기능이 제한된다.

## 8. 대표 근거

- `itineva/README.md`
- `itineva/docs/current/vision.md`
- `itineva/docs/current/architecture-direction.md`
- `itineva/docs/current/data-contracts.md`
- `itineva/pyproject.toml`
- `itineva/web/package.json`
- `itineva/app/llm/gateway.py`
- `itineva/app/routers/projects.py`
- `itineva/app/routers/share.py`
- `itineva/app/routers/gallery.py`
- `itineva/app/routers/billing.py`
- `itineva/app/routers/invites.py`
- `itineva/app/db/models/version.py`
- `itineva/app/db/models/run.py`
- `itineva/web/src/routes/MarketingPage.tsx`
