const { join } = require('path')
const axios = require('axios')
const _ = require('lodash')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: ' Nuxt API Example With Vuex - David Royer',
    titleTemplate: '%s - Nuxt API Example - David Royer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt API Example - Using Vuex, axios, and a REST API with Nuxt by David Royer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    ['@nuxtjs/markdownit', { linkify: true } ]
  ],
  generate: {
    routes: function() {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return _.map(res.data, function(post, key) {
          return `/posts/${post.id}`
        })
      })
    }
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    join('~assets/css/main.scss')
  ],
  router: {
    middleware: 'menu'
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
