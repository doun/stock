import Vue from 'vue'
import ElementUI from 'element-ui'
import comps from './components'
import {
  App,
} from './components'

import route from './route'

Vue.use(ElementUI)
Vue.use(comps)

class AppData extends Vue{
  SelectedBuilding = "AL" 
}

declare const window
let data = new AppData()
window.data = data

export let app = new Vue({
  el: '#app',
  router: route,
  template: '<app/>',
  components: {App}
})
