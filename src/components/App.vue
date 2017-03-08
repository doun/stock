<template>
  <div>
    hello {{msg}}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
@Component
export default class My extends Vue{
  @Prop()
  msg: string
}
</script>