import Vue from 'vue'
import App from './App.vue'
import './bulma.sass'
import createRouter from './router'
import createStore from './store'

Vue.config.productionTip = false

export default () => {
  const store = createStore()
  const router = createRouter()
  return new Vue({
    store,
    router,
    render: h => h(App)
  })
}
