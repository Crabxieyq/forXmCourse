<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 19:25:44
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 19:47:08
-->
<template>
    <div class="xi-Acom">
        <!-- 要展示异步组件必须使用Suspense -->
        <Suspense>
            <template #default>
                <SyncVue></SyncVue>
            </template>
            <template #fallback>
                <skeleton></skeleton>
            </template>

        </Suspense>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive,defineAsyncComponent} from 'vue'
import skeleton from './AsyncCom/skeleton.vue';
// 异步组件
const SyncVue = defineAsyncComponent(() => import('../DynamicComponent/AsyncCom/sync.vue'))
</script>
<style scoped lang="scss">

</style>