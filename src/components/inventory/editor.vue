<template lang="pug">
div
  h1 入库登记
  el-row(:gutter='20')
    el-col(:span = 20)
      el-form(label-width = '80px', v-model = 'item')
        el-form-item(label = '条码')
          el-input(v-model = 'bar_code' )
        el-form-item(label = '数量')
          el-input-number(v-model = 'count', :min = 1)
        el-form-item(label = '位置')
          el-autocomplete(v-model.number = 'item.location_id', placeholder = '存放位置', icon = 'edit')
          el-button(type='text',@click='showLocDlg', size = 'small') 添加
        el-form-item(label = '物项')
          el-autocomplete(v-model.number ='item.product_id', icon='edit', placeholder='十字码')
          el-button(type='text',@click='addProd', size = 'small') 添加
        el-form-item(label = '批次')
          el-autocomplete(icon='edit', v-model.number = 'item.batch_id', placeholder='批号')
          el-button(type = 'text', @click = 'addBatch', size = 'small') 添加
        el-form-item(label = '有效期')
          el-date-picker(v-model = 'item.expiry_date')
        el-form-item
          el-button(type='primary') 提交
      el-dialog(ref = 'locDlg', title = '编辑存放点')
        el-form(label-position = 'right', label-width = '60px', :model = 'loc')
          el-form-item(label = '名称')
            el-input(v-model = 'loc.name')
          el-form-item(label = '位置')
            el-autocomplete(v-model = 'loc.building', @select  = 'handleSelect', :fetch-suggestions = 'getBuildings')

      el-dialog(ref='prodDlg', title = '编辑物项' )
        el-form
          el-form-item(label='名称')
            el-input(v-model='prod.name')
          el-form-item(label='十字码')
            el-input(v-model='prod.number')
          el-form-item(label='数量单位')
            el-input(v-model='prod.unit')
          el-form-item(label='规格')
            el-input(v-model='prod.spec')
        span(slot='footer')
          el-button() 取消
          el-button() 提交
</template>
<script>
export default {
  data: function(){
    return {
      count: 0,
      bar_code: '',
      loc: {
        id: 0,
        name: '',
        building: ''
      },
      product: {
        id: 0,
        name: ''
      },
      line:{
        product_id: 0,
        location_id: 0,
        max: 0,
        min: 0,
        current: 0
      },
      batch: {
        id: 0,
        number: '',
        expiry_date: '',
        product_id: 0
      },
      item: {
        product_id: 0,
        location_id: 0,
        batch_id: 0,
        expiry_date: ''
      }
    }
  }
}
</script>

<style scoped>
button{
  margin: 10px;
}
</style>