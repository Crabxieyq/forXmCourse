<template>
    <div class="xi-provide">
        <h1>爷爷级别</h1>
        <label >
            <input type="radio" v-model="colorVal" value="red" name="color">红色
        </label>
        <label >
            <input type="radio" v-model="colorVal" value="pink" name="color">粉色
        </label>
        <label >
            <input type="radio" v-model="colorVal" value="yellow" name="color">黄色
        </label>
        <div class="xi-provide__box"></div>
    </div>
    <hr>
<provideA></provideA>
</template>

<script setup lang="ts">
import {ref, reactive,provide,readonly} from 'vue'
import provideA from './provideA.vue';
const colorVal = ref<string>('red')
// 将colorVal设为provide  这样所有的子组件都可以通过inject读取值
// 默认情况 子组件中接收了值是可以更改的，如果不想子组件中能改，加上readonly
provide('color',readonly(colorVal))
</script>
<style scoped lang="scss">
@include b(provide){
    @include e(box){
        height: 50px;
        width: 50px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        background: v-bind(colorVal);
    }
}
</style>