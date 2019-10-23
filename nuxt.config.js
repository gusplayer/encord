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
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { viewport: 'viewport' },
      {
        mobileApp: 'mobile-web-app-capable'
      },
      {
        mobileAppIOS: 'apple-mobile-web-app-capable'
      },
      { appleStatusBarStyle: 'default' },
      { nativeUI: false },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    icon: {
      iconSrc: './static/icon.png',
      sizes: [16, 120, 144, 152, 192, 384, 512]
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Dosis:700'
      }
      // {
      //   rel: 'stylesheet',
      //   href: 'https://file.myfontastic.com/sY4AGNcr7RKWKU7qdijeJH/icons.css'
      // }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8470' },
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
    baseURL: 'https://administrador.app-encord.com'
  },
  auth: {
    redirect: {
      logout: '/login'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/oauth/token',
            method: 'post',
            propertyName: 'access_token'
          },
          user: {
            url: '/api/data',
            method: 'get',
            propertyName: 'data'
          },
          logout: false
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },
  mode: 'spa',
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vue-fuse'],
    postcss: false,
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
  css: [
    '~/static/index.css',
    '~/assets/css/main.css',
    '~/assets/styles.css',
    'swiper/dist/css/swiper.css'
  ],
  plugins: [
    '~/plugins/vue-fuse',
    '~/plugins/element-ui',
    '~/plugins/vue-signature',
    '~/plugins/swiper.js',
    '~/plugins/vue2-frappe.js',
    '~/plugins/vee-validate.js',
    '~/plugins/icons.js'
  ]
}
