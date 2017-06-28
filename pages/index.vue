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
    <div class="container contentContainer">
      <div v-html="content" class="contentWrapper content"></div>
      <a class="button is-info is-outlined viewPostsButton" @click="$router.push('/postsview')">
        <span>View Posts</span>
        <span class="icon">
          <i class="fa fa-arrow-circle-right"></i>
        </span>
      </a>
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
.contentContainer {
  padding: 1em 0 3em 0;
}

.viewPostsButton {
  margin-left: 1.5em;
  transition: .3s ease;
  font-weight: 600;
}
</style>
