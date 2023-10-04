/*
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-02 14:26:03
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 18:42:07
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import slotCom from './components/DynamicComponent/Dialog/index.vue'

createApp(App).component('slotCom',slotCom).mount('#app')
// createApp(App).component('slotCom',slotCom)
// createApp(App).mount('#app')
