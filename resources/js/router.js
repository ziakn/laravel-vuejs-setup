import Vue from "vue";
import Router from 'vue-router'
import dashboard from './components/dashboard/Home.vue'


let onlyAdmin = ['admin']
let onlyStaff = ['admin', 'staff']
let onlyGuest = ['customer']

Vue.use(Router)
export default new Router({
    mode: "history",
    routes: [ 
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
            meta: {
                title: 'Dashboard',
                type: onlyStaff,
            },

        },
       ]
})