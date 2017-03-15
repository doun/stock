import Vue from 'vue'
import ElementUI from 'element-ui'
import comps from './components'
import App from './components/main.vue'
import route from './route'


Vue.use(ElementUI)
Vue.use(comps)
window.data = new Vue({
  props:[
    'SelectedBuilding',
    'Buildings',
    'UserName'
  ],
  methods:{
    getBuildings(){
    },
    submit(type, data, update_source = true){
    }
  }
})
new Vue({
  el: '#app',
  router: route,
  template: '<App building = "AL"/>',
  components: {App}
})
