<template lang='pug'>
el-row
  el-col#container
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
            building(v-model = "SelectedBuilding", :buildings = "Buildings")
    el-row#main
      inv-list
</template>

<script lang='ts' src = './main.ts'> </script>

<style lang='stylus' src="assets/main.stylus"> 
</style>