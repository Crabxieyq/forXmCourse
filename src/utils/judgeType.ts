/**
 * 精准判断所传入参数的数据类型，包括string number boolean undefined null array object Date Regexp Function 
 * @param {Object} 
 */
export function typeOf(obj:any) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

// 继承
// 原型链继承
// function Animal() {
//     this.colors = ['black','white']
// }
// Animal.prototype.getColor = function(){
//     return this.colors
// }
// function Dog(){}
// Dog.prototype = new Animal()
// let dog1 = new Dog()
// dog1.colors.push('brown')
// let dog2 = new Dog()
// console.log(dog2.colors);//['black', 'white', 'brown']
