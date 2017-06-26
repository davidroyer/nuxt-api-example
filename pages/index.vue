<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Markdown files with Nuxt.js
          </h1>
          <h2 class="subtitle">
            Use a specfic file or dynamic importing
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
import Logo from '~components/Logo.vue'
import HomeContent from '~static/markdownFiles/HomeContent.md'
export default {
  components: {
    Logo
  },
  data () {
    return {
      content: HomeContent
    }
  }
}
</script>

<style>

</style>
