<template lang='pug'>
div
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
    data: function () {
      return {
        loc: {
          id: 0,
          name: '',
          building: ''
        },
        prod: {
          id: 0,
          name: ''
        },
        line: {
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
      }
    },
    methods:{
      handleSelect(){
      },
      getBuildings(){
      },
      show(item){
        let dlg = this.$refs[item + 'Dlg']
        if(dlg) dlg.open()
      }
    }
  }
</script>