## 작업가이드

1. 개발할 컴포넌트 소스가 위치할 디렉토리를 'src/components/컴포넌트명/' 경로에 생성하고 개발을 시작한다.
2. 개발한 컴포넌트의 루트를 'src/components/index.js 파일에 노출시킨다.
3. 테스트를 위해 'src/example/컴포넌트명 + Test' 디렉토리를 생성하고 테스트 페이지를 개발한다.
4. 개발한 테스트 페이지를 'src/testClientRoot.js' 파일 상단의 testPageInfomationList 배열에 추가한다. 
6. 개발후 컴포넌트의 배포를 원하면 webpack.prod.js의 entry부분에 컴포넌트를 추가한다.
5. npm start

### dev_dist

npm start로 개발서버를 실행했을때 빌드되는 파일이 생성되는 경로입니다.

파일 생성을 원하지 않으면 webpack.dev.js의 writeToDisk: false로 세팅합니다.

### dist
 
npm run build로 빌드된 production의 목적의 파일이 생성되는 경로입니다.

관련 설정은 webpack.prod.js를 참조하세요.

### 사용한 npm packpage

[before-build-webpack](https://www.npmjs.com/package/before-build-webpack)

빌드전에 특정 콜백을 실행

```javascript
var WebpackBeforeBuildPlugin = require('before-build-webpack');
// ...
  module: {
    plugins: [
      new WebpackBeforeBuildPlugin(function(stats, callback) {
        // Do whatever you want...
        callback(); // don't call it if you do want to stop compilation
      }),
    ]
  },
// ...

```

[webpack-merge](https://www.npmjs.com/package/webpack-merge)

웹팩 설정파일 분리하기위한 용도

```javascript 

// Customizing array/object behavior
var output = merge(
  {
    customizeArray(a, b, key) {
      if (key === 'extensions') {
        return _.uniq([...a, ...b]);
      }
 
      // Fall back to default merging
      return undefined;
    },
    customizeObject(a, b, key) {
      if (key === 'module') {
        // Custom merging
        return _.merge({}, a, b);
      }
 
      // Fall back to default merging
      return undefined;
    }
  }
)(object1, object2, object3, ...);

```



### 참고한 문서

React, webpack, Babel 세팅

[How to set up React, webpack, and Babel 7 from scratch](https://www.valentinog.com/blog/babel/)

Source Map에 관하여

[(Webpack) devtool 옵션 퍼포먼스](https://perfectacle.github.io/2016/11/14/Webpack-devtool-option-Performance/)

IE8 지원 관련

[bable-polyfill](https://programmingsummaries.tistory.com/401)

bable-polyfill은 dependency와 devDependency중 어디에 위치해야할까

[stackoverflow](https://stackoverflow.com/questions/40143357/do-you-put-babel-and-webpack-in-devdependencies-or-dependencies)

리액트 타입스크립트 웹팩 바벨

[How to Set Up a React TypeScript Project from Scratch with Babel and Webpack](https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d)