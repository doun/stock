import Vue from 'vue'
import ElementUI from 'element-ui'
import comps from './components'
import {
  App,
  Building,
  InvList
} from './components'

Vue.use(ElementUI)
Vue.use(comps)

export let app = new Vue({
  el: '#app',
  render: h => h(App)
})

declare const window
window.app = app