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
    init(type, obj){
      Object.assign(obj, {name: 'asdf23'})
    },
    submit(type, data, update_source = true){
      if(type == 'loc'){
        data.name = 'asdf'
      }
      this.$message('updated..')
 //     this.$http.put(url, data).then((rsp)=>{
 //       if(update_source){
 //         console.log('updating source...')
 //       }
 //     })
    }
  }
})
new Vue({
  el: '#app',
  router: route,
  template: '<App building = "AL"/>',
  components: {App}
})
