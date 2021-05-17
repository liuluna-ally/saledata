module.exports = {
    configureWebpack: {
      resolve:{
        extensions:[],
        alias:{
          'assets':'@/assets',
          'common':'@/components/common',
          'components':'@/components',
          'network':'@/network',
          'views':'@/views',
        }
      }
    }
}