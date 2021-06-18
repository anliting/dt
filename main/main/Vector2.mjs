import NumberPair from './NumberPair.mjs'
function Vector2(){
    NumberPair.apply(this,arguments)
}
Object.setPrototypeOf(Vector2.prototype,NumberPair.prototype)
// area
Vector2.prototype.area=function(v){
    return Math.abs(this.x*v.y-this.y*v.x)
}
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
export default Vector2
