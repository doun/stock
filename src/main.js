import Vue from 'vue'
import ElementUI from 'element-ui'
import comps from './components'
import App from './components/main.vue'
import route from './route'
import res from 'vue-resource'

Vue.use(ElementUI)
Vue.use(comps)
Vue.use(res)

const rurl = 'http://localhost:3000/'

function get_url(item, action = ""){
  let name_maps = {
    "loc": "locations",
    "prod": "productions",
    "batch": "batches",
    "line": "product_stores"
  }
  action = action == "" ? "" : "/" + action
  return rurl + name_maps[item] + action + ".json"
}

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
      this.$http.get(get_url(type, 'new')).then((rsp)=>{
        for(let k in obj){
          obj[k] = rsp[k]
        }
      })
      Object.assign(obj, {name: 'asdf23'})
    },
    submit(type, data, update_source = true){
      //data.id为非零，表明要进行update,使用不同的http method
      let url = data.id > 0 ? get_url(type, data.id) : get_url(type)
      debugger
      let action = this.$http.post(url, data)
      action.then((rsp)=> console.log(rsp))
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
