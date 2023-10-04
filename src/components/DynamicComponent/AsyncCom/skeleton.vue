<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-04 19:17:11
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 19:49:01
-->
<template>
    <div class="xi-sk">
        <div class="xi-sync__2">
            <div>稍等片刻</div>
            <div>稍等片刻</div>
            
        </div>
        <hr>
        <div class="xi-sync__3"></div>
        <div class="xi-sync__3"></div>

    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scoped lang="scss">
@include b(sync) {
    height: 60px;
    border-bottom: 1px solid #ccc;
}
</style>