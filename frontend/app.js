// Core Imports
import Vue from 'vue'
import VueRouter from 'vue-router'

// External Modules
import axios from 'axios'
import Vuetify from 'vuetify'
import ElementUI from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import popper from 'popper.js'
import jquery from 'jquery'
import lodash from 'lodash'

// Internal Modules
import App from './App'
import store from '@/stores'
import auth from '@/utils/Auth'
import router from '@/router'
import API from '@/utils/Api'

// Vue Plugins
Vue.use(BootstrapVue)
Vue.use(Vuetify)
// TODO Only include the used elements.
Vue.use(ElementUI)

// Set External Globals
window._ = lodash
window.Popper = popper
window.$ = window.jQuery = jquery
window.axios = axios;
window.api = API;

// Set Internal Globals
window.auth = auth;

// csrf token
let csrfToken = document.head.querySelector('meta[name="csrf-token"]');

if (csrfToken) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// Base URL for the API
// axios.defaults.baseURL = `http://localhost/api`
axios.defaults.baseURL = `http://127.0.0.1:8000/api`
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// Create the Vue instance and mount it to the element id: #app
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
      App
    },
    template: '<App/>'
});
