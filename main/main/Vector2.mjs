import NumberPair from './NumberPair.mjs'
function Vector2(){
    NumberPair.apply(this,arguments)
}
Object.setPrototypeOf(Vector2.prototype,NumberPair.prototype)
// inner product
Vector2.prototype.ip=function(v){
    return this.x*v.x+this.y*v.y
}
// length
Object.defineProperty(Vector2.prototype,'len',{get(v){
    return this.ip(this)**.5
}})
Vector2.prototype.valueOf=function(){
    return this.ip(this)**.5
}
Vector2.numeric=function(a,f){
    return new this(
        f(...a.map(a=>a.x)),
        f(...a.map(a=>a.y))
    )
}
export default Vector2