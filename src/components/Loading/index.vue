
<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-09 09:37:11
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-11 10:35:16
-->


<template>
    <div v-if="isShow" class="loading">
       <div class="loading-content">Loading</div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isShow = ref<boolean>(false)
const show = () => {
    isShow.value = true
}
const hide = () => {
    isShow.value = false
}

// 对外暴露当前组件的属性和方法
defineExpose({
    isShow,
    show,
    hide
})
</script>
<style scoped lang="scss">
.loading{
    position:fixed;
    inset:0;
    background:rgba(37, 31, 31, 0.8);
    display:flex;
    justify-content:center;
    align-items:center;
    .loading-content:{
        font-size:30px;
        color:#fff;
    }

}
</style>