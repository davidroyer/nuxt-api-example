<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">

          <a @click.stop="$router.push('/postsview')" class="backButton">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
              <i class="fa fa-arrow-left fa-stack-1x" aria-hidden="true"></i>
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

// function titleCase (title) {
//   if ((title===null) || (title===''))
//        return false;
//   else
//    title = title.toString();
//
//  return title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }

function titleCase (title) {
  if ((title === null) || (title === '')) {
    return false
  } else {
    return title.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }
}

export default {
  head () {
    return {
      title: titleCase(this.post.title)
    }
  },
  fetch ({ store, params }) {
    store.dispatch('getPost', params.id)
  },
  computed: {
    post () {
      return this.$store.state.post
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
  z-index: 9;
  transition: .3s ease;
  i {
    &.fa-circle {
        color: #3273dc;
    }
  }
}
</style>
