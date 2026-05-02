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

## 8. 대표 근거

- `ai-investing/README.md`
- `ai-investing/docs/daily-operations.md`
- `ai-investing/config/default.yaml`
- `ai-investing/scripts/v9_execution_plan.py`
- `ai-investing/src/models/ranking_models.py`
- `ai-investing/src/features/factor_features.py`
- `ai-investing/web-codex/README.md`
- `ai-investing/web-toss/README.md`
