import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Building from './building.vue'

Vue.use(ElementUI)
Vue.component('building', Building)