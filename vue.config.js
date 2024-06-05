
module.exports = {
  chainWebpack: config => {
    // config.optimization.minimize(true);
    // config.module
    // .rule('fonts')
    // .test(/\.(ttf|otf|eot|woff|woff2|svg|ttc)$/)
    // .use('file-loader')
    // .loader('file-loader')
    // .tap(options => {
    //   // 修改文件名，如果需要的话
    //   return options
    // })
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf|ttc)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
        // .options({
        //   limit: 10000,
        //   name: 'assets/fonts/[name].[hash:8].[ext]'
        // })
      .tap(options => {
        // 修改文件名，如果需要的话
        return options
      })
  },
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/assets/styles/variables.scss";`
      },
    }
  }
}