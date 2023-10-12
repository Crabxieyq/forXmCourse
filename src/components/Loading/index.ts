// 插件实现
// 插件支持两种格式，一种是对象形式（要求包含install函数），一种是函数形式
import {createVNode,render,VNode, App} from 'vue'
import Loading from './index.vue'
export default{
    install(app:App){
        // createVNode vue提供的底层方法，可以给组件创建一个虚拟DOM,即VNode
        const vNode:VNode = createVNode(Loading)
        // render 将vNode变成真实的DOM 并挂在指定节点
        render(vNode,document.body)
        // Vue提供的全局配置，因为不再像Vue2那样有原型 protoType 而是app.config.globalProperties
        app.config.globalProperties.$loading = {
            show:() => vNode.component?.exposed?.show,
            hide:() => vNode.component?.exposed?.hide
        }
    }
}