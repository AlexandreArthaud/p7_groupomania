import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
    token: {},
    userId: null,
  },
  mutations: {
    SETAUTHENTICATION(state, status) {
      state.authenticated = status;
    },
    SETTOKEN(state, token) {
      state.token = token;
    },
    SETUSERID(state, userId) {
      state.userId = userId;
    }
  },
  actions: {
  },
  modules: {
  }
})
