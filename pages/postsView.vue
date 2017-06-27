<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Posts
          </h1>
          <h2 class="subtitle">
            Displaying some posts
          </h2>
        </div>
      </div>
    </section>
    <section>
      <p class="title"></p>
      <div class="postsWrapper">
        <template v-for="post in Posts">
          <nuxt-link class="card" :key="post.id" :to="'/posts/'+post.id">{{post.title}}</nuxt-link>
        </template>
      </div>
      <!-- <div class="postsWrapper">
        <template v-for="post in Posts">
          <nuxt-link class="card" :key="post.id" :to="'/posts/'+post.id">{{post.title}}</nuxt-link>
        </template>
      </div> -->
    </section>
  </div>
</template>

<script>
import axios from '~plugins/axios.js'
export default {
  // async fetch ({ store, params }) {
  //   console.log(params)
  //   store.dispatch('retrievePosts')
  // },
  // async asyncData ({store}) {
  //   return { Posts: store.state.posts }
  // },
  async asyncData ({store}) {
    const {data} = await axios.get('posts')
    store.commit('loadPosts', {posts: data})
    // return { posts: data }
  },
  components: {
  },
  computed: {
    Posts () {
      return this.$store.state.posts
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.postsWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  a {
    display: block;
    margin: 1em;
    padding: 1em;
    width: 300px;
    text-transform: capitalize;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
