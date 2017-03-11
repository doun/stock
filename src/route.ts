import Vue from 'vue'
import Router from 'vue-router'
import {App, InvList as StoreList} from './components'

declare const app
Vue.use(Router)

let routes = [
    {
      path: '/',
      component: StoreList,
    },
    {
      path: '/store/:building',
      component: StoreList,
    },
    {
      path: '/inv/new/:building',
      name: 'NewInv',
      component: NewInventory,
    },
]

for (let r of routes){
  Object.assign(r, {props: function(route){ return {building: app.cur_building}}})
}
export default new Router({
  routes
})
