// vue.config.js
module.exports = {
    outputDir: './docs',
    publicPath: '/portfolio_pb',
    devServer:{
        historyApiFallback: true,
    },
    css: {
        loaderOptions: {
          scss: {
            additionalData:  `@import "@/style/scss/_utils.scss";`
          }
        }
    },
}