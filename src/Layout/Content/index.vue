
<template>
    <div class="xi-content">
        <!-- <div class="xi-content__items" v-for="item in numtoContent"> {{ item }} </div> -->
        <Button @click="send">给父组件传值</Button>
        <Button @click="sendByBus">用Bus给兄弟组件传值</Button>
        <!-- <waterfall :list="list"></waterfall> -->
        <!-- <slotCom></slotCom> -->

        <DynamicComp></DynamicComp>
    </div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue"
import waterfall from '../../components/waterfall.vue'
import DynamicComp from "../../components/DynamicComponent/index.vue";
import Bus from '../../bus'
// 给父组件传值defineEmits 写法一
// const emit = defineEmits(['on-click'])

// 使用ts 写法二
const emit = defineEmits<{
    (e:'on-click',name:string):void
}>()
const send = () => {
    emit('on-click','xxxxx')
}
let toBro = ref<string>("content组件中通过Bus传过来的内容")
const sendByBus = () => {
Bus.emit('toHeader',toBro)
}

// 子组件可以暴露值或者方法 父组件中可以通过ref直接读取
defineExpose({
    name:"xiix",
    open:() => console.log('子组件中暴露给父组件的方法')
    
})





const list =[
    {height:200,background:'red'},
    {height:300,background:'blue'},
    {height:200,background:'green'},
    {height:400,background:'rosybrown'},
    {height:400,background:'goldenrod'},
    {height:500,background:'rosybrown'},
    {height:200,background:'navajowhite'},
    {height:300,background:'bisque'},
    {height:250,background:'darkmagenta'},
    {height:200,background:'rosybrown'},
    {height:450,background:'gainsboro'},
    {height:500,background:'greenyellow'},
    {height:450,background:'red'},
    {height:350,background:'gainsboro'},
    {height:250,background:'darkmagenta'},
    {height:200,background:'goldenrod'},
    {height:300,background:'blueviolet'},
    {height:400,background:'navajowhite'},
    {height:550,background:'bisque'},
    {height:450,background:'rosybrown'},
    {height:250,background:'blueviolet'},
    {height:300,background:'greenyellow'},

]












// 子组件接收父组件传过来的参数defineProps,需要用参数接收了后才能在代码里使用，模板里可以直接使用




// 使用字面量接收
// defineProps<{
//     numtoContent:Number,
//     arr:number[]
// }>()

// 使用字面量接收 带默认值
withDefaults(defineProps<{
    numtoContent:number,
    arr:number[]
}>(),{
    numtoContent:66,
    arr:() => [2,2,2]
})

</script>
<style scoped lang="scss">
@include b(content) {
    flex: 1;
    overflow: auto;

    @include e(items) {
        paddine: 10px;
        margin: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
}
</style>