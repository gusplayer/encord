module.exports = {
  /*
  ** Headers of the page
  */
  // router: {
  //   base: '/encord/'
  // },
  head: {
    title: 'encord',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'encord' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Dosis:700'
      },
      {
        rel: 'stylesheet',
        href: 'https://file.myfontastic.com/sY4AGNcr7RKWKU7qdijeJH/icons.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8470' },
  mode: 'spa',
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-fuse'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/css/main.css'],
  plugins: ['~/plugins/vue-fuse', '~/plugins/element-ui']
}
