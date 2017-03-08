<template>
  <div>
    {{Selected}}
  </div>
</template>

<script lang = 'ts'>
 @comp
 export default class Building{
   @prop
   Selected: string
   @prop
   Buildings: Array
 }
</script>