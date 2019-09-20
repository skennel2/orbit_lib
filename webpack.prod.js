const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    // 이 소스맵은 디버깅이 불가능하다.
    //devtool: 'cheap-module-source-map',
    /**
     * TODO: 컴포넌트별 코드스플리팅을 위해 엔트리 포인트를 컴포넌트 별로 두었을때와 import()를 사용했을때의 빌드결과가 다르다? 
     * import를 사용하면 vender가 특별한 설정없이도 따로 번들로 분리된다.
     * SplitChunksPlugin
     */
    //entry: './src/components/index.js',
    entry: {
        index: './src/components',
        Label: './src/components/Label/Label',
        TestComponent: './src/components/TestComponent/TestComponent'
    },
    output: {
        //filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Orbit',
        libraryTarget: 'umd',
        //libraryExport: ['TestComponent']
    },
    performance: {
        hints: 'warning', // 'error' or false are valid too
        maxEntrypointSize: 10000000, // in bytes
        maxAssetSize: 10000000, // in bytes
    },
    // 출력 번들에서 종속되어있는 패키지를 제외할 수 있는 방법을 제공한다.(일반적으로 라이브러리 개발시 이용)
    externals: {
        react: 'react',
        reactDOM: 'react-dom',
        propTypes: 'prop-types',
        'luna-rocket': 'luna-rocket',
        keycode: 'keycode'
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',  
    //     }
    //     //runtimeChunk: 'single'
    // }
    // 브라우저에서 참조 될 때 출력 디렉토리의 공용 URL을 지정
    // publicPath : ''
});