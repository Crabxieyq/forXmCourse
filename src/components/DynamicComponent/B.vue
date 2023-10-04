<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 19:25:44
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 19:07:57
-->
<template>
    <div class="xi-Bcom">
        
        <slotCom>
            <template v-slot:header><div>
                具名插槽，插入具体命名header的位置
            </div></template>
            <!-- 有数据的简写形式为 #default = "{data}"-->
            <template v-slot = "{data}">
                <div>匿名插槽，中间部分插入 {{ data }}</div>
            </template>
            <!-- 简写形式 用#代替v-slot:-->
            <template #footer><div>
                具名插槽，插入具体命名footer的位置
            </div></template>

            <!-- 动态插槽 会覆盖原来的内容 当name是header的时候，就放入子组件中header的位置，是main footer的时候以此类推 匿名插槽是default-->
            <template #[name]>
                <div>
                    动态插槽，根据name是什么确定显示在哪个位置 现在name是{{ name }}
                </div>
            </template>
        </slotCom>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
let name = ref('default')
</script>
<style scoped lang="scss">

</style>