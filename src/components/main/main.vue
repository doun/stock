<template lang='pug'>
  el-row
    el-col(:span = 20, :offset = 2)
      el-row#top(type = 'flex', align = 'middle')
        el-col#menu(:span = 11, :offset = 1)
          el-menu(theme='dark', mode='horizontal')
            el-menu-item(index = '/') 库存
            el-menu-item(index = '123') 入库
            el-menu-item(index = '123') 盘点 
        el-col#actions.is-align-middle(:span = 8, :offset = 4, :gutter = 10)
          el-row(:gutter = 10)
            el-col(:span = 16)
              el-input(placeholder='扫描条码')
            el-col(:span = 7)
              building(v-model = "SelectedBuilding", :buildings = "buildings")
      el-row#main
</template>

<script src = 'ts-loader!./main.ts'> </script>

<style lang = 'stylus'> 
dark = #324157
#top
  background-color: dark 
  margin-bottom: 10px
  margin-left: 0
  margin-right: 0 
#main
  background-color: dark
  height: 200px

</style>