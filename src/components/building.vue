<template>
</template>

<script lang='ts'>
import Vue from 'vue'
import {Component as comp, Prop as prop} from 'vue-property-decorator'

@comp
export default class My extends Vue{
  @prop
  msg: string
}
</script>