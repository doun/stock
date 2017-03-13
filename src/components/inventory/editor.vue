<template lang="pug">
  el-row(:gutter='20')
    el-col(:span = 20)
      el-form(label-width = '80px', v-model = 'this')
        el-form-item(label = '条码')
          el-input(v-model = 'bar_code', @blur = "checkBarCode")
        el-form-item(label = '数量')
          el-input-number(v-model = 'count', :min = 1)
        el-form-item(label = '物项')
          el-autocomplete(v-model='product.number', icon='edit', placeholder='十字码')
        el-form-item(label = '批次')
          el-input(icon='edit', v-model = 'batch.number', placeholder='批号')
        el-form-item(label = '有效期')
          el-date-picker(v-model = 'expiry_date')
        el-form-item
          el-button(type='primary') 提交
  //    el-dialog(ref='editor', modal, v-model='dlgVisiable')
  //      el-form
  //        input(v-show='false',v-model='newItem.product.id')
  //        h1 编辑物项
  //        el-form-item(label='名称')
  //          el-input(v-modal='newItem.product.name')
  //        el-form-item(label='十字码')
  //          el-input(v-model='newItem.product.number')
  //        el-form-item(label='数量单位')
  //          el-input(v-model='newItem.product.unit')
  //        el-form-item(label='规格')
  //          el-input(v-model='newItem.product.spec')
  //        el-button(@click="showDlg(false)") 取消
</template>
<script lang='ts'>
import {Editor} from './inv.ts'
export default Editor 
</script>