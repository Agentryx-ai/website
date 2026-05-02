# Agentryx

- 저장소: `agentryx`
- 사이트 반영 레벨: Primary
- 상태 판단: 핵심 회사 플랫폼. 다만 문서상 "MVP 설계 확정", "PoC 통과", "vertical slice MVP" 표현이 섞여 있어 공개 전 성숙도 표현 정리가 필요하다.

## 1. 한 줄 정의

Agentryx는 사용자가 Lead/CEO 에이전트에게 메시지를 보내면, Lead가 팀원 에이전트를 구성하고 작업을 분해해 병렬 실행, 검증, 승인, PR 흐름까지 관리하는 Codex-first Agent Company 플랫폼이다.

## 2. 확인된 제품/서비스

저장소는 Agentryx를 "Agent Teams and Agent Companies as a platform"으로 정의한다. 핵심 모델은 사용자의 단일 메시지를 Lead가 해석하고, Teammate를 provisioning하며, Task DAG와 acceptance criteria를 기반으로 작업을 나누는 구조다. Control Plane은 회사 상태, 태스크, 승인, 메시지, 아티팩트, 메모리를 보유하고, Runner는 Codex CLI `app-server`를 실행하는 방식이다.

README의 대표 흐름은 다음과 같다.

- 사용자 DM 수신
- Lead가 Tier를 제안하고 서버 rule이 재검증
- `assign_task`로 subtask 발행
- Worker가 구현 후 `submit_completion`
- Layer 1 deterministic script 검증
- Layer 2 LLM semantic review
- Reject 시 재작업, 초과 시 HITL approval

## 3. 대상 사용자

문서상 주요 페르소나는 세 가지다.

- Maker: 1인 개발자 또는 소규모 팀 PM. 메시지 한 통으로 일주일치 팀 작업을 위임하려는 사용자.
- Operator: 에이전트 활동을 감사하고 approval, escalation, 사고 대응을 관리하는 운영자.
- Developer: Agentryx 위에서 runtime adapter, verifier, topology template, external integration을 확장하는 개발자.

## 4. 핵심 기능/워크플로

- DM 기반 Lead 지시와 cycle-boundary inbox injection
- Lead의 teammate provisioning
- Task DAG, dependency, scope, tier, complexity, acceptance criteria
- 2-layer verification: deterministic script + LLM semantic review
- HITL approval과 typed interaction
- AgentCheckpoint, run summary, agent memory, company state snapshot을 분리하는 4-layer memory
- topology template: tree, hub-and-spoke, fanout, committee, triage, pair-loop, temporary pod
- per-agent workspace와 Git/PR 기반 협업
- multitenancy: `CompanyScopedContext`, Prisma middleware, company-scoped row

## 5. 기술 스택/구현 자산

- TypeScript 5.4+
- Next.js 15 App Router
- Postgres 16 + Prisma
- Redis 7.2 Streams
- Codex CLI `app-server`
- Node/TypeScript Runner
- Docker-first deployment
- Vitest, Playwright
- NextAuth/Google SSO 관련 설계

대표 구현/문서 자산:

- `agentryx/README.md`
- `agentryx/docs/PRD.md`
- `agentryx/docs/SRS.md`
- `agentryx/docs/GLOSSARY.md`
- `agentryx/docs/architecture/*`
- `agentryx/docs/decisions/*`
- `agentryx/apps/runner/src/*`
- `agentryx/apps/web/src/app/api/agent-tools/*`
- `agentryx/packages/codex-adapter/src/adapter.ts`
- `agentryx/packages/verification/src/*`
- `agentryx/packages/db/prisma/schema.prisma`

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "AI 직원을 고용하는 것이 아니라 AI 회사를 운영한다."
- "사용자는 메시지로 지시하고, Agentryx는 분해, 병렬 실행, 검증, 승인을 관리한다."
- "Control Plane SSoT, per-agent workspace, Git collaboration을 갖춘 Agent Company 플랫폼."
- "검증 가능한 AI 팀: deterministic test와 LLM review를 분리한 2-layer verification."
- "단일 에이전트 채팅을 넘어, Lead가 팀을 구성하고 업무를 끝까지 운영한다."

웹사이트에서는 "현재 출시 제품"보다 "핵심 플랫폼/MVP"로 표현하는 것이 안전하다.

## 7. 오픈 질문/리스크

- README 앞부분의 "MVP 설계 확정, PoC 대기"와 뒤쪽의 "PoC 4종 통과, vertical slice MVP 도달"이 충돌한다.
- 일부 package README는 scaffold 상태를 말하지만 실제 코드가 있는 영역도 있다.
- Codex CLI `app-server` 의존성이 큰 핵심 리스크다.
- self-host Runner 운영 부담이 사용성 장벽이 될 수 있다.
- LLM Layer 2 review 비용과 false-pass/false-fail 측정이 공개 메시지 전에 정리되어야 한다.

## 8. 대표 근거

- `agentryx/README.md`
- `agentryx/docs/PRD.md`
- `agentryx/docs/SRS.md`
- `agentryx/docs/GLOSSARY.md`
- `agentryx/apps/runner/src/daemon.ts`
- `agentryx/packages/codex-adapter/src/adapter.ts`
- `agentryx/packages/db/prisma/schema.prisma`
