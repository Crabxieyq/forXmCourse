type BusClass = {
    emit: (name:string) => void
    on: (name:string,callback:Function) => void
}
type ParmasKey = string | number | symbol
type list = {
    [key:ParmasKey]:Array<Function>
}
class Bus implements BusClass{
    list:list
    constructor(){
        this.list = {}
    }
emit(name: string,...args:Array<any>){
    let eventName:Array<Function> = this.list[name]
    eventName.forEach((fn) => {
        fn.apply(this,args)
    })
};
on(name: string, callback: Function){
    let fn:Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
};
}
export default new Bus()