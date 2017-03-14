import {Component as comp, Prop as prop} from 'vue-property-decorator'
import Vue from 'vue'
import resource from 'vue-resource'
class Item{
  line_id: number
  batch_id: number
  expiry_date: string
}

class Batch {
  id: number
  number: string
  expiry_date: string
}

class Product {
  id: number
  name: string
}

interface ILocation {
  id: number
  name: string
  building: string
}
class Location implements ILocation{

}

class ProductLine{
  product_id: number
  location_id: number
  max: number 
  min: number
}

class AppData extends Vue{
  SelectedBuilding = "AL"
  Buildings = []
  @prop
  UserName: string
  @prop
  GroupNames: string 
}

export{
  Item, Batch, Product, Location, ProductLine, AppData
}