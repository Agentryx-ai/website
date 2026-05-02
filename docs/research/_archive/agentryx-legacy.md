# Agentryx Legacy

- 저장소: `agentryx-legacy`
- 사이트 반영 레벨: Background
- 상태 판단: 현행 Agentryx의 초기 제품/구현 자료. 독립 제품으로 소개하기보다 제품 진화와 아키텍처 근거로 쓰는 편이 적합하다.

## 1. 한 줄 정의

Agentryx Legacy는 God가 웹 Control Plane에서 Agent Company/Team을 만들고 Lead/CEO/Teammate에게 Team Chat 또는 Agent DM으로 업무를 전달하는 Codex CLI-first 초기 MVP이며, 이후 현행 Agent Company 플랫폼으로 전환된 레거시 저장소다.

## 2. 확인된 제품/서비스

README는 Agentryx를 "웹 기반 멀티 에이전트 프로젝트 완성 솔루션"으로 설명한다. 초기 방향은 사용자가 프로젝트를 생성하고 아이디어를 입력하면 디렉터 에이전트가 요구사항을 정리하고 여러 에이전트가 구현, 문서, 테스트를 수행하는 구조다.

이후 `docs/mvp`와 ADR에서는 제품 방향이 Codex-first Agent Teams & Agent Companies로 전환되었다. 따라서 이 저장소는 현재 제품의 전신이자 설계 변화 기록으로 보는 것이 맞다.

MVP 설계의 핵심 축은 God -> Agent DM read mode, RunEvent 기반 감사 로그, Company/Team/Agent 3-scope workspace, Lead 중심 오케스트레이션이다. Teammate의 자유로운 conversational reply는 MVP에서 명시적으로 제외된다.

소스 기준 구현은 "Company" 도메인을 코드상 `Project` 모델로 매핑하고, raw Node HTTP `/api/v1` API와 로컬 bootstrap God user를 사용한다.

## 3. 대상 사용자

초기 문서 기준 대상은 다음과 같다.

- 아이디어는 있지만 개발 리소스가 부족한 사용자
- 풀스택 웹앱이나 소프트웨어 프로젝트를 자동화하고 싶은 개인/팀
- self-hosted runner를 통해 코드와 실행환경을 통제하려는 조직
- 멀티 에이전트 개발 플로우의 auditability와 HITL을 원하는 사용자

## 4. 핵심 기능/워크플로

- 프로젝트/워크스페이스 생성
- 채팅 또는 DM 기반 요구사항 전달
- Director/Lead의 요구사항 분석과 작업 계획 생성
- Task graph/checklist 생성
- Architect, Implementer, Tester, Reviewer 등 역할 기반 에이전트 작업
- 에이전트 컨테이너와 workspace volume 관리
- 검증 루프와 HITL approval
- Activity timeline, mailbox, task board, artifact report
- Team/Company, DM read modes, workspace scopes, teammate one-way orchestration 설계
- RunEvent append-only timeline을 SSoT로 삼는 감사/상태 기록
- God -> Agent DM read modes: `interrupt`, `queue_batch`, `queue_single`
- Company/Team/Agent 3-scope workspace
- Teammate one-way orchestration invariant

## 5. 기술 스택/구현 자산

확인된 스택은 시기별로 혼재되어 있다.

- TypeScript monorepo, pnpm
- Vite React web app
- React Router, TanStack Query, Radix UI, lucide, Tailwind
- raw Node HTTP `/api/v1`
- Prisma/Postgres
- Docker/Dockerode 기반 worker
- Pino logging
- Codex `exec --json` 기반 worker
- Codex/Claude runtime 관련 설계 흔적

주의: README/CLAUDE에는 Next.js, NextAuth, Claude Code/oh-my-claudecode 기반 구조가 남아 있으나, 실제 `apps/web`은 Vite + React Router 앱이고 API는 raw Node HTTP다. 현행 웹사이트 카피에는 이 레거시 스택을 그대로 쓰지 않는 편이 안전하다.

대표 자산:

- `agentryx-legacy/README.md`
- `agentryx-legacy/docs/mvp/01_PRD.md`
- `agentryx-legacy/docs/mvp/03_SYSTEM_ARCHITECTURE.md`
- `agentryx-legacy/docs/decisions/*`
- `agentryx-legacy/packages/database/prisma/schema.prisma`
- `agentryx-legacy/apps/web/src/pages/TeamBoardPage.tsx`
- `agentryx-legacy/packages/worker/src/*`

## 6. 웹사이트 메시징 기회

독립 서비스 카드보다는 다음 용도로 적합하다.

- Agentryx가 "단순 프로젝트 완성 봇"에서 "Agent Company Control Plane"으로 진화했다는 배경 설명
- auditability, HITL, self-host runner, workspace isolation의 초기 근거
- Team Board, Agent roster, Activity timeline 같은 UI 아이디어 출처

## 7. 오픈 질문/리스크

- `legacy`라는 저장소명 때문에 현행 Agentryx와 혼동될 수 있다.
- README, MVP 문서, 실제 코드가 서로 다른 구현 시점을 가리킨다.
- README/CLAUDE의 Next.js/Claude 설명과 실제 Vite/raw Node/Codex exec 구현이 다르다.
- 문서상 즉시 interrupt 기대와 실제 MVP daemon의 next-boundary/batch 성격 사이 차이가 있다.
- worker는 현재 현행 `agentryx`의 Codex `app-server` 런타임이 아니라 `codex exec --json` 일회 실행/재개 계열이다.
- 출시 서비스처럼 표현하면 부정확하다.
- 현재 사이트에서는 "연혁", "R&D history", "architecture iteration" 정도로만 활용하는 것이 안전하다.

## 8. 대표 근거

- `agentryx-legacy/README.md`
- `agentryx-legacy/docs/mvp/01_PRD.md`
- `agentryx-legacy/docs/mvp/03_SYSTEM_ARCHITECTURE.md`
- `agentryx-legacy/docs/mvp/04_DOMAIN_DATA_MODEL.md`
- `agentryx-legacy/docs/decisions/0001-product-pivot-agent-teams-companies.md`
- `agentryx-legacy/docs/decisions/0004-teammate-one-way-orchestration-mvp.md`
- `agentryx-legacy/packages/database/prisma/schema.prisma`
- `agentryx-legacy/packages/api/src/server.ts`
- `agentryx-legacy/packages/worker/src/codex/codex-exec.ts`
