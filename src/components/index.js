import { Main as App } from './main'
import Building from './building.vue'
import { InvList, Detail, Editor } from './inventory'
import 'element-ui/lib/theme-default/index.css'

let installed = false
export default function install(Vue) {
  if (!installed) {
    Vue.component('building', Building)
    Vue.component('InvList', InvList)
    Vue.component('detail', Detail)
    Vue.component('editor', Editor)
  }
  installed = true;
}
export {
  App,
  Building,
  InvList,
  Detail,
  Editor
}