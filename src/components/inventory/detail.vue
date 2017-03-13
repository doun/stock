<template lang="pug">
div
  el-table(:data='entries',border)
    el-table-column(align = 'center',v-for='(label, prop) in cols',:prop='prop', :key='prop', :label='label')
    el-table-column(label='操作')
      template(scope='scope')
        a 开封
        a 使用登记
</template>
<script lang='ts'>
import {Detail} from './inv.ts'
export default Detail
</script>