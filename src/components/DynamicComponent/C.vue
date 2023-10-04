<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-04 17:55:07
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 18:27:14
-->

<template>
    <div class="xi-content">
        <waterfall :list="list"></waterfall>
    </div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue"
import waterfall from '../waterfall.vue'
// 给父组件传值defineEmits 写法一
// const emit = defineEmits(['on-click'])

// 子组件可以暴露值或者方法 父组件中可以通过ref直接读取
defineExpose({
    name:"xiix",
    open:() => console.log('子组件中暴露给父组件的方法')
    
})
const list =[
    {height:200,background:'red'},
    {height:300,background:'blue'},
    {height:200,background:'green'},
    {height:400,background:'rosybrown'},
    {height:400,background:'goldenrod'},
    {height:500,background:'rosybrown'},
    {height:200,background:'navajowhite'},
    {height:300,background:'bisque'},
    {height:250,background:'darkmagenta'},
    {height:200,background:'rosybrown'},
    {height:450,background:'gainsboro'},
    {height:500,background:'greenyellow'},
    {height:450,background:'red'},
    {height:350,background:'gainsboro'},
    {height:250,background:'darkmagenta'},
    {height:200,background:'goldenrod'},
    {height:300,background:'blueviolet'},
    {height:400,background:'navajowhite'},
    {height:550,background:'bisque'},
    {height:450,background:'rosybrown'},
    {height:250,background:'blueviolet'},
    {height:300,background:'greenyellow'},

]


</script>
<style scoped lang="scss">
@include b(content) {
    flex: 1;
    overflow: auto;

    @include e(items) {
        paddine: 10px;
        margin: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
}
</style>