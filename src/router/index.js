import Vue from 'vue'
import VueRouter from 'vue-router'
import Timer from '../views/Timer.vue'
import About from '../views/About.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    redirect: {
      name: 'timer'
    }
  },
  {
    path: '/',
    name: 'timer',
    component: Timer
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
