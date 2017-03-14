import { Main as App } from './main.vue'
import Building from './building.vue'
import { InvList, Detail, Editor, Checker } from './inventory'
import 'element-ui/lib/theme-default/index.css'

let installed = false
export default function install(Vue, options ={}) {
  if (!installed) {
    Vue.component('building', Building)
    Vue.component('InvList', InvList)
    Vue.component('detail', Detail)
    Vue.component('editor', Editor)
    Vue.component('checker', Checker)
  }
  installed = true;
}
export {
  App,
  Hello,
  Building,
  InvList,
  Detail,
  Editor,
  Checker
}