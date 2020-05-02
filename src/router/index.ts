import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/Example.vue')
  },
  {
    path: '/ariaChecked',
    name: 'AriaChecked',
    component: () => import('../components/AriaChecked/AriaChecked.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
