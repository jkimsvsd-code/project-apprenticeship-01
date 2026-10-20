# GitHub · Vercel 운영 설정

2026-10-20 연결 및 첫 운영 배포 완료.

- GitHub 공개 저장소: https://github.com/jkimsvsd-code/project-apprenticeship-01
- 운영 사이트: https://project-apprenticeship-01.vercel.app
- Vercel 프로젝트: `jkimsvsd-code/project-apprenticeship-01`
- Git 연동: 위 GitHub 저장소 연결 완료. main의 후속 push는 운영 자동 배포 대상.
- 프레임워크: Other (정적 사이트)
- 설치: `npm ci` / 빌드: `npm run build` / 출력: `dist`
- 설정 파일: vercel.json, 배포 업로드 제외: .vercelignore
- 인증: 이미 로그인된 GitHub 브라우저 및 Vercel CLI 사용. 새 로그인 없이 진행.
- 커밋 작성자: J와 GitHub noreply 주소. 개인 실명·이메일 미사용.

## 변경·재배포 순서

1. 코드·문서를 수정하고 `npm test`, `npm run build`를 실행합니다.
2. 공개 범위 점검 후 커밋하고 GitHub에 push합니다.
3. GitHub Actions 및 Vercel 배포 완료 여부를 확인합니다.
4. 운영 URL에서 해상도·키보드·링크·콘솔 및 익명 접근을 확인합니다.
5. releases.md에 배포 코드 SHA와 검증 증거를 남깁니다.

CLI로 수동 운영 배포가 필요한 경우: `vercel deploy --prod`.

운영 도메인과 배포별 URL은 접근 정책이 다를 수 있습니다. 첫 배포 도구는 배포별 URL에 Vercel 인증 보호를 보고했으나, 운영 도메인은 쿠키·로그인 없는 HTTP 요청에서 200과 실제 페이지 본문이 확인되었습니다. 제출 결과물 주소는 검증한 운영 도메인을 사용합니다. 인증 보호 설정을 해제하지 않았습니다.

소스 제출은 releases.md에 기록한 40자리 full commit URL을 사용합니다. .vercel의 로컬 프로젝트 설정과 인증 정보는 Git에 올리지 않습니다.
