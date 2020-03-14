import API from '@/utils/Api.js';
import Auth from '@/utils/Auth.js';

export default {

  async login({state, commit}, payload) {
    // Change status
    commit('auth_request');
    // Make api request
    try {
      let result = await API.login(payload);
      commit('auth_success', result);
    } catch (err) {
      // On failure clear all local data
      commit('auth_error', err);
      Auth.logout();
    }
  },

  async register({commit}, payload) {
    commit('auth_request');
    try {
      let result = await API.register(payload);
      commit('auth_success', result);
    } catch(err) {
      commit('auth_error', err);
      Auth.logout();
    }
  },

  logout({commit}) {
    commit('logout');
  },

  fetchToken({commit}) {
    let userData = {
      token: localStorage.getItem('token'),
      user: JSON.parse(localStorage.getItem('user'))
    };
    commit('updateToken', userData);
  }
}
