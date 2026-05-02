# ReTalk

- 저장소: `ReTalk`
- 사이트 반영 레벨: Product Candidate
- 상태 판단: 원격 fetch 후 제품 방향 문서와 Tauri/React 클라이언트 구현 자산이 확인됐다. 공개 웹사이트에는 `ReTalk / 리톡`을 local-first conversation restore 제품으로 조심스럽게 소개할 수 있다.

## 1. 한 줄 정의

ReTalk / 리톡은 사용자의 현재 PC에 이미 남아 있는 대화 기록을 로컬에서 탐지, 미리보기, 유료 unlock, 검색, 내보내기까지 처리하려는 local-first desktop restore 제품이다.

## 2. 확인된 제품/서비스

제품 방향 문서는 "Local KakaoTalk Restore Desktop App"을 launch direction으로 고정한다. Phase 1 promise는 AI 분석이나 cloud sync가 아니라 fast local discovery, profile selection, room-level browsing, controlled preview, paid unlock, export/reporting이다.

개인 콘텐츠는 기본적으로 로컬에 남겨야 한다. 서버 역할은 account, payment, license, update checks, non-personal telemetry로 제한하고, message bodies, room names, profile names, media, local file paths 등 식별 가능한 데이터는 서비스 서버에 저장하지 않는 방향이다.

브랜드 방향은 `리톡`이며, 정식 제품명/아이콘/로고에는 Kakao 계열 명칭이나 말풍선 스타일을 쓰지 않는 것이 원칙이다. 호환성 설명은 본문 descriptor에서만 보수적으로 다뤄야 한다.

## 3. 대상 사용자

- 비기술적인 한국 일반 사용자
- 개인 백업이나 복원이 필요한 사용자
- 법률 제출 또는 분쟁 전 대화 정리가 필요한 사용자
- 조사/법무 사용자. 단 첫 타깃은 일반 사용자다.

## 4. 핵심 기능/워크플로

- 첫 실행: 로컬 데이터 탐지, 법적 권한/동의 확인, 프로필 목록, preview, payment/unlock CTA
- preview/paywall: recoverable profile/room/message/date/media count, limited blurred preview
- main app: profile selector, room selector, conversation reader, local search
- export/reporting: profile-level export, room-level export, provenance metadata for advanced tier
- privacy: personal content local by default, server는 license/account/update 중심

## 5. 기술 스택/구현 자산

- Tauri desktop app
- React 19, Vite 8, TypeScript
- Rust sidecar/Tauri commands
- React Query, React Router, Radix UI, Heroicons, i18next
- Local database restore/extraction direction
- Server-side account, payment, license, update checks 계획

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "PC에 남아 있는 대화 기록을 로컬에서 복원하고 확인."
- "개인 콘텐츠는 기본적으로 사용자 기기에 남긴다."
- "미리보기, 유료 unlock, 검색, 내보내기까지 이어지는 desktop restore workflow."
- "백업, 개인 확인, 합법적 제출을 위한 보수적인 conversation restore 제품."

주의할 메시지:

- 스파이, 감시, 제3자 모니터링으로 읽히는 표현은 피해야 한다.
- 삭제 메시지나 만료 미디어 복구를 절대 보장하면 안 된다.
- 공식 제휴나 특정 플랫폼이 제공하는 앱처럼 보이게 하면 안 된다.

## 7. 오픈 질문/리스크

- 라이선스 기간, cross-PC export, profile-bound license identifier, forensic tier 정의가 open decision으로 남아 있다.
- 서버 검증용 profile fingerprint는 개인정보/법무 검토가 필요하다.
- AI/RAG는 Phase 1 product surface에서 제거/숨김 방향이므로 공개 웹사이트에서 AI 대화 분석 제품처럼 소개하면 부정확하다.
- 특정 플랫폼 trademark를 제품명, 로고, 앱 아이콘, primary brand에 쓰지 않는 것이 원칙이다.
- 복구 가능 범위는 기술적으로 supportable한 상태로만 제한해 표현해야 한다.

## 8. 대표 근거

- `ReTalk/docs/product/kakao-restore-product-direction.md`
- `ReTalk/docs/plans/2026-05-02-codex-design-full-redesign.md`
- `ReTalk/client/package.json`
- `ReTalk/docs/architectures/CLIENT_SERVER_ARCHITECTURE.md`
