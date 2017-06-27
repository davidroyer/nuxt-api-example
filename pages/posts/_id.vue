<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{$route.params.id}}
          </h1>
          <!-- <h2 class="subtitle">
            Use a specfic file or dynamic importing
          </h2> -->
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  async fetch ({ store, params }) {
    let { data } = await axios.get(`posts/${params.id}`)
    console.log(data)
    store.commit('loadPosts', {post: data})
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
