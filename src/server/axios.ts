/*
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-04 19:22:16
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-04 19:47:32
 */
// 封装axios
export const axios = {
    get<T>(url: string):Promise<T> {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url)
            xhr.onreadystatechange = () => {
                // 有五个状态
                // 0 未初始化 还没有调用send()方法
                // 1 载入 已调用send()方法 正在发送请求
                // 2 载入完成 send()方法执行完成 已经接收到全部相应内容
                // 3 交互 正在解析相应内容
                // 4 完成 响应内容解析完成 可以在客户端调用了
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let data = JSON.parse(xhr.responseText)
                    setTimeout(() => {
                        resolve(data)
                    }, 2000)
                }
            }
            // 向后台发送东西
            xhr.send(null)
        })
    }
}