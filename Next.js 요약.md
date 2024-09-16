# Next.js

## Next.js 보호된 파일명 및 변수
[참조](https://nextjs.org/docs/app/api-reference/file-conventions)
***page.js, layout.js, icon.png, metadata***
* page.js
  * app 폴더내 page.js 라는 파일이 있으면 해당 파일이 프로젝트 root 위치에 있는 layout.js에 들어가게 됩니다.
  * page.js가 없으면 app폴더내 jsx 파일이 있어도 페이지로 인식하지 않습니다.

* layout.js
  * page.js 파일을 감싸는 파일 프로젝트내 무조건 1개 이상 존재해야합니다.
  * metadata 변수 : 프로젝트에 설명을 담당하는 변수 형태로 페이지에 header에 내용을 정의할 수 있습니다.
    ~~~js
    export const metadata = { title: '', description : ''} 
    ~~~
* icon.png
  * icon 이름에 이미지 파일이라면 favicon으로 사용됩니다. 
* not-found.js => ‘Not Found’ 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)
* error.js => 기타 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)
* loading-out.js => 형제 또는 중첩 페이지(또는 레이아웃)가 데이터를 가져오는 동안 표시되는 폴백 페이지
* route.js => API 경로 생성(즉, JSX 코드가 아닌 데이터를 반환하는 페이지, 예: JSON 형식)


## Router
### 1. Pages Router
   * 기본 구조: Next.js의 기본 라우팅 시스템입니다. pages 디렉토리에 파일을 생성하면 자동으로 해당 경로가 생성됩니다.
   파일 기반 라우팅: 각 파일의 이름이 URL 경로와 매핑됩니다. 예를 들어, pages/about.js 파일은 /about 경로에 해당합니다.
   SSR 및 SSG 지원: 페이지별로 getServerSideProps 및 getStaticProps를 사용하여 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원합니다.
   간단한 사용법: 기본적인 페이지를 만들고 라우팅하는 데 매우 직관적이고 간단합니다.
### 2. App Router
   * 새로운 접근 방식: Next.js 13에서 도입된 새로운 라우팅 시스템으로, 더 유연하고 강력한 기능을 제공합니다.
   디렉토리 구조: app 디렉토리를 사용하여 컴포넌트 및 레이아웃을 구성할 수 있습니다. 이 구조는 더 나은 코드 분할과 레이아웃 관리를 지원합니다.
   서버 컴포넌트: 서버 컴포넌트를 사용하여 클라이언트 측에서 불필요한 데이터를 줄이고, 성능을 향상시킬 수 있습니다.
   라우트 레이아웃: 같은 레이아웃을 공유하는 여러 페이지를 쉽게 관리할 수 있어, 중복 코드를 줄이고 유지보수를 용이하게 합니다.