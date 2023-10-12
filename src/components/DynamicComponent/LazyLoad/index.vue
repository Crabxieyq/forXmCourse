<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-07 14:38:36
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-10 14:53:36
-->
<template>
    <div class="xi-lazyLoad">
        <div class="xi-lazyLoad__pics">
            <img v-lazy="item" width="360" height="500" v-for="item in arr ">
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Directive } from 'vue'
// vite提供的全部引入图片的方法

// import.meta.globEager是静态加载
// import xx from 'xx'

// import.meta.glob 是懒加载 会进行代码分包
// let modelus = {
//     'XXX':() => import ('...');
// }

let imgList: Reacord<string, { default: string }> = import.meta.globEager('../../../assets/imgs/*.*')
let arr = Object.values(imgList).map(img => img.default)

let vLazy: Directive<HTMLElement, string> = async (el, binding) => {
    const def = await import('../../../assets/vue.svg')
    // 展示默认图片
    el.src = def.default
    // 当当前img元素展示在可视区内时，将图片替换掉
    // 怎么判断一个元素是否在可视区内？
    // js的IntersectionObserver api可以监控
    const observer = new IntersectionObserver((entries) => {
        // 如果 intersectionRatio 为 0，则目标在视野外，
        // intersectionRatio大于0,说明当前元素在可视区内，为1说明当前元素全在可视区内。
        if (entries[0].intersectionRatio > 0) {
            // setTimeout(() => {
                el.src = binding.value
                // 展示为图片后就不需要再监听了
                observer.unobserve(el)
            // }, 1000);
            
        };
        // console.log(entries[0]);
        
    })
    // 传入需要监听的元素
    observer.observe(el)
}

</script>
<style scoped lang="scss">
.xi-lazyLoad__pics {
    display: flex;
    flex-direction: column
}
</style>