import {App, Building} from './components'
import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
