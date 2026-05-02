# AutoPlay

- 저장소: `auto-play`
- 사이트 반영 레벨: R&D/Internal Tool
- 상태 판단: 화면 기반 데스크톱 업무 자동화 도구. 현재 문서상 developer-run/internal builder 성격이 강하며 일반 SaaS로 표현하면 과장이다.

## 1. 한 줄 정의

AutoPlay는 API가 없는 데스크톱 업무용 앱을 대상으로 창 캡처, 화면/텍스트 인식, YAML 정책, 입력 실행을 하나의 런타임으로 묶은 데스크톱 자동화 도구다.

## 2. 확인된 제품/서비스

README는 "Windows 업무용 앱 대상의 데스크톱 자동화 도구"라고 설명한다. 사용자는 대상 창을 선택하고 ROI와 스크립트를 지정한다. 런타임은 화면을 캡처하고 YOLO, OCR, UIA, template matching 결과를 `WorldState`로 합친 뒤 YAML rule에 따라 click, type, hotkey, goto 같은 액션을 수행한다.

UI는 pywebview/WebView2 창에서 동작하고, Python 런타임과는 `window.pywebview.api` in-process bridge로 통신한다. 현재 구조는 REST/WebSocket 서버형 제품이 아니다.

런타임 자체는 ROI가 없으면 대상 창 전체 rect를 기본 ROI로 잡지만, 현재 프런트는 Start 가능 조건에 ROI preview 존재를 포함한다.

중요한 안전 원칙은 기본이 dry-run에 가깝고, 실제 입력은 `Armed`가 켜졌을 때만 나간다는 점이다.

## 3. 대상 사용자

일반 최종 사용자보다는 내부 빌더/개발자가 대상이다.

- API가 없는 업무용 데스크톱 앱을 자동화해야 하는 개발자
- 화면 기반 반복 작업을 정의하고 검증해야 하는 내부 운영자
- Windows/macOS developer-run 환경에서 perception/action 자동화를 실험하는 팀

## 4. 핵심 기능/워크플로

- 대상 창 목록/썸네일/클릭 선택
- foreground/window picker
- preview와 ROI drag
- capture backend 선택
- capture auto chain: PrintWindow-first, optional WGC, screen fallback
- Start, Pause, Stop, Resume
- F12 전역 정지
- Armed 안전 확인
- Advanced perception 설정
- YOLO/OCR/UIA/template matching
- YOLO/UIA는 매 captured frame마다 호출되고 비활성이면 null 결과를 반환한다. OCR/template matching은 policy sensor request가 있을 때만 실행된다.
- YAML Script Editor
- 현재 action 적용은 `noop`, `wait`, `goto`, `set_var`, `type`, `hotkey`, `click`, `abort` 중심이다. `double_click`, `move`, `drag`, step-run, dry-run mode는 current DSL action이 아니다.
- `runs/<timestamp>_<name>/session.jsonl` 이벤트 로그

## 5. 기술 스택/구현 자산

- Python 3.10-3.14
- PyYAML, mss, numpy, Pillow, pywebview
- 선택 extras: onnxruntime, uiautomation, pytesseract, opencv-python, wgcapture
- React 18, TypeScript, Vite, Tailwind

대표 자산:

- `auto-play/README.md`
- `auto-play/docs/current/overview.md`
- `auto-play/docs/current/runtime-platform.md`
- `auto-play/docs/current/script-authoring.md`
- `auto-play/docs/current/ui-and-workflows.md`
- `auto-play/src/autoplay/runtime/engine.py`
- `auto-play/src/autoplay/policy/dsl.py`
- `auto-play/src/autoplay/app/api.py`
- `auto-play/web/src/views/Main.tsx`
- `auto-play/web/src/ui/components/ScriptEditor.tsx`

## 6. 웹사이트 메시징 기회

사용 가능한 메시지:

- "업무용 데스크톱 앱을 화면 기반으로 자동화."
- "대상 창과 ROI 중심의 안전한 실행."
- "Armed OFF 기본값으로 실제 입력을 보호."
- "YOLO, OCR, UIA, template matching을 조합하는 perception layer."
- "YAML로 반복 업무 정책을 정의하는 내부 자동화 런타임."

## 7. 오픈 질문/리스크

- 문서가 명시적으로 제외한 기능이 많다. 로그 브라우저, 프로파일 저장/불러오기, dump artifact writer, threaded runtime pipeline은 shipped 기능으로 쓰면 안 된다.
- Script Editor는 plain textarea 중심이며 validator, autocomplete, step-run이 없다.
- Python API는 `window_id` string을 반환/수신하지만 프런트 타입과 호출부는 `hwnd: number`와 `target_hwnd`를 기대한다. `win32:<hwnd>`/`macos:<window_number>` 정규화 경로와 프런트 계약 정리가 필요하다.
- macOS parity와 Windows 기준 구현 범위를 공개 메시지에서 명확히 구분해야 한다.
- 현재 관측성은 `runs/<timestamp>_<name>/session.jsonl` 이벤트 로그 중심이다. frame dump, overlay screenshot, replay bundle, world-state snapshot은 shipped 기능으로 쓰면 안 된다.

## 8. 대표 근거

- `auto-play/README.md`
- `auto-play/docs/current/overview.md`
- `auto-play/docs/current/runtime-platform.md`
- `auto-play/docs/current/script-authoring.md`
- `auto-play/docs/current/ui-and-workflows.md`
- `auto-play/docs/current/architecture.md`
- `auto-play/docs/current/platform-support-matrix.md`
- `auto-play/docs/reference/debugging-and-runs.md`
- `auto-play/docs/reference/config-and-models.md`
- `auto-play/setup.cfg`
- `auto-play/web/package.json`
- `auto-play/src/autoplay/models.py`
- `auto-play/src/autoplay/capture/manager.py`
- `auto-play/web/src/ui/types.ts`
