<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 14:26:03
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-02 19:18:32
-->
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="xi-test">
    擦滴答滴答
    <div class="xi-test__inner">text__inner</div>
    <div class="xi-test--success">success</div>
  </div>
</template>

<style scoped lang="scss">
@include b(test) {
  color: red;

  @include e(inner) {
    color: rgb(183, 108, 16);
  }
  @include m(success){
    color: black;
  }
}
</style>
