<template lang="html">
    <nav class="nav has-shadow">
      <div class="nav-left">
        <nuxt-link class="siteTitle nav-item" to="/">Nuxt Markdown Example</nuxt-link>
      </div>

      <!-- <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
      </div> -->

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->

        <span class="nav-toggle" :class="{'is-active': menuIsActive}" @click="$store.commit('toggleMenuState')">
          <span></span>
          <span></span>
          <span></span>
        </span>


      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <transition mode="out-in" name="slide" appear>
        <div class="nav-right nav-menu" :class="{'is-active': menuIsActive}">

          <nuxt-link class="nav-item" to="/dynamic/test1">Post 1</nuxt-link>
          <nuxt-link class="nav-item" to="/dynamic/test2">Post 2</nuxt-link>

          <div class="nav-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary" target="_blank" rel="noopener" href="https://github.com/davidroyer/nuxt-markdown-example">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Github Repoo</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </transition>
    </nav>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {
      // menuIsActive: false
    }
  },
  computed: mapState([
    'menuIsActive'
  ]),
  methods: {
    handleMenu () {
      this.menuIsActive = false
    },
    testState () {
      this.$store.commit('toggleMenuState')
    }
  }
}
</script>

<style lang="css">
.siteTitle {
  font-weight: 700;
  font-size: 1.75em;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.35s;
}

.slide-enter,
.slide-leave-active {
  opacity: 0;
}

</style>
