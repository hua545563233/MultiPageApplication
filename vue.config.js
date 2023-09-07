// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  assetsDir: 'static',
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  pages: {
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/index.html',
      title: 'page2标题',
      filename: 'page1.html'
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/index.html',
      title: 'page2标题',
      filename: 'page2.html'
    },
    page3: {
      entry: 'src/pages/page3/main.js',
      // 自定义模板页面
      template: 'public/template.html',
      title: 'page3标题',
      filename: 'page3.html'
    }
  }
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     return {
  //       plugins: [
  //         new CompressionPlugin({
  //           filename: '[path].gz[query]',
  //           algorithm: 'gzip',
  //           test: /\.js$|\.css/,
  //           threshold: 10240,
  //           deleteOriginalAssets: true
  //         })
  //       ]
  //     }
  //   }
  // },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: '8080',
  //   https: false,
  //   open: true,
  //   proxy: {
  //     '/data': {
  //       target: 'http://10.2.6.186:9090/msdvp-data-rds/rds',
  //       ws: false,
  //       changeOrigin: true
  //     }
  //   }
  // }
}
