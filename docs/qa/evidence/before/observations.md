# 수정 전 관찰 기록

2026-10-20, 실제 도구 결과 요약. 화면에 일부러 결함을 추가한 것이 아니라 최초 구현과 기존 빌드 동작을 검사한 결과입니다.

- D01: 1366×768, scrollY=0, evidence top=792.59375, bottom=887.78125.
- D02: summary 이름 3개 모두 `상황과 행동 살펴보기 ＋`. 접근성 트리에서도 동일 동작 이름으로 표시됨.
- D03: 첫 회귀 검사 `npm test`: tests 6, pass 5, fail 1. 실패명 `재빌드 시 삭제된 공개 자료가 배포 결과에 남지 않는다`. 오류 `AssertionError: Missing expected rejection.`. 삭제 후에도 dist 파일 접근이 성공해 기대한 거부가 발생하지 않음.

D03 수정 후 동일 검사: tests 6, pass 6, fail 0, todo 0.
