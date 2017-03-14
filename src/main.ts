import Vue from 'vue'
import ElementUI from 'element-ui'
import comps from './components'
import * as m from './data'
import {
  App,
} from './components'
import route from './route'

Vue.use(ElementUI)
Vue.use(comps)

declare const window
let data = new m.AppData()
window.data = data

export let app = new Vue({
  el: '#app',
  router: route,
  template: '<app building = "AL"/>',
  components: {App}
})
