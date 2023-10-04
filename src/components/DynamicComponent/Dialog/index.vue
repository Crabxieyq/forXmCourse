<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-04 18:34:10
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 19:09:12
-->
<template>
    <div class="xi-slot">
        <header class="xi-slot__header">
            <!-- 具名插槽 -->
            <slot name="header"></slot>
        </header>
        <main class="xi-slot__main">
            <!-- 匿名插槽 -->
            <slot :data="formain"></slot>
        </main>
        <footer class="xi-slot__footer">
            <!-- 具名插槽 -->
            <slot name="footer"></slot>

        </footer>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
type names = {
    name:string,
    age:number
}
const formain = "插槽作用域,插槽传上来的,父组件可以拿到子组件中的值"
const data = reactive<names[]>([{
    name:'xixi',
    age:20
},{
    name:'xiaom',
    age:19
},{
    name:'xiaoh',
    age:23
},{
    name:'xiaog',
    age:24
}])
</script>
<style scoped lang="scss">
@include b(slot){
    @include e(header){
        height: 100px;
        background: darkkhaki;
        color:antiquewhite;
    }
    @include e(main){
        height: 200px;
        background: rgb(8, 76, 125);
        color:antiquewhite;
    }
    @include e(footer){
        height: 100px;
        background: rgb(9, 146, 50);
        color:antiquewhite;
    }
}
</style>