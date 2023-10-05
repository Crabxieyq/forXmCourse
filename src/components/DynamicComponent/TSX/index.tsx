// 直接返回一个渲染函数
// export default function(){
//     return (<div>尝试用TSX渲染页面</div>)
// }


// 使用optionsAPi 引入defineComponent 写法与vue2类似 变量使用单花括号
// import { defineComponent } from "vue";
// export default defineComponent({
//     data(){
//         return{
//             age:23
//         }
//     },
//     render (){
//         return (<div>{this.age}</div>)
//     }
// })

// setup函数模式 支持v-show ref在template里面是自动解包的 不需要使用.value 但是在tsx中并不会
// 所以需要使用.value return () => (<div v-show={flag.value}>xixi setup</div>)
// 不支持v-if 可以使用三元表达式代替 
// v-for 可以用map循环代替
// v-bind 用{}代替
// 父组件穿来的值在setup(props)里面接收
// 支持v-model
import { defineComponent ,ref} from "vue";
export default defineComponent({
   setup(){
    const flag = ref(true)
    const fromModel = ref<string>("v-model")
    return () => (<>
        <input type="text" v-model={fromModel.value}/>
        <div>{fromModel.value}</div>
    <div v-show={flag.value}>xixi setup</div>
    </>)
   }
})
