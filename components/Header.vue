<template lang="html">
    <nav class="nav has-shadow">
      <div class="nav-left">
        <nuxt-link class="siteTitle nav-item" to="/">Nuxt API Example</nuxt-link>
      </div>
        <span class="nav-toggle" :class="{'is-active': menuIsActive}" @click="$store.commit('toggleMenuState')">
          <span></span>
          <span></span>
          <span></span>
        </span>

      <transition mode="out-in" name="slide" appear>
        <div class="nav-right nav-menu" :class="{'is-active': menuIsActive}">

          <nuxt-link class="nav-item" to="/postsview">Posts</nuxt-link>

          <div class="nav-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary" target="_blank" rel="noopener" href="https://github.com/davidroyer/nuxt-api-example">
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
  computed: mapState([
    'menuIsActive'
  ]),
  methods: {
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

.nav {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

</style>
