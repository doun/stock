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
  entries = inventory.entries
  @prop
  building: string
}

@comp
class Detail extends Vue {
  cols = inventoryDetail.cols
  entries = inventoryDetail.entries
  @prop
  inventory: string
}

@comp({})
class Editor extends Vue {

}

export {
  List,
  Editor,
  Detail
}