<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-07 14:38:36
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-07 16:27:15
-->
<template>
    <div >
       <img id="img" src="../../../assets/imgs/1.jpg" alt="">
    </div>
</template>

<script setup lang="ts">
// 自定义hooks命名一般以use开头
import useBase64 from "../../../hooks/index";
useBase64({
    el:'#img'
}).then((res) => {
    console.log(res.baseUrl);
    
})
</script>
<style scoped lang="scss">
</style>