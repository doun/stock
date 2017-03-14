<template lang="pug">
div
  h1 入库登记
  el-row(:gutter='20')
    el-col(:span = 10)
      el-form(label-width = '80px', v-model = 'item')
        el-form-item(label = '条码')
          el-input(v-model = 'bar_code',placeholder = '扫描条码' )
        el-form-item(label = '数量')
          el-input-number(v-model = 'count', :min = 1)
        el-form-item(label = '位置')
          el-autocomplete(v-model= 'location', placeholder = '存放位置', icon = 'edit')
          el-button(type='text',@click='showDlg("loc")', size = 'small') 添加
        el-form-item(label = '物项')
          el-autocomplete(v-model='product', icon='edit', placeholder='十字码')
          el-button(type='text',@click='showDlg("prod")', size = 'small') 添加
        el-form-item(label = '批次')
          el-autocomplete(icon='edit', v-model = 'batch', placeholder='批号')
          el-button(type = 'text', @click = 'showDlg("batch")', size = 'small') 添加
        el-form-item(label = '有效期')
          el-date-picker(v-model = 'item.expiry_date')
        el-form-item(label = '打印条码', label-width = '240px')
          el-switch(v-model = 'auto_print')
          el-button(type='primary') 确认 
      el-row(type = 'flex', align = 'middle',justify = 'end')
        el-col(:span = 4)
  my-dialog(ref='dlg')
</template>
<script>
import Vue from 'vue'
import dialog from './dialogs.vue'
Vue.component('my-dialog', dialog)
export default {
  name: 'Editor',
  data: function(){
    return {
      count: 0,
      bar_code: '',
      auto_print: true,
      location: '',
      product: '',
      batch: '',
      item: {
        product_id: 0,
        location_id: 0,
        batch_id: 0,
        expiry_date: ''
      }
    }
  },
  methods:{
    showDlg(item){
      this.$refs.dlg.show(item)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>