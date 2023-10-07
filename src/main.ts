/*
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 14:26:03
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-07 17:21:33
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import slotCom from './components/DynamicComponent/Dialog/index.vue'
import mitt from 'mitt'
const Mit = mitt()
const app = createApp(App)
// 定义全局变量 使用时直接用$env 即可
app.config.globalProperties.$env = 'dev'


declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus:typeof Mit
    }
}
app.config.globalProperties.$Bus = Mit
app.component('slotCom',slotCom).mount('#app')
// createApp(App).component('slotCom',slotCom)
// createApp(App).mount('#app')
