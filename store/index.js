import Vuex from 'vuex'
import axios from '~plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      posts: [],
      post: {}
    },
    mutations: {
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      },
      loadPosts: (state, { posts }) => {
        state.posts = posts
      },
      loadPost: (state, {post}) => {
        state.post = post
      }
    },
    actions: {
      async retrievePosts ({commit}) {
        axios.get('/posts')
        .then((response) => {
          commit('loadPosts', {posts: response.data})
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      async retrievePost ({commit}) {
        axios.get('/posts')
        .then((response) => {
          commit('loadPosts', {post: response.data})
        })
        .catch(function (error) {
          console.log(error)
        })
      }
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
