<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-03 10:24:32
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-03 11:32:14
-->
<template>
    <div class="xi-waterfall" id="waterfall">
        <div class="xi-waterfall__items" v-for="item in waterList"
            :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px', }">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
type Box = { height: number, background: string, left?: number, top?: number }
const props = withDefaults(defineProps<{
    list: Box[]
}>(), {
    list: () => [{ height: 100, background: 'red' }]
})
const waterList = reactive<any[]>([])
const heightList:number[] =[]
const init = () => {
    const width = 130

    const x = document.getElementById("waterfall")?.clientWidth
    const column = Math.floor(x as number / width)
    console.log(column);
    
    for (let i = 0; i < props.list.length; i++) {
        if (i < column) {
            props.list[i].left = i * width
            props.list[i].top = 20
            waterList.push(props.list[i])
            heightList.push(props.list[i].height)
        }else{
            let current =heightList[0]
            let index = 0;
            heightList.forEach((h,i)=> {
                if (current>h) {
                    current = h;
                    index = i;
                }
            })
            props.list[i].top = current + 20
            props.list[i].left = index * width
            heightList[index] = heightList[index] + props.list[i].height + 20
            waterList.push(props.list[i])

        }
    }

}
onMounted(() => {
    init()

})
</script>

<style scoped lang="scss">
@include b(waterfall) {
    position: relative;

    @include e(items) {
        position: absolute;
        width: 120px;
    }
}
</style>