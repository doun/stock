import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import Building from './building.vue'

Vue.use(ElementUI)
Vue.component('building', Building)
export{Vue, ElementUI, Building, App}