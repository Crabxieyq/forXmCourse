<template>
    <div class="xi-model" v-if="modelValue">
        <div class="xi-model__close">
            <!-- 点击关闭，不可以直接修改父组件传过来的数据 需要通过emits修改 -->
            <button @click="close">关闭</button>
        </div>
        <h3>我是自定义子组件</h3>
        <div>输入框 <Input type="text" :value="textValue" @input="inputText"></Input></div>
    </div>
</template>

<script setup lang="ts">
// 自定义组件通过props接收父组件通过v-model传过来的值：
// vue2 value vue3 modelValue
defineProps<{
    modelValue:boolean,
    textValue:string
}>()
// 固定写法'update:modelValue'，modelValue是接收的值
const emit = defineEmits(['update:modelValue','update:textValue'])
const close = () => {
    emit('update:modelValue',false)
}

const inputText = (e:event) => {
    const target = e.target as HTMLInputElement
    emit('update:textValue',target.value)
}
</script>
<style scoped lang="scss">
@include b(model){
    width:500px;
    border:5px solid #ccc;
    padding:10px;
}
.xi-model{
    width:500px;
    border:5px solid #ccc;
    padding:20px;
    margin:20px;
    .xi-model__close{
        float:right
    }
}
</style>