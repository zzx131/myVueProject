/**
 *  @author @wangzhongyu
 *  配置代理
 *
 */
module.exports = {
  proxy: {
    '/springboot': {
      target: 'http://localhost:8080',
      changeOrigin: true,  // 是否跨域
      pathRewrite: {
        '^/springboot': '/springboot'
      }
    }
  }
}