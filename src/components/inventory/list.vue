<template lang="pug">
    div
      h1 {{building}}库存物资
      el-table#storelist(:data='entries',border)
        el-table-column(type='expand', label='展开')
          template(scope='props')
            detail(:store ='props.row')
        el-table-column(align = 'center', v-for='(label, prop) in cols',:key='prop', :prop='prop',:label="typeof(label)=='string'? label : prop")
          el-table-column(align = 'center', v-if="typeof(label)!='string'", v-for='(l1, p1) in label', :key='l1', :prop='p1', :label='l1')
</template>

<script>
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
export default {
  props:['building'],
  data: function(){
    return{
      cols: inventory.cols,
      entries: inventory.entries
    }
  }

}
</script>