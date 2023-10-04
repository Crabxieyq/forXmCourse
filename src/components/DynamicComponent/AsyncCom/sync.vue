<template>
    <div class="xi-sync">
        <div class="xi-sync__content">
            <div> <img src="data.url" alt=""></div>
            <div class="xi-sync__pop">
                <div>{{ data.name}}</div>
                <div>&nbsp;{{ data.age}}</div>
            </div>
        </div>
        <hr>
        <div>{{ data.desc}}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {axios} from '../../../server/axios'
interface Data{
    data:{
        name:string,
        age:number,
        url:string,
        desc:string
    }
}
const {data} = await axios.get<Data>('./data.json')
</script>
<style scoped lang="scss">
@include b(sync) {
    height: 60px;
    border-bottom: 1px solid #ccc;
}
</style>