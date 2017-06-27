<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Vuex with REST API Example
          </h1>
          <h2 class="subtitle">
            Getting data and loading routes
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
  },
  mounted () {
    this.$store.dispatch('retrievePosts')
  }
}
</script>

<style>

</style>
