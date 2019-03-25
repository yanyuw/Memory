module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  },
  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/svg',
      text: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://static.muxixyz.com/to-gather/' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.108.79.110:3125/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
  // filenameHashing: false
}
