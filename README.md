
# DOYU's Blog


> _Next.js의 App Router와 TypeScript, SCSS_ 등으로 **개발과 관련하여 관심있는 주제를 스크랩하고 책, 강의, 세미나 등에서 새롭게 알게된 것들을 기록**하는 등 일부 다국적 서비스가 지원되는 블로그 겸 개인 포트폴리오 사이트입니다. Vercel로 배포되었습니다.

<br />

![블로그](https://github.com/Doyu-Lee/portfolio_doyu/assets/125176463/d3e87e59-4052-4498-827f-a3f48e8eab46)

- [한국어 페이지 링크](https://portfolio-doyu-git-notion-doyu-lee.vercel.app/ko)
- [영어 페이지 링크](https://portfolio-doyu-git-notion-doyu-lee.vercel.app/en)

 -> 둘 중 한 링크로 들어가셔서 오른쪽 상단의 언어 버튼을 누르셔도 한/영 전환이 됩니다.

<br />

## 🧐 기술 스택
[![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![React Badge](https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white)](https://reactjs.org/)
[![Next.js Badge](https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white)](https://nextjs.org/)
[![SCSS Badge](https://img.shields.io/badge/SCSS-CC6699.svg?&style=for-the-badge&logo=Sass&logoColor=white)](https://sass-lang.com/)

[![Husky Badge](https://img.shields.io/badge/Husky-4B32C3.svg?&style=for-the-badge)](https://typicode.github.io/husky/)
[![Styled-lint Badge](https://img.shields.io/badge/Styled--lint-DB7093.svg?&style=for-the-badge)](https://styled-components.com/docs/tooling#linting)[![lint-staged Badge](https://img.shields.io/badge/lint--staged-F7B93E.svg?&style=for-the-badge)](https://github.com/okonet/lint-staged)
[![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E.svg?&style=for-the-badge&logo=Prettier&logoColor=white)](https://prettier.io/)
[![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3.svg?&style=for-the-badge&logo=ESLint&logoColor=white)](https://eslint.org/)

[![Vercel Badge](https://img.shields.io/badge/Vercel-000000.svg?&style=for-the-badge&logo=Vercel&logoColor=white)](https://vercel.com/)

<details>
   <summary> 이번 프로젝트에서 SCSS를 선택한 이유 ( 👈🏼 클릭!) </summary>
<br />

* 특히 **SCSS를 선택한 이유**는 앞서 사용해본 Styled-Component와 Emotion과 같은 CSS-in-JS는 런타임에서 스타일 직렬화가 일어나기 때문에 어느정도 `런타임 비용이 든다`는 문제가 있기 때문이었습니다. 
- CSS-in-JS 방식 중에서도 런타임 비용이 들지 않는 Vanilla Extract 등의 라이브러리 경우에도 결국 CSS-in-JS의 특징인 컴포넌트가 처음 마운트 될 때 스타일이 계속 삽입되어 브라우저가 모든 `DOM 노드에서 스타일이 다시 계산된다`는 한계가 있습니다. 
- 결론적으로 CSS-in-JS를 쓰는 이유 중 하나인 스타일이 지역 스코프라는 점과, CSS 파일이 해당 컴포넌트와 같은 위치에 배치된다는 것은 CSS 모듈로 해결할 수 있고, CSS 모듈에서 코드 중복의 단점은 **SCSS**를 사용하여 mixin 변수활용으로 해결했습니다. 

</details>

<br>



## ⌨️ 로컬 실행 방법

### 1. 환경 변수 설정 

해당 레포지토리를 clone하셔서 여신 후, 노션 API와 관련하여 아래 링크를 참고하셔서 환경변수를 설정하시면 됩니다.
- [공식 문서 : Notion API](https://developers.notion.com/docs/create-a-notion-integration)

```
NOTION_PAGE_ID={노션 페이지 아이디}
NOTION_TOKEN_V2={노션 토큰 값}
```

### 2. 패키지매니저로 로컬 설치 및 개발모드로 실행

그 뒤, 로컬에서 실행을 할 수 있습니다. 프로젝트는 pnpm으로 관리됩니다.

```
pnpm install
pnpm dev
```

<hr>

## 🌟 구현 기능

**[목차]**
- [다국적 언어 지원](#다국적-언어-지원)
  - 렌더링 방식에 따른 한/영 변환 기능
  - JEST 동적 라우팅 테스트
- [최적화](#최적화)
  - next.js 내장기능을 사용한 최적화
    - next/font
    - next/dynamic 
- [노션API](#노션API)
  - 노션 API를 활용한 페이지 연동
  - 미들웨어를 활용한 리다이렉션 설정 
- [인터랙티브](#인터랙티브)
  - 3D 카드 효과 추가 (useRef의 데이터 저장 로직, useLayoutEffect)
  - 타이핑 효과 애니메이션 컴포넌트 및 영/한 데이터 추가
  - useRef 배열로 관리하며 도미노 글자 애니메이션 직접 구현
- [기타](#기타)
  - 페이지 반응형 적용 

<br />

### 다국적 언어 지원

#### 1. 렌더링 방식에 따른 한/영 변환 기능
- 지원하는 언어 별 json 데이터 생성
- SSR / CSR용 useTranslation 훅 개별 생성 
- 페이지마다 params 및 URL 추출 로직을 추가 
- `en/roadmap`에서 언어 전환 버튼을 눌렀을 때, `ko`가 아니라 `ko/roadmap`으로 이동하도록 함.
- 헤더에서 한/영 변환에 따른 폰트를 개별적으로 적용

#### 2. JEST 동적 라우팅 테스트
- 전역에 jest react-i18next 모듈 추가
- 동적 라우팅에 따라 라우팅 테스트 수정 

<br />

### 최적화

#### 1. next.js 내장기능을 사용한 최적화 
- `next/link`, `next/dynamic`, `next/font`, `next/image` 등을 이용한 성능 최적화 

##### next/font 
- 폰트의 경우 아래와 같이 전역 변수로 등록하여 사용

``` typescript
import {
  Space_Mono, // Google font의 Space Mono 같이 띄어쓰기가 되어있는 폰트명은 언더바 사용 
...
} from 'next/font/google';

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-spaceMono',  // 전역변수로 등록
});
```

```typescript
// 최상위 layout.tsx
import {
...
  spaceMono,
} from '../../../public/fonts/fonts';


export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
  const fontVariables = `
...
  ${spaceMono.variable} 
`;

  return (
    <html lang={lng} dir={dir(lng)} className={fontVariables}> // html 태그에 className으로 넣어준 뒤 사용
```

> `next/font/google`에 내장되어 있는 영어 폰트에 한하여 빌드타임에 미리 로컬에 폰트를 저장할 수 있기 때문에 영문 폰트와 관련된 layout shift를 최소화하여 성능을 최적화하였습니다. 외부에서 가져온 한글 폰트는 로딩 컴포넌트를 삽입하여 로드되기 전 레이아웃이 깨지는 현상을 막았습니다.

##### next/dynamic

> preload 될 필요가 없는 컴포넌트는 Lazy Loading으로 네트워크 비용을 절감시키고자 했습니다.

``` typescript
const ContactArticle = dynamic(() => import('@/components/contacts/ContactArticle'), {
  ssr: false,
});
```


<br />

### 노션API

#### 1. 노션 API를 활용한 페이지 연동 
- ISR 기능 활용
  - revalidate 변수를 선언하여 1시간 마다 데이터 refetching 

 #### 2. 미들웨어를 활용한 리다이렉션 설정
  - 리다이렉션 이슈를 미들웨어를 활용하여 해결

  > 현재 웹사이트는 다국어 지원으로 `/ko` 또는 `/en`과 같이 지원 언어 데이터 값이 경로에 포함이 됩니다. 문제는 노션 페이지 개별 게시글을 입력할 경우 자동으로 `/{페이지 값}`으로 이동한다는 것이었습니다.
  >  - useRouter을 쓸 수 없는 SSR 메인 페이지였고, SSR에서는 리다이렉션 기능이 지원되지 않음을 확인했습니다.
  >  - 따라서 react.config에서 redirection 설정을 하고자 했으나 `/{페이지값} -> /ko/{페이지값}` 이렇게 동적 언어 데이터가 아닌 특정 데이터 값을 입력해줘야 했고, 그후 다시 홈 버튼을 누르면 `/ko/{페이지값}/ko` 등으로 나오는 사이드 이펙트가 있었습니다.
  >  - app 폴더 동위에 middleware를 생성하여 redirection 시키는 것으로 해결했습니다.

<br />

### 인터랙티브 

#### 1. 3D 카드 효과 추가
- `transform-style: preserve-3d` 속성을 활용 
- 데이터가 변동되면 화면이 리렌더링되는 useState 대신 useRef를 사용하여 데이터 변경 
- `useLayoutEffect`를 이용하여 컴포넌트가 렌더링되기 전에 동기적으로 애니메이션 이벤트 등록 및 함수 실행
- 애니메이션 최적화 API `requestAnimationFrame()` 적용

#### 2. 타이핑 효과 애니메이션 컴포넌트 및 영/한 데이터 추가
- `react-typist` 라이브러리를 사용했지만 최신 React 18버전 이상에서 호환되지 않는 일부 성능 문제가 발생
- [해당 라이브러리 레포지토리 이슈](https://github.com/jstejada/react-typist/issues/124)에서 관련 문제 발견 후, 2022년 초부터 업데이트가 안 되고 있다는 것을 확인 
- `react-simple-typist`로 라이브러리 교체 후 이상없이 작동 

#### 3. useRef 배열로 관리하며 도미노 글자 애니메이션 직접 구현 
- span을 생성하는 `useEffect`, 해당 span에 시간차로 css를 적용하는 `useEffect`로 도미노처럼 차례대로 쓰러지는 듯한 글자 애니메이션을 적용
- `useEffect` 안에서 `useRef`과 같은 훅 사용이 불가능하기 때문에 `useEffect` 안에서 각 글자 데이터들이 map 함수에서 span 태그를 생성하는 로직을 짤 때 `createRef`를 사용하였지만 추후 함수 컴포넌트 방식에 맞게 `useRef`를 배열로 선언해준 다음 `useEffect` 안의 map 함수에서 해당 배열에 span 태그와 `ref` 값을 차례로 할당시키는 방법으로 리팩토링

```typeScript
  const spanRefs = useRef<null[] | HTMLSpanElement[]>([]);
  ...
  useEffect(() => {
    ...
      letters.map((letter, index) => {  // 예 ) letters =  '안녕하세요'.split('');
        const newSpan = (
          <span
            key={Math.random()}
            ref={(el) => {
              spanRef.current[index] = el;
            }}
          >
            {letter}
          </span>
        );
        return setChildRef((prev) => [...prev, newSpan]);
      });
    }

    return () => setChildRef([]);
  }, [titleLetters]);
```

<br />

### 기타

#### 1. 페이지 반응형 적용 
- 예상하는 사용자 접속 경로는 웹이지만, 갤럭시 폴드 (min-width : 280px)까지 반응형 적용 