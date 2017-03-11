<template>
  <el-select v-model="selected" @change='updateValue' filterable placeholder="切换">
    <el-option v-for="b in Buildings" :key='b' :value="b" />
  </el-select>
</template>

<script lang='ts'>
  import Vue from 'vue'
  import {
    Component as comp,
    Prop as prop
  } from 'vue-property-decorator'

  @comp({
    name: 'building'
  })
  export default class My extends Vue {
    @prop
    value: string
    @prop
    Buildings: Array < string >

      selected: string = this.value

    updateValue() {
      this.$emit('input', this.selected)
    }
  }
</script>