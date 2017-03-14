import { Main as App } from './main'
import Building from './building.vue'
import { InvList, Detail, Editor } from './inventory'
import 'element-ui/lib/theme-default/index.css'
import Hello from './hello.vue'
let installed = false
export default function install(Vue, options ={}) {
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
  Hello,
  Building,
  InvList,
  Detail,
  Editor
}