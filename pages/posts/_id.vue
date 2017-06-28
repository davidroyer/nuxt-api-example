<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <a @click.stop="$router.push('/postsview')" class="backButton">
            <span class="icon is-large">
              <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
            </span>
          </a>
          <h1 class="title">
            {{post.title}}
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <section>
        <div class="content" v-html="post.body"></div>
      </section>
    </div>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
export default {
  fetch ({ store, params }) {
    store.dispatch('getPost', params.id)
  },
  // async fetch ({ store, params }) {
  //   let { data } = await axios.get(`posts/${params.id}`)
  //   store.commit('setCurrentPost', data)
  // },
  computed: {
    post () {
      return this.$store.state.post
    },
    test () {
      return this.$store.state.test
    }
  }
}
</script>

<style lang="scss">
.container section {
  padding: 1.25em;
}

.title {
  text-transform: capitalize;
}

.backButton {
  position: fixed;
  left: 10px;
  bottom: 10px;
  i {
    color: #363636 !important;
  }
}


</style>
