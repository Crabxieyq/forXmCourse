<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 19:25:44
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-07 17:25:23
-->
<template>
    <div class="xi-header">
        Header
        {{ fromBro }}
        <button @click="toMenu">通过引入的mitt给兄弟组件传值</button>
        全局变量{{ $env }}
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import { getCurrentInstance } from 'vue';
import Bus from '../../bus'

const instance = getCurrentInstance()
let toMenuMethods = ref<string>('header通过引入的mitt Bus给Menu传值')
const toMenu = () => {
    instance?.proxy?.$Bus.emit('toMenu',toMenuMethods)//这里的$bus相当于全局变量
    
    
}
console.log(instance?.proxy?.$env);//读取$env全局变量
let fromBro = ref<string>('')
Bus.on('toHeader',(toBro:string) => {
    fromBro.value = toBro
})


declare module 'vue' {
    export interface ComponentCustomProperties {
        $env: string
    }
}
</script>
<style scoped lang="scss">
@include b(header){
    height:60px;
    border-bottom:1px solid #ccc;
}
</style>