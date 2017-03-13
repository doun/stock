import Vue from 'vue'
import ElementUI from 'element-ui'
import comps from './components'
import { App, } from './components'
import { Component as comp, Prop as prop } from 'vue-property-decorator'
import route from './route'

Vue.use(ElementUI)
Vue.use(comps)

export let app = new Vue({
  el: '#app',
  router: route,
  template: '<app ref = "main" SelectedBuilding = "AL"/>',
  components: {App}
})

declare const window
window.app = app.$refs.main