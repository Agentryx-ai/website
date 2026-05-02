# Agentryx

- 저장소: `agentryx`
- 사이트 반영 레벨: Primary
- 상태 판단: 핵심 회사 플랫폼. 최신 PRD/SRS/ADR 기준은 Lead DM보다 단일 Team Channel 중심이며, 구현은 일부 MVP slice가 들어갔지만 end-to-end gap이 남아 있다.

## 1. 한 줄 정의

Agentryx는 사용자가 단일 Team Channel에 메시지를 올리면 보조 라우터가 Lead/Teammate 수신자를 결정하고, idle 수신자는 wakeup, active 수신자는 cycle-boundary inbox로 처리하는 Codex-first Agent Company 플랫폼이다.

## 2. 확인된 제품/서비스

저장소는 Agentryx를 "Agent Teams and Agent Companies as a platform"으로 정의한다. 최신 PRD/SRS/ADR의 canonical UX는 `TEAM_CHAT` 단일 feed, @mention extraction, auxiliary LLM router, target-only mailbox delivery다. Teammate도 Team Channel에서 사용자에게 응답할 수 있지만, task assignment/decomposition 권한은 Lead-only로 제한된다.

Control Plane은 회사 상태, 태스크, 승인, 메시지, 아티팩트, 메모리를 보유하고, Runner는 Codex CLI `app-server`를 실행하는 방식이다.

README에는 Lead DM 중심 흐름과 "PoC 대기" 표현이 남아 있으나, 이는 최신 Team Channel ADR과 일부 충돌한다. stale 가능성이 있는 대표 흐름은 다음과 같다.

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

- Team Channel 기반 사용자 지시와 cycle-boundary inbox injection
- @mention/LLM router 기반 수신자 결정, explicit mention 실패 시 Lead fallback
- idle agent `wake_agent`, active agent cycle-boundary inbox 처리
- Teammate의 Team Channel 응답 허용, 단 task assignment/decomposition은 Lead-only
- Lead의 teammate provisioning
- Task DAG, dependency, scope, tier, complexity, acceptance criteria
- 2-layer verification: deterministic script + LLM semantic review
- HITL approval과 typed interaction
- AgentCheckpoint, run summary, agent memory, company state snapshot을 분리하는 4-layer memory
- topology template: tree, hub-and-spoke, fanout, committee, triage, pair-loop, temporary pod
- per-agent workspace와 Git/PR 기반 협업
- multitenancy: `CompanyScopedContext`, Prisma middleware, company-scoped row
- TeamChannelDigest schema/read path. 다만 writer/compactor는 아직 확인이 필요하다.

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
- README의 Lead DM 중심 설명은 최신 PRD/SRS/ADR 0016-0018의 Team Channel primary 방향과 맞지 않는다.
- Implementation matrix 기준 team-channel Phase 5는 구현 및 unit/API e2e 커버가 있으나, 전체 architecture 01-03 end-to-end는 미완료다.
- 주요 gap은 checkpoint cadence/restore proof, topology e2e, GitHub PR collaboration, OTel export, storage/S3 retention, MessageReceipt cutover, production security hardening, TeamChannelDigest writer/compactor다.
- `docs/superpowers` team-channel spec은 Draft/future ADR 상태와 router model 표기 혼선이 있고, 실제 ADR 0016-0018은 Accepted다.
- legacy DM endpoint 410 전환은 문서상 계획이나 코드에는 `DM_AGENT` path가 남아 있다.
- 일부 package README는 scaffold 상태를 말하지만 실제 코드가 있는 영역도 있다.
- Codex CLI `app-server` 의존성이 큰 핵심 리스크다.
- self-host Runner 운영 부담이 사용성 장벽이 될 수 있다.
- LLM Layer 2 review 비용과 false-pass/false-fail 측정이 공개 메시지 전에 정리되어야 한다.

## 8. 대표 근거

- `agentryx/README.md`
- `agentryx/docs/PRD.md`
- `agentryx/docs/SRS.md`
- `agentryx/docs/GLOSSARY.md`
- `agentryx/docs/architecture/IMPLEMENTATION_MATRIX.md`
- `agentryx/docs/decisions/0016-team-channel-as-primary.md`
- `agentryx/docs/decisions/0017-auxiliary-routing-llm.md`
- `agentryx/docs/decisions/0018-teammate-team-channel-bidirectional.md`
- `agentryx/packages/messaging/src/router.ts`
- `agentryx/apps/web/src/lib/team-channel-dispatch.ts`
- `agentryx/apps/runner/src/daemon.ts`
- `agentryx/packages/codex-adapter/src/adapter.ts`
- `agentryx/packages/db/prisma/schema.prisma`
