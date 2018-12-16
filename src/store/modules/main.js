const state = {
  token: '',
  login: false,
  tokenName: 'sw_token'
}

const getters = {}

const actions = {}

const mutations = {
  login (state, val) {
    if (val.status) {
      state.login = true
      state.token = val.token
    } else {
      state.login = false
      state.token = ''
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
