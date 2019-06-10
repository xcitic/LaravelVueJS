export default {

  async login({ state, commit }, payload) {
    // Change status
    commit('auth_request')
    // Make api request
    axios.post(api.register(payload))
      // On successful response, create mutation for saving user info
      .then((resp) => {
        let data = {
          token: resp.data.token,
          user: resp.data.user
        }
        commit('auth_success', data)
        resolve()
      })
      // On failure clear all local data
      .catch((err) => {
        commit('auth_error', err)
        auth.logout()
        reject(err)
      })
  },

  async register({ commit }, payload) {
    commit('auth_request')
    axios.post(API.register(payload))
      .then((resp) => {
        let data = {
          token: resp.data.token,
          user: resp.data.user
        }
        commit('auth_success', data)
        resolve()
      })
      .catch((err) => {
        commit('auth_error', err)
        auth.logout()
        reject(err)
      })
  },

  async logout({ commit }) {
    commit('logout')
  },

  async fetchToken({ commit }) {
    let data = {
      token: localStorage.getItem('token'),
      user: JSON.parse(localStorage.getItem('user'))
    }
    // send mutation to vuex
    commit('updateToken', data)
  }
}
