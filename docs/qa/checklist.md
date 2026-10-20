# 화면·상호작용 검증 결과

검사일: 2026-10-20 (Asia/Seoul)
환경: Codex 내장 Chromium 브라우저, http://localhost:5173/.
대상: 이번 작업의 로컬 소스. 아직 커밋·공개 배포되지 않음.

## 완료한 검사

| 검사 | 실제 결과 | 증거 |
|---|---|---|
| 1366×768 초기 화면 | 소개·활동·근거 영역 모두 표시, 근거 영역 하단 762.95px | evidence/after/1366-full.png |
| 1920×1080 초기 화면 | 소개·활동·근거 영역 모두 표시, 근거 영역 하단 995.77px | evidence/after/1920-full.png |
| 가로 넘침 | 위 두 해상도 및 390×844, 320×740 모두 없음 | evidence/after/browser-results.json |
| 마우스 | 경험 3개 모두 열림 | browser-results.json |
| Enter·Space | 각 경험에서 Enter 닫힘, Space 열림·닫힘 확인 | browser-results.json |
| Tab | 본문 바로가기 → 로고 → 메뉴 3개 → 소개 링크 → 경험 3개 → 처음으로, 모든 요소 초점선 3px | browser-results.json |
| 링크 | 내부 링크 7개 각각 선언한 해시로 이동 | browser-results.json |
| 제목 | h1 1개, h1→h2→h3 순서, 단계 건너뜀 없음 | 자동 검사 |
| 대비율 | 화면 색 조합 최소 5.08:1, 모든 크기에서 일반 글자 기준 충족 | npm test |
| 콘솔 | 로컬 사용 흐름에서 error·warn 0건 | browser-results.json |
| 움직임 | 지속 애니메이션 없음. 스무스 스크롤은 prefers-reduced-motion에서 auto로 전환 | CSS 확인; OS 설정 전환 실기 검사는 미실시 |
| 모바일 | 390px 전체 화면 시각 점검, 단일 열 배치 | evidence/after/mobile-390.png |
| 자동 검사 | 6개 통과, 실패 0, TODO 0 | npm test |
| 빌드 | 성공, 삭제한 공개 자료가 다음 빌드에서 제거됨 | npm run build 및 회귀 검사 |

## 남은 항목

- C09: 별도 근거 자료 추후 제공 및 연결. 준비 중 표시는 근거 제출 완료가 아님.
- C01·C18: 실제 공개 URL에서 익명 접근과 콘솔을 재검사해야 함.
- C24: 알려진 형식의 비밀값 검색과 파일 점검은 보조 검사이며 모든 가능한 비밀값 부재를 보장하지 않음. 첫 커밋·배포 전 재확인.
- 최종 제출 URL과 full commit SHA 확정.

자료를 추가하거나 레이아웃을 수정한 뒤에는 영향을 받는 항목을 재검사합니다. 브라우저 결과는 npm test가 재현하는 검사와 구분합니다.
