/*
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-07 13:09:43
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-09 11:24:00
 */
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
import './index.css'
// 引入自定义插件
import Loading from './components/Loading'
const Mit = mitt()
const app = createApp(App)
// 定义全局变量 使用时直接用$env 即可
app.config.globalProperties.$env = 'dev'
// 注册自定义插件
app.use(Loading)

type Lod = {
    show: () => void,
    hide: () => void
}
//编写ts loading 声明文件放置报错 和 智能提示
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $loading: Lod
    }
}
declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus:typeof Mit
    }
}
app.config.globalProperties.$Bus = Mit
app.component('slotCom',slotCom).mount('#app')
// createApp(App).component('slotCom',slotCom)
// createApp(App).mount('#app')
