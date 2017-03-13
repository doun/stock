import Vue from 'vue'
import {
  Component as comp,
  Prop as prop
} from 'vue-property-decorator'

@comp({
  name: 'app'
})
export default class App extends Vue{
  SelectedBuilding = 'AL'
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