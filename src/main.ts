import Vue from 'vue'
import ElementUI from 'element-ui'
import {
  App,
  Building,
  InvList
} from './components'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})