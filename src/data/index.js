import {
  Item, Batch, Product, Location, ProductLine, AppData as Base
} from './models.ts'

class AppData extends Base{
  //TODO
    getBuildings(){
    return [
      {
        value: 'AL',
        text: 'asdf'
      }
    ]
  }
}

export{
  Item, Batch, Product, Location, ProductLine, AppData
}