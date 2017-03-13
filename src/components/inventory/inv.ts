import Vue from 'vue'
import {
  Component as comp,
  Prop as prop
} from 'vue-property-decorator'

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
  @prop
  bar_code: string

  count: number = 0
  product_id: number = 0
  expiry_date: string = ''
  product: any = {
    id: '',
    number: '',
    spec: '',
    unit: '',
    name:''
  }
  batch_id: number
  batch: any = {
    number: '',
    expiry_date: ''
  }
  inventory_id: number
  location: string
  @prop
  building: string
  get locations(){
    return ['AL206','AL206试剂柜']
  }
  showDlg(product = false, batch = false){
    let  dlg:any = this.$refs.prod_dialog
    dlg.open()
  }
}

export {
  List,
  Editor,
  Detail
}