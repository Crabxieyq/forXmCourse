<template>
    <div class="xi-provideA">
       <h1>最低级别</h1>
       <div class="xi-provideA__box"></div>
       <button @click="changeProvide">修改上级传procide传过来的值</button>
    </div>
    <hr>
    
</template>

<script setup lang="ts">
import {ref, reactive,inject} from 'vue'
import type {Ref} from 'vue'
// 使用inject读取上级或者上上级组件用provide传递的值，key需要保持一致
const color = inject<Ref<string>>('color')
    // 这里的color没有办法直接通过color?.value 修改，因为color是string类型或者undefined
    // 解决办法一，获取的时候加个默认值 const color = inject<Ref<string>>('color'，ref('red'))
    // 方法二 使用非空断言 如下所示
const changeProvide = () => {
    color!.value = 'blue'
}
</script>
<style scoped lang="scss">
@include b(provideA){
    @include e(box){
        height: 50px;
        width: 50px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        background: v-bind(color);
    }
}
</style>