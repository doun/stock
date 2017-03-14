import Vue from 'vue'

import {
  Component as comp,
  Prop as prop
} from 'vue-property-decorator'
import * as m from '../../data'

declare const data 

const inventory = {
  cols: {
    number: '十字码',
    name: '名称',
    location: '存放位置',
    "数量": {
      quantity_str: '数量',
      max: '最大',
      min: '最小',
    },
    expiry_date: '有效期',
    status: '状态',
  },
  entries: [{
      id: '123',
      name: 'pH缓冲溶液(pH7)',
      location: 'AL206'
    },
    {
      id: '123',
      name: 'pH缓冲溶液(pH10)',
      location: 'AL206'
    }
  ]
}

const inventoryDetail = {
  cols: {
    id: '序号',
    batch_number: '批次',
    quantity: '数量',
    expiry_date: '有效期',
    status: '状态',
  },
  entries: []
}

@comp({})
class List extends Vue {
  cols = inventory.cols
  @prop
  building: string
  get entries(){
    return inventory.entries
  }
}

@comp
class Detail extends Vue {
  cols = inventoryDetail.cols
  @prop
  inventory: string
  get entries(){
    return inventoryDetail.entries
  }
}

@comp({})
class Editor extends Vue {
  constructor(){
    super()
  }
  count: number = 1
  @prop
  bar_code: string

  item:m.Item = new m.Item() 
  loc:m.Location = {
    id: 0,
    name: '',
    building: ''
  }
  prod: m.Product = new m.Product()
  prod_line: m.ProductLine = new m.ProductLine()

  locDlg : any
  prodDlg: any
  lineDlg: any
  batchDlg: any
  @prop
  building: string
  get locations(){
    return ['AL206','AL206试剂柜']
  }
  getBuildings(q:string, cb: any){
    let rst = data.getBuildings()
    cb(rst)
  }
  showLocDlg(){
    (this.$refs.locDlg as any).open()
  }
  handleSelect(item:any){
    debugger
    this.loc.building = item.text
  }
  mounted(){
   // this.locDlg = this.$refs.locDlg
   // this.prodDlg = this.$refs.prodDlg
   // this.batchDlg = this.$refs.batchDlg
   // this.locDlg = this.$refs.lineDlg
  }
}

export {
  List,
  Editor,
  Detail
}