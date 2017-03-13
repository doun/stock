import Vue from 'vue'
import Router from 'vue-router'
import {
  App,
  InvList,
  Editor
} from './components'

Vue.use(Router)

let routes = [{
    path: '/list',
    component: InvList
  },
  {
    path: '/new/:building',
    component: InvList,
  },
]

export default new Router({
  routes
})