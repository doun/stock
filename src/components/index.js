import {Main as App} from './main'
import Building from './building.vue'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'

Vue.component('building', Building)
export {App, Building}