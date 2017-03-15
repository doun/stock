<template lang='pug'>
el-row
  el-col#container
    el-row#top
      el-col#menu(:span = 11, :offset = 1)
        el-menu(theme='dark', mode='horizontal', router)
          el-menu-item(index = '/list') 库存
          el-menu-item(index = '/new') 入库
          el-menu-item(index = '/check/scan') 盘点(扫描)
          el-menu-item(index = '/check/mannual') 盘点(编辑) 
      el-col#actions.is-align-middle(:span = 8, :offset = 4, :gutter = 10)
        el-row(:gutter = 10)
          el-col(:span = 16)
            el-input(placeholder='扫描条码')
          el-col(:span = 7)
            building(v-model = "Building", :buildings = "Buildings")
    el-row
      el-col(:span = 20,:offset = 2, :push = 2)#main
        router-view
</template>

<script>
  export default {
    props: ['Building'],
    data: function(){
      return {
        Buildings: ['AL','LAL'],
        SelectedBuilding: 'AL',
        UserName: '',
        GroupName: '',
        Locations: []
      }
  }
}
</script>

<style lang='stylus'> 
dark = #324157
#top
  background-color: dark 
  margin-bottom: 5px
#main
#container
body
  margin: 0
</style>