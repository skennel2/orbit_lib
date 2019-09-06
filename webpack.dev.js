const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/testClientRoot.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dev_dist'),
      publicPath: '/'
    },
    // 소스맵은 원본 소스와 난독화된 소스를 매핑해주는 방법
    devtool: 'inline-source-map',
    devServer: {
      port: 9000, // 개발서버 시작포트
      hot: true, // Enable webpack's Hot Module Replacement; webpack-dev-server를 이용하면 이 설정과 무관하게 돌아가는듯함
      inline: true,
      host: 'localhost',
      historyApiFallback: true,
      before : function(app, server){
        console.log(app)
        console.log(server)
      },
      after(app, server){
        console.log(app)
        console.log(server)
      },
      //publicPath : './public',
      writeToDisk: true
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html"
        }),
    ],
});