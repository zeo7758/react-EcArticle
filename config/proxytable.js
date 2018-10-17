module.exports = {
    '/timelineApi': {
      target: 'https://timeline-merger-ms.juejin.im',
      secure: false,
          "changeOrigin":true,
          pathRewrite: {
              '^/timelineApi': ''
          }
      },
      '/xiaoce-api': {
          target: 'https://xiaoce-timeline-api-ms.juejin.im',
          secure: false,
          "changeOrigin":true,
          pathRewrite: {
              '^/xiaoce-api': ''
          }
      },
      '/xiaoceinfo-api': {

          target: 'https://xiaoce-cache-api-ms.juejin.im',
          secure: false,
          "changeOrigin":true,
          pathRewrite: {
              '^/xiaoceinfo-api': ''
          }
      },
      '/article-api': {

          target: 'https://post-storage-api-ms.juejin.im',
          secure: false,
          "changeOrigin":true,
          pathRewrite: {
              '^/article-api': ''
          }
      },
      '/juejin-api': {
          target: 'https://juejin.im',
        //   https://juejin.im
        //   secure: false,
          "changeOrigin":true,
          pathRewrite: {
              '^/juejin-api': ''
          }
      },
      '/swiper-api': {
            target: 'https://event-storage-api-ms.juejin.im',
            secure: false,
            "changeOrigin":true,
            pathRewrite: {
                '^/swiper-api': ''
            }
      },
       '/storage-api': {
            target: 'https://user-storage-api-ms.juejin.im',
            secure: false,
            "changeOrigin":true,
            pathRewrite: {
                '^/storage-api': ''
            }
      }
      
  }