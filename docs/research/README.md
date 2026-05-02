# Agentryx-ai 서비스 리서치 인덱스

- 조사일: 2026-05-02
- 조사 범위: `C:\_projects\Agentryx-ai` 아래 로컬 저장소
- 조사 방식: 서브에이전트 병렬 리서치 + 로컬 README/PRD/설정/소스 파일 교차 확인
- 주의: 이 문서는 외부 시장 검증, 법무 검토, 실제 배포 상태 검증이 아니라 저장소 안에서 확인되는 사실을 정리한 내부 웹사이트 기획 자료다.

## 문서 목록

| 파일 | 저장소 | 사이트 반영 레벨 | 요약 |
| --- | --- | --- | --- |
| [agentryx.md](./agentryx.md) | `agentryx` | Primary | Codex-first Agent Company 플랫폼 |
| [_archive/agentryx-legacy.md](./_archive/agentryx-legacy.md) | `agentryx-legacy` | Archived/Background | Agentryx 초기 구현/제품 방향 전환 근거 |
| [_archive/agentryx-proto.md](./_archive/agentryx-proto.md) | `agentryx-proto` | Archived/Background | FastAPI/Vite 기반 Agentryx 초기 프로토타입 |
| [rag.md](./rag.md) | `rag` | Infrastructure | 공용 RAG 인덱싱/검색 API 백엔드 |
| [project-index.md](./project-index.md) | `project-index` | Infrastructure/Planned | AI CLI용 MCP 지식베이스 설계 |
| [ai-notes.md](./ai-notes.md) | `ai-notes` | Product Candidate | 화자 인식 회의록 자동화 서비스 |
| [youtube-summary.md](./youtube-summary.md) | `youtube-summary` | Product Candidate | YouTube 영상 구조화 요약 워크스페이스 |
| [auto-play.md](./auto-play.md) | `auto-play` | R&D/Internal Tool | 화면 기반 데스크톱 업무 자동화 도구 |
| [itineva.md](./itineva.md) | `itineva` | Product Candidate | AI 여행 일정 웹사이트 생성/공유 플랫폼 |
| [moduboza.md](./moduboza.md) | `ModuBoza` | High Risk Candidate | OTT 구독 풀링 PoC |
| [ai-investing.md](./ai-investing.md) | `ai-investing` | Internal/R&D | S&P 500 AI 랭킹 및 투자 운영 시스템 |
| [just-game.md](./just-game.md) | `just-game` | Game/R&D | 환생 루프 기반 모바일 생존 디펜스 게임 |
| [eagle-eye-clone.md](./eagle-eye-clone.md) | `eagle-eye-clone` | R&D | 멀티센서 AR 골격 표시 실험 |
| [retalk.md](./retalk.md) | `ReTalk` | Hold | 비어 있는 저장소, 제품 근거 부족 |

## 웹사이트 기획 관점의 1차 분류

### 전면 메시지 후보

- `Agentryx`: 회사명과 직접 연결되는 핵심 플랫폼이다. "AI 팀/회사 운영체제", "검증 가능한 에이전트 팀", "분해-병렬 실행-검증-HITL" 메시지로 전면 배치하기 좋다.
- `RAG`: 여러 제품이 공유할 수 있는 지식 검색 인프라로, 회사의 AI 인프라 역량을 보여준다.
- `Itineva`, `AI Notes`, `YouTube Summary`: 비교적 명확한 사용자 가치와 제품 흐름이 있어 제품 카드 후보로 적합하다.

### 조심스럽게 다룰 후보

- `ModuBoza`: 제품 설명과 구현 자산은 많지만 OTT 약관, 법무, 결제, 저작권, 제휴 오인 리스크가 크다. 웹사이트에서는 출시 서비스처럼 단정하지 말고 내부 PoC 또는 리서치로 분리하는 편이 안전하다.
- `AI Investing`: 실제 투자 운영 흔적이 있으나 금융 성과, 투자 권유, 라이브 금액, 브로커 연동을 공개 메시지로 쓰면 규제/신뢰 리스크가 있다. "내부 퀀트 운영 R&D" 정도가 안전하다.
- `Eagle Eye Clone`: dual-use, 프라이버시, 방산 제품명 오인 리스크가 있다. "멀티센서 AR 정합 연구"로 추상화해 표현해야 한다.

### 아카이브/연혁 자료

- `agentryx-legacy`, `agentryx-proto`: GitHub에서 archived 상태인 저장소다. 독립 제품으로 소개하기보다 Agentryx 플랫폼이 어떤 실험을 거쳐 현재 방향으로 수렴했는지 보여주는 내부 근거 자료로 적합하다. 문서는 `docs/research/_archive/` 아래에 둔다.

### 보류

- `ReTalk`: 저장소에 문서/코드가 없어 웹사이트에 반영할 근거가 없다.

## 공통 리스크

- 여러 저장소에서 README, PRD, TODO, 실제 코드 상태가 서로 다른 시점을 가리킨다. 공개 웹사이트 카피 작성 전에는 "현재 출시 상태"와 "로드맵"을 분리해야 한다.
- 일부 프로젝트는 내부 도구, R&D, PoC 성격이 강하다. 모든 저장소를 같은 톤의 제품 카드로 나열하면 회사 포지셔닝이 흐려진다.
- 외부 브랜드, 금융, 영상 플랫폼, OTT, 방산/AR 관련 프로젝트는 법무/정책 리스크가 크다. 공개 카피는 저장소 안 문구보다 더 보수적으로 다듬어야 한다.
