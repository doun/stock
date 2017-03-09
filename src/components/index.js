import {Main as App} from './main'
import Building from './building.vue'
import {list as InvList} from './inventory'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'

Vue.component('building', Building)
Vue.component('InvList', InvList)
export {App, Building, InvList}