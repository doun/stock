<template>
  <div>
    <building :buildings = "buildings"></building>
  </div>
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
