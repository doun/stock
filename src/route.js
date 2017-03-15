import Vue from 'vue'
import Router from 'vue-router'
import {
  App,
  InvList,
  Editor as EditorView,
  Checker as CheckView
} from './components'

Vue.use(Router)

let routes = [{
    path: '/list',
    component: InvList
  },
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/new',
    component: EditorView,
  },
  {
    path: '/check/:mode',
    component: CheckView,
    props: true
  }
]

routes.forEach( function(r){
  r.props = function (route) {
      if( data.SelectedBuilding)
        return {
          building: data.SelectedBuilding 
        }
    }
})
export default new Router({
  routes
})