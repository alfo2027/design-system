# 디자인 시스템 Storybook

[Paper 디자인 시스템](https://app.paper.design/file/01M3KBJZ5H7XQ53Z2M4Z8FYDH5/p-1-0)을 React + TypeScript Storybook으로 옮긴 프로젝트입니다.

## 실행

Node.js 22.12 이상을 사용합니다.

```bash
npm install
npm run storybook
```

[Storybook 시작 화면](http://localhost:6006/?path=/story/overview--guide)을 엽니다.

## 포함된 내용

- Paper 문서 8개: Overview, Design Token, Color, Typography, Iconography, Layout, Guidelines, Components 원본 레퍼런스
- 그레이스케일 10단계, 프라이머리, 포인트 컬러 3종, 의미별 색상 및 간격·라운드 토큰
- Pretendard 400·500·700과 20px을 포함한 타이포그래피 체계
- 실제 React 컴포넌트: Button, TextField, Badge, Icon
- 버튼 상태 4종, 입력 오류·비활성 상태, 배지 4종, SVG 아이콘 24개
- 속성을 바꿀 수 있는 Controls, 자동 생성 Docs, 클릭·입력 인터랙션 테스트

## 폴더 구조

```text
.storybook/          # Storybook 설정, 문서 순서
src/
  assets/fonts/      # Pretendard 로컬 폰트 및 SIL OFL 라이선스
  components/        # 재사용 컴포넌트, CSS, 스토리
  paper/             # Paper 문서와 원본 JSX 스냅샷 source.json
  styles/
    tokens.css       # Paper에서 가져온 CSS 변수
    global.css       # 폰트와 기본 스타일
tests/               # 접근성 속성 및 ID 연결 테스트
```

컴포넌트를 제품에 사용할 때는 `src/styles/global.css`를 한 번 불러오고 필요한 컴포넌트를 가져옵니다. 폰트는 로컬 파일을 사용하므로 외부 CDN에 의존하지 않습니다.

```tsx
import './styles/global.css';
import { Button } from './components/Button/Button';
import { TextField } from './components/TextField/TextField';

export function Example() {
  return <>
    <TextField label="이메일" type="email" hint="이메일 주소를 입력하세요." />
    <Button>계속하기</Button>
  </>;
}
```

## 검증 및 빌드

```bash
npm test
npm run build
```

`npm test`는 입력창의 라벨·오류 설명 연결, 고유 ID, 아이콘의 접근성 속성을 검사합니다. Storybook의 **Button → Interaction**, **TextField → Typing**에서는 실제 클릭·입력 테스트 결과를 Interactions 패널에서 확인할 수 있습니다.

`npm run build`는 타입 검사 후 정적 사이트를 `storybook-static/`에 생성합니다. 타입 검사만 하려면 `npm run typecheck`를 사용합니다.

## Paper 변경 반영

현재 결과는 Paper의 스냅샷이며 자동 동기화되지 않습니다. 원본은 `src/paper/source.json`에 보관했습니다. Paper 변경 시 해당 문서의 JSX와 CSS 토큰을 다시 내보내고, `src/paper/` 문서와 `src/styles/tokens.css`, 관련 React 컴포넌트를 함께 갱신합니다. 문서에는 Storybook 탐색 링크와 좁은 화면을 위한 레이아웃 조정을 적용했습니다.

## 배포

[공개 Storybook](https://alfo2027.github.io/design-system/?path=/story/overview--guide)

`main` 브랜치에 푸시하면 GitHub Actions가 테스트와 빌드를 실행하고 GitHub Pages에 자동 배포합니다. 워크플로는 `.github/workflows/deploy-storybook.yml`에 있습니다.
