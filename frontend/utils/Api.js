import axios from 'axios'

// Use different endpoints for different API endpoints (seperate each service into microservices)
const endpoint = axios.create({
  baseURL: `${process.env.MIX_APP_URL}/api`,
  json: true
})

export default {
  // Base api call method
  async apiCall (method, resource, data) {

    await store.dispatch('auth/fetchToken');
    const authToken = localStorage.getItem('token');
    return endpoint({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(req => {
        return req.data
      })
  },
  // All the API calls

  login (data) {
    return this.apiCall('post', '/login', data)
  },

  logout () {
    return this.apiCall('get', '/logout')
  },

  register (data) {
    return this.apiCall('post', '/register', data)
  }
}
