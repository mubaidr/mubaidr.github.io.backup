import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  }
]

export default () => {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  return router
}
