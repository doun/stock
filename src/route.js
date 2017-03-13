import Vue from 'vue'
import Router from 'vue-router'
import {
  App,
  InvList,
  Editor
} from './components'

Vue.use(Router)

function curBuilding() {
  if (data.SelectedBuilding)
    return {
      building: data.SelectedBuilding
    }
}
let routes = [{
    path: '/list',
    component: InvList
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

for (let r of routes) {
  Object.assign(r, {
    props: function (route) {
      if( app.SelectedBuilding)
        return {
          building: app.SelectedBuilding 
        }
    }
  })
}
export default new Router({
  routes
})