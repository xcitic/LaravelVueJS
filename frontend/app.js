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
import App from './App.vue'
import store from '@/stores'
import auth from '@/utils/Auth'
import router from '@/router'

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

// Set Internal Globals
window.auth = auth;


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
