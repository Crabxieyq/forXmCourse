<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanqing.Xie
 * @Date: 2023-10-19 13:37:04
 * @LastEditors: yanqing.Xie
 * @LastEditTime: 2023-10-19 14:06:58
-->
<template>
    <div>
        <table border="1" cellspacing="3">
            <tr>
                <th>name</th>
                <th>age</th>
                <th>addr</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in list" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.addr }}</td>
                <td>
                    <Btn type="success">编辑</Btn>
                    <Btn type="error">删除</Btn>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
// h函数 -> createVnode
// 优势：跳过模板编译 (parse -> ast ->transform -> js api ->render)
const list = reactive([{
    id: 1,
    name: 'xiaoxiao',
    age: 9,
    addr: 'nb'

}, {
    id: 2,
    name: 'qq',
    age: 10,
    addr: 'yy'

}, {
    id: 3,
    name: 'mm',
    age: 8,
    addr: 'cq'
}, {
    id: 4,
    name: 'xx',
    age: 8,
    addr: 'cq'
}, {
    id: 5,
    name: 'hh',
    age: 8,
    addr: 'cq'
}])
interface Props {
    type: 'success' | 'error'
}
const Btn = (props: Props, ctx:any) => {
    // 第一个参数：创建的节点
    // 第二个参数是节点的属性，包括类名，样式
    // 第三个参数是节点的内容
    // console.log(ctx); ctx也能派发emit
    console.log(ctx);
    return h('button', {
        style: {
            color: props.type == 'success' ? 'green' : 'red',
            margin:5
        },
        onClick: () => {
            console.log('click');
            // ctx.emit()
        }
    }, ctx.slots.default())
}
</script>
<style scoped lang="scss">
table {
    border-right: 1px solid #000000;
    border-bottom: 1px solid #000000;
    text-align: center;
}

table th {
    border-left: 1px solid #000000;
    border-top: 1px solid #000000;
    padding: 10px;
    background: #ccc
}

table td {
    border-left: 1px solid #000000;
    border-top: 1px solid #000000;
    padding: 10px;
}</style>