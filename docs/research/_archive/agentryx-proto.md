# Agentryx Proto

- 저장소: `agentryx-proto`
- 사이트 반영 레벨: Background
- 상태 판단: Agentryx 초기 프로토타입. 현재 핵심 플랫폼 `agentryx`와 중복되므로 독립 제품으로 전면 소개하기보다는 초기 구현 실험으로 분리하는 편이 적합하다.

## 1. 한 줄 정의

Agentryx Proto는 Director가 목표만 입력하면 PM이 기획하고 Architect/Developer에게 REQUEST/COMPLETE 메시지로 업무를 넘기는 PM 중심 actor-model 프로토타입이다.

## 2. 확인된 제품/서비스

백엔드 README는 "FastAPI backend for Agentryx - Multi-AI Agent Operating Platform"이라고 설명한다. 저장소 구조는 FastAPI 백엔드와 React/Vite 프런트엔드로 나뉘며, 프로젝트, 목표, 역할, 팀원, 메시지, 태스크, 워크스페이스, 대시보드를 관리한다.

문서상 제품 방향은 PM 중심 actor-model v4.1에 가깝지만, 실제 구현은 UI-first 및 mock-heavy 상태가 강하다. PM 분석, 작업 분해, 대시보드 데이터 일부는 실제 LLM/런타임보다 mock 또는 TODO가 많다.

문서와 코드상 의도는 다음과 같다.

- Director 또는 Supervisor가 목표를 입력한다.
- PM 에이전트가 요구사항을 분석한다.
- Architect, Frontend, Backend, QA 등 역할별 에이전트에게 작업을 보낸다.
- 메시지 기반 비동기 협업과 대시보드로 진행 상태를 추적한다.
- Claude Code, Droid, Codex 같은 CLI agent adapter를 추상화한다.

## 3. 대상 사용자

문서상 사용자는 Development Director/Supervisor에 가깝다. 세부 구현 지시를 직접 모두 쓰는 사용자가 아니라, 목표 설정, 팀 구성 승인, 에스컬레이션, 최종 리뷰를 담당하는 개발 총괄자/팀 리드가 핵심 사용자다.

## 4. 핵심 기능/워크플로

- 프로젝트 생성과 워크스페이스 관리
- 목표 입력과 PM 분석
- 역할 템플릿과 teammate 관리
- task/message 기반 협업
- dashboard API와 상태 모니터링
- CLI adapter 추상화
- autonomous collaboration 관련 UI/문서
- PM 중심 actor-model v4.1 설계
- 파일 기반 PM workflow 모델/마이그레이션/프런트 mock 컴포넌트. 다만 API endpoint와 실제 파일 변경 감지/상태 자동 업데이트는 다음 단계로 남아 있다.

## 5. 기술 스택/구현 자산

- Backend: FastAPI, Python 3.11, SQLAlchemy async, asyncpg, Alembic, PostgreSQL, JWT/passlib, GitPython
- Frontend: React 19, TypeScript, Vite, Tailwind CSS 4, Radix UI, Zustand, Axios, React Router
- Infra: Docker Compose

주의: architecture/design 문서는 React 18을 말하지만 실제 `frontend/package.json`은 React 19.2.0이다. docs는 Claude Code/Droid/Codex pool을 표방하지만 executor는 공통 CLI 플래그를 사용해 Claude Code 출력 형식에 강하게 맞춰져 있다.

대표 자산:

- `agentryx-proto/backend/README.md`
- `agentryx-proto/backend/pyproject.toml`
- `agentryx-proto/frontend/package.json`
- `agentryx-proto/docs/architecture/ARCHITECTURE.md`
- `agentryx-proto/docs/architecture/DESIGN.md`
- `agentryx-proto/docs/architecture/ROADMAP.md`
- `agentryx-proto/DASHBOARD_DESIGN.md`
- `agentryx-proto/backend/services/pm.py`
- `agentryx-proto/backend/services/teammate_message.py`
- `agentryx-proto/backend/engine/cli/*`

## 6. 웹사이트 메시징 기회

현행 Agentryx를 설명할 때 다음 배경으로 활용할 수 있다.

- "AI 에이전트를 도구가 아니라 팀원처럼 운영한다"는 초기 제품 아이디어
- "PM 중심 자율 협업"과 "목표 중심 개발 운영" 실험
- CLI 에이전트 풀을 조직화하는 self-hosted control plane의 전신

## 7. 오픈 질문/리스크

- PM 분석 로직 일부가 실제 LLM이 아니라 mock 데이터를 반환하는 것으로 보인다.
- 대시보드 페이지에도 mock API/데이터 흔적이 있다.
- root `DASHBOARD_DESIGN.md`는 대시보드 API/컴포넌트 완료처럼 보이지만 현재 dashboard page는 mock data를 렌더링한다.
- 파일 기반 workflow는 문서와 모델은 있으나 API router에 포함되지 않은 상태로 보인다.
- 프런트엔드 README와 일부 파일에는 Vite template 흔적이 남아 있다.
- 설계 문서와 패키지 버전이 다르게 보인다. 예: React 18 언급과 React 19 패키지.
- Codex/Droid 전용 adapter는 별도 확인되지 않았고, executor는 Claude Code 계열 옵션에 강하게 맞춰져 있다.
- 현재 Agentryx 핵심 저장소와 기능/이름이 겹치므로 공개 웹사이트에서는 통합해서 설명해야 한다.

## 8. 대표 근거

- `agentryx-proto/backend/README.md`
- `agentryx-proto/docs/architecture/DESIGN.md`
- `agentryx-proto/docs/architecture/ARCHITECTURE.md`
- `agentryx-proto/docs/architecture/ROADMAP.md`
- `agentryx-proto/docs/WORKFLOW_UX_IMPLEMENTATION_SUMMARY.md`
- `agentryx-proto/backend/api/v1/router.py`
- `agentryx-proto/backend/services/pm.py`
- `agentryx-proto/backend/models/workflow_status.py`
- `agentryx-proto/backend/models/file_change_event.py`
- `agentryx-proto/frontend/src/pages/dashboard/index.tsx`
- `agentryx-proto/frontend/package.json`
