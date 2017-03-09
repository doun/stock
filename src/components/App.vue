<template lang='pug'>
  el-row
    el-col(:span = 20, :offset = 2)
      el-row#top(:gutter = 10, type = 'flex', align = 'middle')
        el-col#menu(:span = 12)
          el-menu(theme='dark', mode='horizontal')
            el-menu-item(index = '/') 库存
            el-menu-item(index = '123') 入库
        el-col#actions.is-align-middle(:span = 8, :offset = 4)
          el-col(:span = 18)
            el-input(placeholder='扫描条码')
          el-col(:span = 6)
            building(:selected = "SelectedBuilding", :buildings = "buildings")
      el-row#main
</template>

<script lang='ts'>
import Vue from 'vue'
import {Component as comp, Prop as prop} from 'vue-property-decorator'

@comp
export default class App extends Vue{
  buildings = ['AL','LAL']
  SelectedBuilding = 'AL'
}
</script>
<style lang='stylus'>
dark = #324157
#top
  background-color: dark 
</style>