<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
             Vuex, axios, and a REST API with Nuxt
          </h1>
          <h2 class="subtitle">
            Showing a collections of posts and using dynamic routes for individual posts
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <!-- <logo/> -->
      <div v-html="content" class="contentWrapper content"></div>
    </div>
  </div>
</template>

<script>

import HomeContent from '~static/markdownFiles/HomeContent.md'
export default {
  data () {
    return {
      content: HomeContent
    }
  }
}
</script>

<style>
</style>
