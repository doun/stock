<template>
  <el-select v-model="selected" @change='updateValue' filterable placeholder="切换">
    <el-option v-for="b in Buildings" :key='b' :value="b" />
  </el-select>
</template>

<script>
  export default {
    props: ['value', 'Buildings'],
    data: function () {
      return {
        selected: ''
      }
    },
    methods:{
      updateValue: function(){
        this.$emit('input', this.selected)
      }
    }
  }
</script>