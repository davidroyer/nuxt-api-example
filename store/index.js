import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from '~plugins/axios.js'

// console.log(createPersistedState)
const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      post: {},
      test: {},
      posts: []
    },
    plugins: [createPersistedState()],
    mutations: {
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      },
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setCurrentPost: (state, post) => {
        state.post = post
      },
      setTestPost: (state, post) => {
        state.test = post
      }
    },
    actions: {
      async getPosts ({commit}) {
        let {data} = await axios.get(`posts`)
        commit('setPosts', data)
      },
      async getPost ({commit, store}, id) {
        let {data} = await axios.get(`posts/${id}`)
        commit('setCurrentPost', data)
      },
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
        let posts = store.state.posts

        if (isServer && route.name === 'postsview' && !posts.length) {
          console.log('FIRED!!!')
          let {data} = await axios.get('posts')
          commit('setPosts', data)
        }

        if (isServer && params.id) {
          let {data} = await axios.get(`posts/${params.id}`)
          commit('setCurrentPost', data)
        }

        if (isClient && route.name) {
          console.log(store)
          let {data} = await axios.get('posts')
          commit('setPosts', data)
        }
      }
    }
  })
}

export default createStore
