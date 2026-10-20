# 과제1 · 나를 소개하는 한 페이지

ALEPH T01을 수행하는 개인 소개 사이트 프로젝트입니다. 공개 범위를 직접 정하고, 실제 경험과 근거로 자신을 소개하며, 구현·검증·배포·판단 과정을 기록합니다.

현재 상태: 실제 소개 페이지 구현 및 로컬 검증 완료. 근거 자료는 추후 제공 예정입니다. GitHub 원격 저장소와 Vercel 배포는 아직 연결하지 않았습니다.

## 시작하기

Node.js 22 이상에서 실행합니다. 외부 패키지 설치 없이 동작합니다.

```sh
npm run dev
npm test
npm run build
```

개발 주소: http://localhost:5173 · 빌드 결과: `dist/`

## 문서 안내

- [프로젝트 개요](docs/brief.md)
- [과제 요구사항과 추적표](docs/requirements.md)
- [진행 계획](docs/plan.md)
- [자기소개 콘텐츠 질문](docs/content-plan.md)
- [공개 범위](docs/disclosure-policy.md)
- [판단 기록](docs/decisions.md) / [작업 기록](docs/worklog.md)
- [검증 체크리스트](docs/qa/checklist.md) / [결함 기록](docs/qa/defects.md)
- [배포 안내](docs/deployment/setup.md) / [배포 이력](docs/deployment/releases.md)
- [최종 제출 초안](docs/submission/final.md)

공개 사이트 URL: 미정 · GitHub URL: 미정


브라우저 검사 결과와 스크린샷은 [검증 기록](docs/qa/checklist.md), 근거 추가 방법은 [추가 안내](docs/evidence-guide.md)를 참고하세요. 자동 검사 6개는 정적 구조·대비율·빌드 회귀 검사이며 실제 브라우저 검사는 별도 기록입니다.

