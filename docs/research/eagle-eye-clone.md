# Eagle Eye Clone

- 저장소: `eagle-eye-clone`
- 사이트 반영 레벨: R&D
- 상태 판단: 멀티센서 AR/컴퓨터비전 실험. 방산 제품명, dual-use, 프라이버시 리스크가 있으므로 공개 카피는 안전한 R&D 표현으로 제한해야 한다.

## 1. 한 줄 정의

Eagle Eye Clone은 원격 센서가 본 사람의 3D 골격을 shared world 좌표로 변환해 AR 화면에 표시하려는 컴퓨터비전/AR 프로토타입이다.

## 2. 확인된 제품/서비스

`pyproject.toml` 설명은 "Anduril EagleEye 클론 - 벽 너머 사람 골격을 AR에 실시간 표시"라고 되어 있다. 문서상 목표는 원격 카메라가 탐지한 사람의 위치를 Quest 2 AR 화면의 올바른 3D 위치에 표시하는 것이다.

현재 구현은 MacBook, iPhone 13 Pro, GTX 1080 PC, 향후 Quest 2를 연결해 YOLOv8-pose, metric depth/LiDAR, ARKit pose, ZMQ 네트워크, PnP/Procrustes anchoring으로 shared world 좌표계를 맞추려는 실험이다.

## 3. 대상 사용자

명시된 목적은 제작자 본인의 영상/데모에 가깝다. 공개 웹사이트에서 사용자로 확장한다면 다음 정도가 안전하다.

- 컴퓨터비전/AR R&D 청중
- 멀티센서 정합 실험에 관심 있는 기술자
- 실시간 pose/depth/SLAM 파이프라인 데모를 보는 개발자

방산/감시/보안 제품처럼 표현하면 위험하다.

## 4. 핵심 기능/워크플로

- MacBook client가 웹캠/iPhone 프레임 캡처/릴레이
- 1080 PC server가 pose/depth 추론
- 2D keypoint + depth를 3D 좌표로 역투영
- iPhone LiDAR/ARKit 기반 anchoring
- ZMQ multipart 네트워크 전송
- MacBook 또는 향후 Quest 화면에 skeleton overlay
- Option C: iPhone USB를 MacBook이 받아 ZMQ로 서버에 relay
- Record3D, ARKit, metric depth 관련 실험

## 5. 기술 스택/구현 자산

- Python 3.10+
- OpenCV
- numpy
- pyzmq
- ultralytics YOLOv8
- Record3D/iPhone LiDAR
- ARKit pose
- Metric3D/DepthAnything 계열 depth backend
- ZMQ DEALER/ROUTER
- pytest, ruff, mypy 일부

대표 자산:

- `eagle-eye-clone/README.md`
- `eagle-eye-clone/pyproject.toml`
- `eagle-eye-clone/docs/status.md`
- `eagle-eye-clone/docs/final.md`
- `eagle-eye-clone/docs/plans/redesign-2026-04-15.md`
- `eagle-eye-clone/docs/qa/smoke.md`
- `eagle-eye-clone/src/sensing_node/client.py`
- `eagle-eye-clone/src/compute_node/server.py`
- `eagle-eye-clone/src/compute_node/anchoring.py`
- `eagle-eye-clone/src/compute_node/network_iphone_receiver.py`

## 6. 웹사이트 메시징 기회

안전한 메시지:

- "멀티센서 AR 정합 연구."
- "실시간 pose/depth/SLAM 파이프라인 프로토타이핑."
- "현실 장비 제약 속에서 shared-world AR 문제를 분해한 R&D 사례."
- "원격 센서와 AR 디스플레이 간 좌표계 정합 실험."

피해야 할 메시지:

- "벽 너머 감시"
- "군사용 제품 복제"
- "Anduril 공식/제휴"로 보이는 표현
- 실사용 보안/감시 제품처럼 읽히는 표현

## 7. 오픈 질문/리스크

- 재설계 문서에 기존 전제가 실패했다고 명시된 부분이 있다.
- DAv2 근거리 depth 편향, Record3D USB 의존, markerless alignment 난도, Quest 2 연동 미완료가 리스크다.
- USB 케이블/실동작 검증 대기 상태가 문서에 남아 있다.
- 최신 코드 주석과 일부 문서의 MASt3R 중심 설명이 동기화되지 않은 것으로 보인다.
- dual-use와 프라이버시 메시징 리스크가 크다.

## 8. 대표 근거

- `eagle-eye-clone/pyproject.toml`
- `eagle-eye-clone/docs/status.md`
- `eagle-eye-clone/docs/final.md`
- `eagle-eye-clone/docs/plans/redesign-2026-04-15.md`
- `eagle-eye-clone/src/compute_node/server.py`
- `eagle-eye-clone/src/sensing_node/client.py`
- `eagle-eye-clone/src/compute_node/anchoring.py`
