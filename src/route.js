import Vue from 'vue'
import Router from 'vue-router'
import {
  App,
  InvList,
  Editor
} from './components'

Vue.use(Router)
function curBuilding(){
  debugger
  return {
    building: app.SelectedBuilding
  }
}
let routes = [
  {
    path: '/list',
    component: InvList,
    props: curBuilding
  },
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/new/:building',
    component: InvList,
  },
]

//for (let r of routes) {
//  Object.assign(r, {
//    props: function (route) {
//      debugger
//      return {
//        building: app.SelectedBuilding 
//      }
//    }
//  })
//}
export default new Router({
  routes
})