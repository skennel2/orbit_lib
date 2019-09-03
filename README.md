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

### 참고한 문서

React, webpack, Babel 세팅

[How to set up React, webpack, and Babel 7 from scratch](https://www.valentinog.com/blog/babel/)

Source Map에 관하여

[(Webpack) devtool 옵션 퍼포먼스](https://perfectacle.github.io/2016/11/14/Webpack-devtool-option-Performance/)

IE8 지원 관련

[bable-polyfill](https://programmingsummaries.tistory.com/401)

