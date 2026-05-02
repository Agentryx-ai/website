# JUST GAME

- 저장소: `just-game`
- 사이트 반영 레벨: Game/R&D
- 상태 판단: 게임 제품/프로토타입. 콘텐츠/시뮬레이션/QA 설계가 풍부하지만 BM과 최신 MVP 범위가 문서 사이에서 충돌한다.

## 1. 한 줄 정의

JUST GAME은 멸망이 확정된 세계에서 반복 환생하며 어디까지 버티는지를 겨루는 모바일 우선 생존 디펜스 게임이다.

## 2. 확인된 제품/서비스

README는 "멸망이 확정된 세계에서 환생을 반복하는 생존 디펜스 게임"으로 정의한다. 목표는 완벽한 승리가 아니라 "어디까지, 어떤 방식으로 버텼는가"다.

게임 루프는 거점 준비, 웨이브 방어, 런 종료, 환생/재도전이다. 전투 중에도 건물을 배치/수리/파괴하는 실시간 RTS식 방어를 지향한다. 신 시스템과 환생 루프, 결정론적 시뮬레이션, AI QA 파이프라인이 핵심 차별점이다.

## 3. 대상 사용자

문서상 대상은 다음과 같다.

- 생존, 운영, 성장 루프를 선호하는 모바일 게임 사용자
- 디펜스/RTS/로그라이트 반복 플레이를 좋아하는 사용자
- 캐릭터 관계와 비가역적 선택에 몰입하는 사용자

## 4. 핵심 기능/워크플로

- 실시간 RTS식 건물 배치
- 12 wave 또는 무한 웨이브 기반 연속 방어
- 중앙 코어 방어
- Wall, Turret, Trap, Barricade, Scrap Collector, Repair Station 등 건물
- Scrap, Core, Divinity 등 자원
- 캐릭터/적/신 시스템
- run 종료와 환생 메타 성장
- 행동 기반 신 평가와 각인
- deterministic simulation
- headless Python console prototype
- Godot 4 C# prototype
- xUnit/seed sweep/AI QA 설계
- 최신 SSOT 기준으로는 Python 1D simulator가 RL/training의 단일 기준이 아니다. decision log는 `JustGame.Core` .NET 8 headless simulator를 기준으로 삼는 방향을 기록한다.
- Python sim, genetic algorithm, Optuna, SB3 등은 보조 실험과 QA tooling으로 존재한다. 제품/기술 설명에서는 "simulation-first"를 유지하되 기준 runtime을 문서별로 구분해야 한다.
- ScenarioGen, PlayerBot, BalanceAI, FuzzBot, RegressBot 개념

## 5. 기술 스택/구현 자산

- Godot 4 C#/.NET 8
- ECS architecture
- Python headless console prototype
- xUnit tests
- 일부 Unreal Engine 5.5 prototype
- deterministic simulation first
- CSS-first UI 방향
- `JustGame.Core` .NET 8 headless simulator와 Godot presentation layer를 분리하는 방향
- Python 기반 RL/optimizer tooling과 Unreal prototype은 보조/실험 트랙

대표 자산:

- `just-game/README.md`
- `just-game/docs/.ssot/PRD.md`
- `just-game/docs/.ssot/architecture.md`
- `just-game/docs/.ssot/contracts/game-domain-contract-v2.md`
- `just-game/docs/.ssot/MVP-FEATURE-CHECKLIST.md`
- `just-game/prototypes/console-python-v2/README.md`
- `just-game/prototypes/godot/JustGame/*`
- `just-game/assets/*`

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "환생이 곧 서사와 전략이 되는 생존 디펜스."
- "시뮬레이션 우선 개발로 검증되는 모바일 게임."
- "결정론적 QA와 AI 에이전트 검증 파이프라인을 갖춘 게임 제작 사례."
- "방어, 붕괴, 환생의 반복 속에서 플레이어만의 결말을 만드는 게임."

## 7. 오픈 질문/리스크

- README는 "P2W 없음/가챠 없음"을 말하지만 PRD v1.7 변경 요약은 캐릭터 BM을 가챠 전용으로 전환했다고 적어 BM 메시지가 충돌한다.
- README의 GodSelectScene 흐름은 최신 체크리스트에서 제거된 것으로 보인다.
- Console/Godot은 상당 부분 구현된 것으로 보이나 Unreal은 부분 구현 상태로 보인다.
- 공개 사이트에 올릴 경우 "출시 게임"인지 "개발 중 게임/R&D"인지 분명히 해야 한다.
- 최신 SSOT 기준 BM은 "P2W 금지/무과금 완주 가능"을 유지하면서도 신규 캐릭터 획득을 gacha-only로 전환한 상태다. 단, MVP 범위는 StoreScene gacha tab shell 수준이고 실제 gacha logic, pickup detail, season/ranking monetization은 post-MVP 또는 TBD로 분리되어 있다.
- README와 오래된 Godot verification의 TitleScene/GodSelectScene 흐름은 stale로 봐야 한다. PRD와 MVP checklist 기준으로는 HomeScene hub가 기준이며 GodSelectScene은 제거되었고, god은 사전 선택이 아니라 플레이 행동 기반으로 등장한다.
- 오래된 audit/verification 수치가 있더라도 공개 사이트에서는 최신 SSOT checklist를 우선해야 한다. 완성/출시가 아니라 prototype verification 상태로 표현하는 것이 안전하다.

## 8. 대표 근거

- `just-game/README.md`
- `just-game/docs/.ssot/PRD.md`
- `just-game/docs/.ssot/architecture.md`
- `just-game/docs/.ssot/contracts/game-domain-contract-v2.md`
- `just-game/docs/.ssot/decisions/decision-log.md`
- `just-game/docs/.ssot/MVP-FEATURE-CHECKLIST.md`
- `just-game/docs/phases/1-mvp/CHECKLIST.md`
- `just-game/prototypes/console-python-v2/README.md`
- `just-game/prototypes/godot/JustGame/VERIFICATION.md`
- `just-game/sim/rl/justgame_env.py`
- `just-game/sim/agents/placement_optuna.py`
