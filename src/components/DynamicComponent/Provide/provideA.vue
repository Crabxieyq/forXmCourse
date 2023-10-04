<template>
    <div class="xi-provideA">
       <h1>父亲级别</h1>
       <div class="xi-provideA__box"></div>
    </div>
    <hr>
    <provideB></provideB>
</template>

<script setup lang="ts">
import {ref, reactive,inject} from 'vue'
import type {Ref} from 'vue'
import provideB from './provideB.vue';
const color = inject<Ref<string>>('color')
</script>
<style scoped lang="scss">
@include b(provideA){
    @include e(box){
        height: 50px;
        width: 50px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        background: v-bind(color);//vue3新增的 可以直接在样式里用v-bind绑定样式属性
    }
}
</style>