# GitHub · Vercel 연결 계획

현재 원격 저장소와 Vercel 프로젝트는 미연결입니다.

1. Git 로컬 저장소를 초기화하고 공개 범위·비밀값 검사를 마친 파일을 커밋합니다.
2. GitHub에 `project-apprenticeship-01` 공개 저장소를 만들고 `origin` 연결 후 push합니다.
3. Vercel에서 해당 GitHub 저장소를 가져옵니다.
4. 프레임워크는 Other, 빌드 명령은 `npm run build`, 출력 디렉터리는 `dist`, 운영 브랜치는 `main`으로 설정합니다. Node.js는 22 이상을 사용합니다.
5. PR Preview를 확인하고 main 병합 후 운영 배포를 검사합니다.
6. 제출할 운영 URL과 공개 소스 고정 URL을 새 시크릿 창에서 검사합니다. 인증 화면이 나타나면 아직 제출 기준 미충족입니다.
7. releases.md에 배포 코드 SHA, URL, 시각, 검사 결과를 기록합니다.

사이트에는 `dist/`만 배포합니다. docs는 공개 GitHub 소스에서 읽을 수 있으므로 문서에도 비공개 정보를 넣지 않습니다.

소스 제출 형식: `https://github.com/<owner>/project-apprenticeship-01/tree/<full-commit-sha>`

참고: https://vercel.com/docs/git/vercel-for-github
