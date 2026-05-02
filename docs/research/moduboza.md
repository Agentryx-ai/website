# ModuBoza

- 저장소: `ModuBoza`
- 사이트 반영 레벨: High Risk Candidate
- 상태 판단: 제품/구현 문서가 풍부한 OTT 구독 풀링 PoC. 다만 약관, 법무, 결제, 저작권, 제휴 오인 리스크가 크므로 공개 웹사이트에서는 매우 보수적으로 다뤄야 한다.

## 1. 한 줄 정의

ModuBoza는 "Find. Watch. Save."를 내세우는 글로벌 OTT 구독 풀링 PoC이며, Phase 1은 Netflix 전용 1인 1세션 모델로 정의되어 있다.

## 2. 확인된 제품/서비스

PRD는 ModuBoza를 글로벌 1인 가구/소형 가구를 위한 OTT 통합 구독 서비스로 정의한다. Phase 1은 Netflix 단독으로 시작하고, 사용자는 자체 플레이어로 콘텐츠를 본다는 목표를 둔다. Provider는 계정/카드/고정 주거 IP 등의 자원을 제공하고, 운영자는 Provider 계정 풀, 세션, 큐, SLA, 정산, 봇 상태를 관리한다.

핵심 원칙은 OTT 자격증명을 사용자에게 노출하지 않고, 1인 1세션을 유지하며, DRM/동시 스트림 한도 우회는 금지한다는 것이다.

구현 상태 스냅샷: 소스에는 NextAuth v5 JWT auth(Google user, GitHub admin role), admin IP allowlist, Provider account 등록, AES-256-GCM `passwordCipher`, BotJob queue, verify/health/auto-login worker, playback manifest/license Route Handler, clean-room TypeScript `netflix-core`가 있다. 반면 사용자용 browse/title/watch 화면과 Shaka Player 통합은 현재 소스에서 확인되지 않는다.

## 3. 대상 사용자

- Subscriber: 글로벌 1인/소가구, OTT를 혼자 쓰지만 정가 부담을 줄이고 싶은 사용자
- Provider: 유휴 계정/카드/ISP 리소스를 제공하고 정산을 받는 공급자
- Admin: 계정 풀, 세션, 봇, 정산, 헬스체크를 관리하는 운영자

## 4. 핵심 기능/워크플로

- 월 5,900원 / $3.97 Netflix Solo 플랜
- 1인 1세션
- 가입 대기열
- SLA 크레딧
- 시청 진행률, 좋아요, 워치리스트
- Provider 계정 등록 및 검증
- 계정 비밀값 암호화 저장
- admin Provider account 등록 후 VERIFY BotJob 자동 enqueue
- Playwright bot 기반 검증/헬스체크/자동 로그인
- Admin dashboard
- Netflix manifest/license control-plane proxy
- playback control-plane API. 단 user-facing watch/player surface는 아직 확인되지 않는다.
- 감사 로그
- `netflix-core` TypeScript 패키지

## 5. 기술 스택/구현 자산

- pnpm monorepo
- Node 22
- Next.js 15
- React 19
- NextAuth v5 beta
- Tailwind
- Prisma/PostgreSQL 16
- TypeScript workspace packages
- Playwright bot
- Croner
- Docker Compose

대표 자산:

- `ModuBoza/README.md`
- `ModuBoza/docs/PRD.md`
- `ModuBoza/docs/decisions.md`
- `ModuBoza/docs/ui-ux-flows.md`
- `ModuBoza/docs/research/netflix-protocol-survey.md`
- `ModuBoza/docs/research/har-capture-workflow.md`
- `ModuBoza/packages/db/prisma/schema.prisma`
- `ModuBoza/packages/netflix-core/src/*`
- `ModuBoza/packages/security/src/secrets.ts`
- `ModuBoza/apps/web/app/*`
- `ModuBoza/apps/bot/src/runner.ts`

## 6. 웹사이트 메시징 기회

내부/비공개 PoC 설명으로는 다음 메시지가 가능하다.

- "혼자 보는 OTT 구독 비용 문제를 실험한 subscription pooling PoC."
- "1인 1세션, 자격증명 미노출, 대기열과 SLA 크레딧을 결합한 운영 모델."
- "Provider 계정 풀과 사용자 세션을 분리 관리하는 control-plane 실험."

공개 웹사이트에서는 피해야 할 표현:

- "공식 Netflix 파트너"
- "Netflix 계정 없이 합법적으로 시청 가능"처럼 법적 결론을 단정하는 문구
- DRM, 지역 제한, 스트림 한도 우회로 읽히는 표현
- "출시 서비스"로 오인될 수 있는 과도한 CTA

## 7. 오픈 질문/리스크

- 법무, 세무, PG, ToS 검토가 TODO에 남아 있다.
- paid launch gate는 Estonia OÜ, bank, PG, ToS/Privacy/DMCA/refund/cancel review 준비 후로 되어 있고, TODO에는 세무/Estonia 법무/회계 자문, OÜ 등록, Stripe Estonia, 법무 문서가 미완료로 남아 있다.
- 실제 Netflix 재생 경로는 HAR 문서상 `aleProvision`, `wv2-license` 캡처가 부족하고 RSA/bootstrap/license/player 작업이 남아 있다.
- challenge bot은 runner에서 미구현으로 보인다.
- playback session store는 in-memory Map이라 운영 다중 인스턴스에 부적합하다.
- 일부 README/TODO의 "다음 단계 Auth.js" 표기는 현재 `auth.ts` 구현과 어긋난다.
- D-26의 SQLite Phase 1 결정은 D-28에서 Docker Postgres로 supersede되었고 실제 Prisma schema도 PostgreSQL이다. `packages/db/README.md`의 SQLite 설명은 stale이다.
- D-29의 OCA URL parse 기반 region/ISP 자동 감지는 현재 bot source에서 환경 힌트 기반으로만 확인된다.
- D-25의 user IP -> GeoIP/ASN -> provider pool broker도 현재 playback provider source에서는 기본 KR-Seoul/LGU+ account selection으로만 확인된다.
- PRD의 자체 플레이어 목표와 달리 현재 source에서는 사용자용 browse/title/watch 화면과 Shaka Player 의존성이 확인되지 않는다.
- 외부 OTT 브랜드 제휴 오인 리스크가 크다.

## 8. 대표 근거

- `ModuBoza/README.md`
- `ModuBoza/docs/PRD.md`
- `ModuBoza/docs/decisions.md`
- `ModuBoza/docs/TODO.md`
- `ModuBoza/docs/phase-1-plans/00-scope-gates.md`
- `ModuBoza/docs/research/har-capture-workflow.md`
- `ModuBoza/packages/db/prisma/schema.prisma`
- `ModuBoza/apps/bot/src/runner.ts`
- `ModuBoza/apps/bot/src/lib/provider-login.ts`
- `ModuBoza/apps/web/auth.ts`
- `ModuBoza/apps/web/app/api/playback/manifest/route.ts`
- `ModuBoza/apps/web/lib/playback/provider.ts`
