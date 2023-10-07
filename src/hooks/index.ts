/*
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-07 15:52:42
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-07 16:24:38
 */

// 自定义hook实际上是一个函数
import { onMounted } from "vue";
type Options = {
    el: string
}
export default function name(Options: Options):Promise<{baseUrl:string}>{
    return new Promise<void>((resolve, reject) => {
        onMounted(() => {
            let img: HTMLImageElement = document.querySelector(Options.el) as HTMLImageElement
            // 图片加载完了开始解析 否则会导致解析错误
            img.onload = () => {
                
                resolve({baseUrl:base64(img)})
            }

        })

        const base64 = (el: HTMLImageElement) => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = el.width
            canvas.height = el.height
            ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
            return canvas.toDataURL('image/jpg')
        }
    })
}






















