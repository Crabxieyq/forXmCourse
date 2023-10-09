<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-04 17:55:31
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-09 16:04:19
-->

<template>
    <div class="xi-dynamic">
        <div v-for="(item,index) in data" class="xi-dynamic__items hover:bg-blue-300" :class="[active == index ? 'active' : '']" @click="switchCom(item,index)">
            <div>{{ item.name }}</div>
        </div>
    </div>
    <component :is="defaultCom"></component>

</template>

<script setup lang="ts">
// 使用了unplugin-auto-import/vite插件 会自动引入ref, reactive,shallowRef,markRaw等 不再需要手动引入
// import {ref, reactive,shallowRef,markRaw} from 'vue'
import AVue from "./A.vue";
import BVue from "./B.vue";
import CVue from "./C.vue";
import Provide from './Provide/index.vue'
import txsVue from './TSX/index'
import vModel from './vModel/index.vue'
import LazyLoad from './LazyLoad/index.vue'
import AboutHook from './AboutHooks/index.vue'
import Tailwind from './Tailwind/index.vue'

// shallowRef作用：深层数据并不会进行监听，只会对第一层数据进行双向绑定  避免性能浪费。这里的组件信息不用全部遍历对象的所有属性，使所有属性都具备响应性
const defaultCom = shallowRef(AVue)
const active = ref(0)
type comType = {
    name:string,
    com:any
}
const switchCom = (item:comType,index:number) => {
    defaultCom.value = item.com
    active.value = index
}
const data = reactive<comType[]>([
    {
        name:'异步组件',
        com:markRaw(AVue)
    },
    {
        name:'插槽组件',
        com:markRaw(BVue)
    },
    {
        name:'瀑布流',
        com:markRaw(CVue)
    },
    {
        name:'Provide',
        com:markRaw(Provide)
    },
    {
        name:'TSX',
        com:markRaw(txsVue)
    },
    {
        name:'vModel',
        com:markRaw(vModel)
    },
    {
        name:'图片懒加载',
        com:markRaw(LazyLoad)
    },
    {
        name:'自定义hooks',
        com:markRaw(AboutHook)
    },
    {
        name:'Tailwind',
        com:markRaw(Tailwind)
    },
])

</script>
<style scoped lang="scss">
.active{
    background: skyblue;
}
@include b(dynamic){
    display: flex;
    @include e(items){
        border: 1px solid #ccc;
        padding: 5px 10px;
        margin: 5px;
        cursor: pointer;
    }
}
</style>