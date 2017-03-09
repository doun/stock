<template>
  <el-select v-model="Selected" @change='updateValue' filterable placeholder="切换">
    <el-option
      v-for="b in Buildings"
      :key = 'b'
      :value = "b" />
  </el-select>
</template>

<script lang='ts'>
import Vue from 'vue'
import {Component as comp, Prop as prop} from 'vue-property-decorator'

@comp
export default class My extends Vue{
  @prop
  Selected: string
  @prop
  Buildings: Array<string>
}
</script>