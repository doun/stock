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

class Location {
  id: number
  name: string
  building: string
}

class ProductLine{
  product_id: number
  location_id: number
  max: number 
  min: number
}

export{
  Item, Batch, Product, Location, ProductLine
}