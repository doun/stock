import Vue from 'vue'
import ElementUI from 'element-ui'
import comps from './components'
import {Component as comp, Prop as prop} from 'vue-property-decorator'
import {
  App,
} from './components'
import route from './route'

Vue.use(ElementUI)
Vue.use(comps)

class AppData extends Vue{
  SelectedBuilding = "AL"
  Buildings = []
  @prop
  UserName: string
  @prop
  GroupNames: string 
}

declare const window
let data = new AppData()
window.data = data

export let app = new Vue({
  el: '#app',
  router: route,
  template: '<app building = "AL"/>',
  components: {App}
})
