# C-Link Homepage

중앙대학교 블록체인 학회 C-Link 홈페이지 제작

## 사용한 라이브러리

- React
- Next
- TypeScript
- Styled Components
- Ant-Design

## 개발 환경 설정

- Node (필수)
- Git (필수)
- Yarn (권장)
- Visual Studio Code (권장)
- Chrome (권장)

## 브랜치 전략

- main : 현재 버전이 있는 브랜치 (아마존에 배포되는 브랜치)
- develop : 다음 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치

main과 develop 브랜치는 1개만 존재하고, feature 브랜치는 동시에 여러 개 존재할 수 있다. 

기능 개발은 여러 feature 브랜치에서 각자 진행하고, 그 결과물을 합쳐서 develop에 병합한다. 

develop에서 빌드 오류랑 배포 오류 등을 점검하고, 문제 없으면 develop를 master로 병합한 후 아마존으로 배포한다. 

이 과정을 반복한다.

## 설치 방법

1. 의존성 설치
```
> cd (프로젝트 폴더)
> yarn
```
프로젝트 폴더로 이동한 후 프로젝트에 필요한 외부 패키지를 설치한다.

2. 로컬 컴퓨터에서 개발 모드로 실행
```
> yarn dev
```
수정한 파일을 저장하면 코드 변경 사항이 자동으로 브라우저에 반영된다.

2. 빌드 후 프로덕션 모드로 실행
```
> yarn build
> yarn start
```
코드 변경 사항이 자동으로 반영되진 않지만 코드 최적화로 인해 실행 속도가 빠르다.

3. 브라우저에서 아래 주소로 접속한다.
```
http://localhost:3000/
```

## 프로젝트 구조

- public : 이미지 등 크기가 크지만 자주 안 바뀌는 정적 파일 모음

- src : 프로젝트와 관련된 코드 모음

  - components : React 컴포넌트 관련 파일 모음

  - hooks : 공통되는 React Custom Hook 모음

  - pages : 파일의 경로가 실제 URL이 된다.

  - types : 프로젝트 전체에 공통으로 쓰이는 TypeScript의 type, interface를 모아 놓은 폴더

  - utils : 프로젝트 전체에 공통으로 쓰이는 함수를 모아 놓은 폴더

- test : Jest를 활용해 컴포넌트를 테스트하는 코드를 모아 놓은 폴더

## NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
