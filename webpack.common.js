const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
         /* devMode ? 'style-loader' : */
         MiniCssExtractPlugin.loader,
         'css-loader?modules',
         'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  resolve: {
    // 여기에 지정한 확장자는 소스코드에서 임포트시 파일명의 확장자를 생략할 수 있다.
    extensions: [ '.jsx', '.js', '.tsx', '.ts']
  },
  plugins: [
    // 웹팩4 기반 CSS를 별도의 파일로 추출한다.
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // 다시 빌드될때 출력경로를 깨끗하게 정리한다.
    new CleanWebpackPlugin(),
  ]
};
