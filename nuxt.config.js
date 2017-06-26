const { join } = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Example - Markdown Files',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Example - Using Markdown Files by David Royer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    ['@nuxtjs/markdownit', { linkify: true } ]
    // {
    //   src: '@nuxtjs/markdownit',
    //   options: { linkify: true }
    // }
  ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    // 'hover.css/css/hover-min.css',
    // 'bulma/bulma.sass',
    join('~assets/css/main.scss')
  ],
  router: {
    middleware: 'test'
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
