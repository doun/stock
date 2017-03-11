import Vue from 'vue'
import {
  Component as comp,
  Prop as prop
} from 'vue-property-decorator'

@comp
export default class App extends Vue{
  Buildings = ['AL','LAL']
  SelectedBuilding = 'AL'
  UserName = ''
  GroupName = ''
  Locations = []
}