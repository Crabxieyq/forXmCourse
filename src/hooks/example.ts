/*
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-07 16:35:45
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-07 16:41:50
 */
import { App, defineComponent, onMounted } from 'vue'
// ResizeObserver侦听元素宽高变化
function useResize(el: HTMLElement, callback: (cr: DOMRectReadOnly,resize:ResizeObserver) => void) {
    let resize: ResizeObserver
        resize = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const cr = entry.contentRect;
                callback(cr,resize)
            }
        });
        resize.observe(el)
}
 
//  这里的install相当于app.use
 
const install = (app: App) => {
    app.directive('resize', {//自定义指令
        mounted(el, binding) {
            useResize(el, binding.value)
        }
    })
}
 
useResize.install = install
 
export default useResize