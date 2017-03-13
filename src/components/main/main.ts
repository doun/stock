import Vue from 'vue'
import {
  Component as comp,
  Prop as prop
} from 'vue-property-decorator'
import route from './route'
@comp({
  name: 'app'
})
export default class App extends Vue{
  @prop
  SelectedBuilding: string
  @prop
  UserName: string
  @prop
  GroupNames: string
  get Locations(){
    return []
  }
  get Buildings(){
    return ['AL','LAL']
  }
}