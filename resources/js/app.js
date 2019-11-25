require('./bootstrap');
import common from './common';
Vue.mixin(common);


window.Vue = require('vue');
import Vue from 'vue'



Vue.component('z-dashboard', require('./components/dashboard.vue').default);


import router from './router'
import store from './store'

const app = new Vue({
    el: '#app',
    router,
    store: store,
});
