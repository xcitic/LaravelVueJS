import axios from 'axios'

// Use different endpoints for different API endpoints (seperate each service into microservices)
const token = localStorage.getItem('token');
const csrfToken = document.head.querySelector('meta[name="csrf-token"]');

const endpoint = axios.create({
  baseURL: `${process.env.MIX_API_URL}`,
  json: true,
  headers: {
    'Authorization': `Bearer ${token}`,
    'x-requested-with': 'XMLHttpRequest',
    'x-csrf-token': csrfToken.content
  }
});

export default {
  // Base api call method
  async apiCall (method, resource, data) {
    return endpoint({
      method,
      url: resource,
      data,
    })
      .then(res => {
        return res.data
      })
      .catch(err => {
        throw new Error(err.message);
      })
  },
  // All the API calls

  login (data) {
    return this.apiCall('post', '/login', data);
  },

  logout () {
    return this.apiCall('get', '/logout');
  },

  register (data) {
    return this.apiCall('post', '/register', data);
  }
}
