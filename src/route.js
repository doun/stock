import Vue from 'vue'
import Router from 'vue-router'
import {
  App,
  InvList,
  Editor
} from './components'

Vue.use(Router)

let routes = [{
    path: '/:building',
    component: InvList
  },
  {
    path: '/new/:building',
    component: InvList,
  },
]

for (let r of routes) {
  Object.assign(r, {
    props: function (route) {
      return {
        building: app.cur_building
      }
    }
  })
}
export default new Router({
  routes
})