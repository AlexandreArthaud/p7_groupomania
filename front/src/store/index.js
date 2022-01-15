import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
  },
  mutations: {
    SETAUTHENTICATION(state, status) {
      state.authenticated = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
