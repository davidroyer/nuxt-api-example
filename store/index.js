import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from '~plugins/axios.js'

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
      setPosts: (state, { posts }) => {
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
        axios.get('/posts')
        .then((response) => {
          commit('setPosts', {posts: response.data})
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      async getPost ({commit, store}, id) {
        // console.log(store)
        // let { data } = await axios.get(`posts/${id}`)
        // const { data } = await axios.get(`posts/${id}`)
        // commit('loadPost', {post: data})
        let {data} = await axios.get(`posts/${id}`)
        commit('setCurrentPost', data)

        // return axios.get(`posts/${id}`)
        // .then((response) => {
        //   console.log('RESPONSE: ', response.data)
        //   commit('setCurrentPost', response.data)
        // })
        // .catch(function (error) {
        //   console.log(error)
        // })
      },
      async nuxtServerInit ({commit}, {isServer, params}) {
        if (isServer && params.id) {
          let {data} = await axios.get(`posts/${params.id}`)
          commit('setCurrentPost', data)
        }
        // if (params.id) {
        //   let {data} = await axios.get(`posts/${params.id}`)
        //   commit('setCurrentPost', data)
        // }
      }
      // nuxtServerInit ({ dispatch, commit }, { store, params }) {
      //   axios.get(`posts/${params.id}`)
      //   .then((response) => {
      //     console.log(response.data)
      //     commit('setCurrentPost', response.data)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      // }
      // async browserInit ({commit}) {
      //   const { data } = await axios.get(`/posts`)
      //   commit('loadPosts', data)
      // }
    }
  })
}

// createStore().dispatch('browserInit')

export default createStore

// const store = new Vuex.Store({
//   state: {
//     projects: []
//   },
//   actions: {
//     LOAD_PROJECT_LIST: function ({ commit }) {
//       axios.get('/secured/projects').then((response) => {
//         commit('SET_PROJECT_LIST', { list: response.data })
//       }, (err) => {
//         console.log(err)
//       })
//     }
//   },
//   mutations: {
//     SET_PROJECT_LIST: (state, { list }) => {
//       state.projects = list
//     }
//   },
//   getters: {
//     openProjects: state => {
//       return state.projects.filter(project => !project.completed)
//     }
//   }
// })
