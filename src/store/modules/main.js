const state = {
  token: '',
  login: false,
  tokenName: 'SW-TOKEN'
}

const getters = {}

const actions = {}

const mutations = {
  info (state, msg) {
    state.popUp = true
    state.popMsg = msg
    setTimeout(() => {
      state.popUp = false
      state.popMsg = ''
    }, 2000)
  },
  login (val) {
    if (val) {
      state.login = true
    } else {
      state.login = false
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
