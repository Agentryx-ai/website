# AI Notes

- 저장소: `ai-notes`
- 사이트 반영 레벨: Product Candidate
- 상태 판단: 내부 팀용 회의록 자동화 제품 후보. 사용자 흐름과 구현 자산이 비교적 명확하다.

## 1. 한 줄 정의

AI Notes는 회의 오디오를 업로드하면 화자별 전사, 팀원 매핑, 발화 편집, 감사 로그, 버전 관리, 내보내기까지 처리하는 회의록 자동화 서비스다.

## 2. 확인된 제품/서비스

README는 "AI meeting notes repository"라고 간단히 설명하고, 백엔드 패키지 설명은 "회의록 자동화 백엔드"다. PRD는 Speaker-Aware Transcription Web App을 정의한다.

서비스는 오디오 파일을 받아 비동기 Job으로 ASR/diarization을 수행하고, utterance 단위 결과를 DB에 저장한다. 사용자는 발화 목록을 조회하고, 화자 라벨을 팀원명으로 일괄 매핑하거나 개별 수정하며, 결과를 JSON/Markdown/TXT 형태로 내보낼 수 있다.

최신 decision/source 기준 active pipeline은 10분 청크 + 별도 pyannote + merger/boundary repair가 아니라, 원본 오디오를 ElevenLabs STT에 단일 요청으로 보내고 Scribe 내장 diarization/word timestamp 결과를 utterance로 묶어 저장하는 구조다. 기존 PRD/async pipeline spec의 chunking/pyannote 설계는 draft 또는 stale 설계로 구분해야 한다.

## 3. 대상 사용자

문서상 5-10명 규모의 팀 내부 웹 서비스가 전제다.

- 반복 회의가 많은 소규모 팀
- 회의 후 전사와 화자 수정이 필요한 운영자/편집자
- 회의록 최종본을 검토하고 내보내야 하는 팀 리드

## 4. 핵심 기능/워크플로

- 로그인/JWT 인증
- 미팅 생성, 목록, 상세, 삭제, 재처리
- 오디오 업로드
- 비동기 job 조회/취소
- ElevenLabs STT 기반 ASR + 내장 diarization. 다만 문서/주석은 Scribe v2를 말하지만 active HTTP 경로의 `model_id`는 현재 `scribe_v1`이고, legacy endpoint만 `scribe_v2`를 사용한다.
- utterance 단위 전사 결과
- 발화 검색/화자 필터
- 화자 일괄 할당
- 인라인 화자 수정과 undo
- 감사 로그
- 버전 이력/복원
- JSON/Markdown/TXT export
- 향후 음성 임베딩 기반 화자 자동 추천 설계

## 5. 기술 스택/구현 자산

- Backend: Python 3.12, FastAPI, Uvicorn, SQLAlchemy async, asyncpg, Alembic, ARQ, Redis, JWT/bcrypt, structlog, Prometheus client, ElevenLabs, Anthropic
- Frontend: React 19, Vite, TypeScript, React Query, React Router, axios, zustand, zod, Tailwind
- Infra: PostgreSQL, Redis, Docker Compose, production API/worker/frontend, Prometheus/Grafana

대표 자산:

- `ai-notes/README.md`
- `ai-notes/docs/.ssot/PRD.md`
- `ai-notes/app/backend/pyproject.toml`
- `ai-notes/app/frontend/package.json`
- `ai-notes/app/backend/src/app/routers/*`
- `ai-notes/app/backend/src/app/pipeline/*`
- `ai-notes/app/frontend/src/pages/TranscriptPage.tsx`
- `ai-notes/app/frontend/src/pages/AuditLogPage.tsx`
- `ai-notes/docs/phases/*`

주의: Anthropic/boundary repair 코드는 남아 있으나 현재 `process_audio` active path에서는 호출되지 않는 것으로 보인다.

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "회의 오디오 업로드에서 화자별 전사까지."
- "발화 단위로 검색하고, 화자를 일괄/개별 수정한다."
- "회의록 수정 이력과 버전을 남긴다."
- "팀원 기준 화자 매핑으로 반복 회의 정리를 줄인다."
- "내부 팀을 위한 speaker-aware transcription workflow."

## 7. 오픈 질문/리스크

- 문서/코멘트는 Scribe v2를 말하지만 실제 API 요청의 `model_id`는 `scribe_v1`로 보이는 부분이 있다.
- PRD/architecture/async spec의 chunking, pyannote, merger, checkpoint resume 설계와 최신 단일 파일 ASR decision/source가 다르다.
- job cancellation 상태 전이 contract와 코드 구현이 다르다. contract는 canceled job 후 meeting draft를 설명하지만, 현재 task helper는 meeting failed로 설정한다.
- startup recovery는 spec의 checkpoint resume보다 stale running job 실패 처리에 가깝다.
- admin/editor 권한 모델, 파일 보관/삭제, export schema, audit retention, 동시 처리 한계가 `.ssot/TODO.md`에 open issue로 남아 있다.
- 일부 phase 문서는 `_completed` 폴더에 있으나 본문 상태가 "진행전"으로 남아 있다.
- diarization 품질, 긴 파일 처리 비용, 파일 보관/삭제 정책은 공개 전 정리해야 한다.
- 외부 서비스 API 키와 개인정보/음성 데이터 처리 정책이 필요하다.

## 8. 대표 근거

- `ai-notes/README.md`
- `ai-notes/docs/.ssot/PRD.md`
- `ai-notes/docs/.ssot/decisions/2026-02-18-scribe-v2-mvp-validation-decision.md`
- `ai-notes/docs/.ssot/decisions/2026-02-19-no-chunking-single-file-asr-decision.md`
- `ai-notes/docs/.ssot/contracts/v1-state-transitions.md`
- `ai-notes/docs/.ssot/TODO.md`
- `ai-notes/app/backend/pyproject.toml`
- `ai-notes/app/backend/src/app/pipeline/asr.py`
- `ai-notes/app/backend/src/app/pipeline/tasks.py`
- `ai-notes/app/backend/src/app/pipeline/recovery.py`
- `ai-notes/app/backend/src/app/routers/meetings.py`
- `ai-notes/app/backend/src/app/routers/utterances.py`
- `ai-notes/app/backend/src/app/routers/export.py`
