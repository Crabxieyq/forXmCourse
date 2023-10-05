<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 19:25:44
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-02 19:47:00
-->
<template>
    <div class="xi-header">
        Header
        {{ fromBro }}
        <button @click="toMenu">通过引入的mitt给兄弟组件传值</button>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import { getCurrentInstance } from 'vue';
import Bus from '../../bus'

const instance = getCurrentInstance()
let toMenuMethods = ref<string>('header通过引入的mitt Bus给Menu传值')
const toMenu = () => {
    instance?.proxy?.$Bus.emit('toMenu',toMenuMethods)
}
let fromBro = ref<string>('')
Bus.on('toHeader',(toBro:string) => {
    fromBro.value = toBro
})
</script>
<style scoped lang="scss">
@include b(header){
    height:60px;
    border-bottom:1px solid #ccc;
}
</style>