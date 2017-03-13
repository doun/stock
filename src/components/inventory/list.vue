<template lang="pug">
    div
      h1 {{building}}库存物资
      el-table#storelist(:data='entries',border)
        el-table-column(type='expand', label='展开')
          template(scope='props')
            detail(:store ='props.row')
        el-table-column(align = 'center', v-for='(label, prop) in cols',:key='prop', :prop='prop',:label="typeof(label)=='string'? label : prop")
          el-table-column(align = 'center', v-if="typeof(label)!='string'", v-for='(l1, p1) in label', :key='l1', :prop='p1', :label='l1')
</template>

<script lang='ts'>
import {List} from './inv.ts'
export default List
</script>