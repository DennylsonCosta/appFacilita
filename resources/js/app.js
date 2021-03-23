/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('moment/locale/pt-br')

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'

Vue.use(VueRouter)
Vue.use(VuePageTransition)

const moment = require('moment')
moment.locale('pt-br');

Vue.use(VuePageTransition)
Vue.use(require('vue-moment'), { moment })

// import from './'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('mount-app', require('./components/mountApp.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'one',
            component: () => import('./views/One.vue')
        },
        {
            path: '/two',
            name: 'two',
            component: () => import('./views/Two.vue')
        },
        {
            path: '/three',
            name: 'three',
            component: () => import('./views/Three.vue')
        }
    ]
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
