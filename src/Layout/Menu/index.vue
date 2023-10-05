<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 19:25:44
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-02 19:38:53
-->
<template>
    <div class="xi-menu">
        Menu
        {{ toMenuMethods }}
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
let toMenuMethods = ref<string>('')
instance?.proxy?.$Bus.on("toMenu", (methods: any) => {
    toMenuMethods.value = methods
})
</script>
<style scoped lang="scss">
@include b(menu) {
    min-width: 200px;
    border-right: 1px solid #ccc;
    height: 100%;
}
</style>