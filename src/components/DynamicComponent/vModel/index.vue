<template>
    <div class="xi-menu">
        <h1>父组件</h1>
        <h4>给自定义组件绑定v-model</h4>
        <div>
            <button @click="isShow = !isShow">开关</button>
        </div>
        <div>isShow:{{ isShow }}</div>
        <div>text:{{ text }}</div>
        <hr/>
        <!-- 支持绑定多个v-model v-model:textValue="text" 子组件就通过textValue接收-->
        <innerCom v-model="isShow" v-model:textValue="text"></innerCom>
    </div>
</template>

<script setup lang="ts">
import innerCom from './innerCom.vue';
const isShow = ref<boolean>(true)
 const text = ref<string>('xiix')
</script>
<style scoped lang="scss">
@include b(menu) {
    // min-width: 200px;
    border-right: 1px solid #ccc;
    height: 100%;
}
</style>