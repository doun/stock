<template>
  <div>
    {{Selected}}
  </div>
</template>

<script lang = 'ts'>
import * from './imports.js'
 @comp
 export default class Building{
   @prop
   Selected: string
   @prop
   Buildings: Array
 }
</script>