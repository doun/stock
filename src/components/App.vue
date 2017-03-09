<template>
  <div>
    <building :buildings = "buildings"></building>
  </div>
</template>

<script lang='ts'>
import './imports.ts'

@comp
export default class App{
  buildings = ['AL','LAL']
  SelectedBuilding = 'AL'
}

</script>

<style>

</style>
