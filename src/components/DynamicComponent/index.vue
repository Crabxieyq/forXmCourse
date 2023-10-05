<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-04 17:55:31
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 20:25:05
-->

<template>
    <div class="xi-dynamic">
        <div v-for="(item,index) in data" class="xi-dynamic__items" :class="[active == index ? 'active' : '']" @click="switchCom(item,index)">
            <div>{{ item.name }}</div>
        </div>
    </div>
    <component :is="defaultCom"></component>

</template>

<script setup lang="ts">
import {ref, reactive,shallowRef,markRaw} from 'vue'
import AVue from "./A.vue";
import BVue from "./B.vue";
import CVue from "./C.vue";
import Provide from './Provide/index.vue'
import txsVue from './TSX/index'
// shallowRef作用：深层数据并不会进行监听，只会对第一层数据进行双向绑定  避免性能浪费。这里的组件信息不用全部遍历对象的所有属性，使所有属性都具备响应性
const defaultCom = shallowRef(AVue)
const active = ref(0)
const switchCom = (item,index) => {
    defaultCom.value = item.com
    active.value = index
}
const data = reactive([
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