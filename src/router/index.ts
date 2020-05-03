import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { hideNav: false }
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/Example.vue'),
    meta: { hideNav: false }
  },
  {
    path: '/ariaChecked',
    name: 'AriaChecked',
    component: () => import('../components/Aria/AriaChecked.vue'),
    meta: { hideNav: true }
  },
  {
    path: '/ariaExpanded',
    name: 'AriaExpanded',
    component: () => import('../components/Aria/AriaExpanded.vue'),
    meta: { hideNav: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
