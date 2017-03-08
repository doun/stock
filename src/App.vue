<template>
  <div>
    <building :buildings = "buildings"></building>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import {Component, Prop} from './common'

@comp
export default class App{
  buildings = ['AL','LAL']
  SelectedBuilding = 'AL'
}

</script>

<style>

</style>
