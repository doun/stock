import {
  Main as App
} from './main'
import Building from './building.vue'
import {
  InvList
} from './inventory'
import 'element-ui/lib/theme-default/index.css'

let installed = false
export default function install(Vue) {
  if (!installed) {
    Vue.component('building', Building)
    Vue.component('InvList', InvList)
  }
  installed = true;
}
export {
  App,
  Building,
  InvList
}