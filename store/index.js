import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false
    },
    mutations: {
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      }
    }
  })
}

export default createStore
