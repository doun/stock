<template lang="pug">
div
  h1 入库登记
  el-row(:gutter='20')
    el-col(:span = 20)
      el-form(label-width = '80px', v-model = 'item')
        el-form-item(label = '条码')
          el-input(v-model = 'bar_code' )
        el-form-item(label = '数量')
          el-input-number(v-model = 'item.count', :min = 1)
        el-form-item(label = '位置')
          el-autocomplete(v-model.number = 'item.location_id')
        el-form-item(label = '物项')
          el-autocomplete(v-model.number ='item.product_id', icon='edit', placeholder='十字码')
          el-button(type='text',@click='showDlg') 添加
        el-form-item(label = '批次')
          el-autocomplete(icon='edit', v-model.number = 'item.batch_id', placeholder='批号')
          el-button(type = 'text') 添加
        el-form-item(label = '有效期')
          el-date-picker(v-model = 'item.expiry_date')
        el-form-item
          el-button(type='primary') 提交
      el-dialog(ref='prod_dialog', modal)
        el-form
          el-form-item(label='名称')
            el-input(v-model='product.name')
          el-form-item(label='十字码')
            el-input(v-model='product.number')
          el-form-item(label='数量单位')
            el-input(v-model='product.unit')
          el-form-item(label='规格')
            el-input(v-model='product.spec')
          el-button() 取消
</template>
<script lang='ts'>
import {Editor} from './inv.ts'
export default Editor 
</script>

<style scoped>
button{
  margin: 10px;
}
</style>