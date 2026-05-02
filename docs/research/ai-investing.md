# AI Investing

- 저장소: `ai-investing`
- 사이트 반영 레벨: Internal/R&D
- 상태 판단: 실제 투자 운영과 연결된 내부 퀀트/브로커 운영 시스템. 공개 웹사이트에서는 금융 성과나 투자 권유로 보이지 않도록 매우 조심해야 한다.

## 1. 한 줄 정의

AI Investing은 S&P 500 종목을 매일 횡단면 랭킹하고, 보유/매수/매도 실행 계획과 브로커 운영 콘솔까지 연결하는 AI 기반 투자 운영 시스템이다.

## 2. 확인된 제품/서비스

README는 "S&P 500 cross-sectional stock ranking & automated trading system"이라고 설명한다. 시스템은 S&P 500 종목을 대상으로 factor feature를 만들고 XGBoost LambdaMART로 랭킹한 뒤 Core/Hold/Exit tier를 분류한다. 이후 목표 비중, 주수, 거래 금액을 산출하고 운영자가 브로커 콘솔과 체결/잔고 파일을 갱신하는 구조다.

## 3. 대상 사용자

명시적 외부 고객보다는 내부 사용자에 가깝다.

- 실제 자산을 운용하는 내부 투자 운영자
- 퀀트 리서처
- 브로커 수동/반자동 운영 담당자
- 모델 실험과 백테스트를 점검하는 개발자

## 4. 핵심 기능/워크플로

- 일봉/실시간 가격 수집
- S&P 500 universe와 dynamic top-50 selection
- 10개 cross-sectional factor feature
- XGBoost LambdaMART 랭킹
- Core/Hold/Exit tier 분류
- cash reserve, max daily buy, max weight 등 제약 반영
- 주문 후보와 주수/금액 계산
- `data/trades.json` 및 holdings 업데이트
- web-codex: KIS 중심 운영 콘솔
- web-toss: Toss 잔고 미러 및 향후 주문 실행 경로
- backtesting, Optuna optimization, model experiment logs
- web-codex는 KIS를 source of truth로 두는 broker console에 가깝다. balance sync, dry-run submit, gated live submit, fill sync까지 문서화되어 있지만 live submit은 기본 비활성이다.
- web-toss는 단순 잔고 미러를 넘어 trade plan inbox, circuit breaker, execute scaffold, daily auto-pipeline 코드가 있다. 다만 Toss 실주문은 request body capture 미완료와 live-order gate 때문에 문서상 미검증 상태다.
- KR market pipeline, crypto/sentiment scripts 같은 side research도 있으나, 핵심 제품 설명은 S&P 500 ranking/execution workflow로 제한하는 편이 안전하다.

## 5. 기술 스택/구현 자산

- Python 3.12
- pandas, numpy
- yfinance
- DuckDB
- XGBoost, CatBoost, scikit-learn
- FastAPI/Jinja2/Uvicorn 기반 운영 콘솔
- Typer CLI
- MLflow/Torch 계열 선택 의존성
- SQLite 웹 콘솔

대표 자산:

- `ai-investing/README.md`
- `ai-investing/config/default.yaml`
- `ai-investing/scripts/v9_execution_plan.py`
- `ai-investing/src/models/ranking_models.py`
- `ai-investing/src/features/factor_features.py`
- `ai-investing/src/universe/selector.py`
- `ai-investing/docs/daily-operations.md`
- `ai-investing/docs/model-experiments-log.md`
- `ai-investing/web-codex/README.md`
- `ai-investing/web-toss/README.md`

## 6. 웹사이트 메시징 기회

공개 가능성이 있는 보수적 메시지:

- "실전 운영까지 닿는 내부 퀀트 리서치."
- "모델 예측에서 주문 후보와 감사 로그까지 이어지는 투자 워크벤치."
- "백테스트, 리스크 가드, 수동 승인 흐름을 포함한 AI 투자 운영 시스템."

피해야 할 메시지:

- 특정 수익률, 성과, 운용 금액, 자동매매 성공을 홍보하는 문구
- 투자 권유로 해석될 수 있는 문구
- 브로커 우회/자동 주문을 과장하는 문구

## 7. 오픈 질문/리스크

- README, daily operation 문서, config가 v16/v17/v18.1 등 서로 다른 전략 버전을 가리킨다.
- `config/default.yaml`에는 v18.1 surge-sell 관련 체결률 미검증/rollback 흔적이 있다.
- Toss 내부 endpoint 사용은 ToS/변경 리스크가 있다.
- 실주문 경로는 kill switch와 미구현/차단 상태가 섞여 있다.
- 금융 규제, 투자자문/투자일임 오인, 성과 표시 리스크가 크다.
- 전략 버전은 특히 주의해야 한다. README는 v16 production, daily-operations는 v18.1 active를 말하지만, `config/default.yaml`과 model experiment log 기준으로는 live baseline이 v17 C4로 되돌아간 흔적이 있다.
- v18.1의 높은 성과는 100% surge-sell limit-fill 가정에 크게 의존하며 paper-trade 검증 전 live 채택 금지로 기록되어 있다. 공개 웹사이트에는 특정 live 전략 버전이나 성과 수치를 쓰지 않는 편이 안전하다.
- KIS 쪽 live submit은 `KIS_ALLOW_LIVE_TRADING`, live UI/CLI mode, 명시 confirmation을 모두 요구하는 gated path다. broker order request 자체가 체결을 의미하지 않으므로 fill sync 또는 수동 execution 기록을 별도로 구분해야 한다.

## 8. 대표 근거

- `ai-investing/README.md`
- `ai-investing/docs/daily-operations.md`
- `ai-investing/docs/model-experiments-log.md`
- `ai-investing/docs/methodology-decisions.md`
- `ai-investing/docs/web/RUNBOOK.md`
- `ai-investing/config/default.yaml`
- `ai-investing/scripts/v9_execution_plan.py`
- `ai-investing/scripts/v9_to_web_toss_inbox.py`
- `ai-investing/src/models/ranking_models.py`
- `ai-investing/src/features/factor_features.py`
- `ai-investing/web-codex/README.md`
- `ai-investing/web-toss/README.md`
- `ai-investing/web-toss/order_native.py`
