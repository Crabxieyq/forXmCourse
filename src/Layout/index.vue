<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 19:25:44
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-03 11:02:34
-->
<template>
    <div class="xi-box">
        <div>
            <Menu></Menu>
        </div>
        <div class="xi-box__right">
            
            <Header></Header>
            <!-- <waterfall ></waterfall> -->
            <Content ref="Content" :numtoContent="20" :arr="[1,2,3]" @on-click="getSonValue"></Content>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import waterfall from '../components/waterfall.vue'

const getSonValue = (value:string) => {
    console.log(value,'-----------');
    
}
// 获取子组件中暴露出来的数据或者方法
// const Content = ref<InstanceType<typeof Content>>()
//     console.log(Content.value?.name,'Content.value.name');
    
    
</script>

<style scoped lang="scss">
@include b(box){
    @include bfc;
    display:flex;
    @include e(right){
        display:flex;
        flex-direction:column;
        flex:1;
    }
}
</style>