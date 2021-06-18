function Container(){}function DeclarativeSet(){this._set=new Set}function VertexEdgeArray(){this._vertices=[],this._edges=[]}function CompoundArrayContainer(){Container.call(this),this._a=[]}function Stack(){CompoundArrayContainer.call(this)}function DirectedGraph(t=VertexEdgeArray){this._DataStructure=VertexEdgeArray,this._data=new this._DataStructure}function List(){this.length=0,this._head={},this._tail={},this._head.next=this._tail,this._tail.previous=this._head}function Pair(t=0,e=t){this.x=t,this.y=e}function NumberPair(){Pair.apply(this,arguments)}function PriorityQueue(t){CompoundArrayContainer.call(this),this._cmp=t||((t,e)=>t-e)}function Queue(){CompoundArrayContainer.call(this)}function Range(){NumberPair.apply(this,arguments)}function StreamCaller(t){this._stream=t}function Stream(){this._a=[],this.caller=new StreamCaller(this)}function Vector2(){NumberPair.apply(this,arguments)}Container.prototype[Symbol.iterator]=function*(){for(;this.size;)yield this.out()},Container.iterator=t=>Container.prototype[Symbol.iterator].call(t),DeclarativeSet.prototype.in=function(t){this._set.add(t),this._forEach&&this._forEach.in(t)},DeclarativeSet.prototype.out=function(t){this._set.delete(t),this._forEach&&this._forEach.out(t)},Object.defineProperty(DeclarativeSet.prototype,"forEach",{set(t){this._forEach&&this._set.forEach(this._forEach.out),this._forEach=t,this._forEach&&this._set.forEach(this._forEach.in)}}),DeclarativeSet.fromArray=function(t){let e=new DeclarativeSet;for(let r of t)e.in(r);return e},Object.defineProperty(VertexEdgeArray.prototype,"vertices",{get(){return this._vertices.slice()}}),Object.defineProperty(VertexEdgeArray.prototype,"edges",{get(){return this._edges.slice()}}),VertexEdgeArray.prototype.addVertex=function(t=Symbol()){return this._vertices.push(t),t},VertexEdgeArray.prototype.addEdge=function(t,e){let r=[t,e];this._edges.push(r)},Object.setPrototypeOf(CompoundArrayContainer.prototype,Container.prototype),CompoundArrayContainer.prototype.in=function(){this._a.push(...arguments)},CompoundArrayContainer.prototype.out=function(){return this._a.pop()},Object.defineProperty(CompoundArrayContainer.prototype,"size",{get(){return this._a.length}}),Object.setPrototypeOf(Stack.prototype,CompoundArrayContainer.prototype),Object.defineProperty(DirectedGraph.prototype,"vertices",{get(){return this._data.vertices.slice()}}),Object.defineProperty(DirectedGraph.prototype,"edges",{get(){return this._data.edges.slice()}}),DirectedGraph.prototype.addVertex=function(t){return this._data.addVertex(t)},DirectedGraph.prototype.addEdge=function(t,e){this._data.addEdge(t,e)},DirectedGraph.prototype.longestTopologicalSort=function(t=new Stack){let e={},r={};for(let t of this._data.vertices)e[t]=0,r[t]=[];for(let[t,i]of this._data.edges)e[i]++,r[t].push(i);let i=[];for(let r of this._data.vertices.filter((t=>0==e[t])))t.in(r);for(let o of Container.iterator(t))i.push(o),r[o].map((r=>--e[r]||t.in(r)));return i},Object.defineProperty(DirectedGraph.prototype,"topologicalSort",{get(){let t=this.longestTopologicalSort();if(t.length<this._data.vertices.length)throw Error("Cycle detected.");return t}}),List.prototype.append=function(t){return this.insert(this.tail,t)},Object.defineProperty(List.prototype,"head",{get(){return this._head.next}}),List.prototype.insert=function(t,e){return this.length++,t.previous=t.previous.next={previous:t.previous,next:t,key:e}},List.prototype.out=function(t){return this.length--,t.previous.next=t.next,t.next.previous=t.previous,t.next},Object.defineProperty(List.prototype,"tail",{get(){return this._tail}}),List.prototype[Symbol.iterator]=function*(){for(let t=this.head;t.next;t=t.next)yield t.key},Pair.prototype[Symbol.iterator]=function*(){yield*[this.x,this.y]},Object.setPrototypeOf(NumberPair.prototype,Pair.prototype),NumberPair.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},NumberPair.prototype.addN=function(t,e=t){return this.x+=t,this.y+=e,this},NumberPair.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},NumberPair.prototype.subN=function(t,e=t){return this.x-=t,this.y-=e,this},NumberPair.prototype.mul=function(t){return this.x*=t.x,this.y*=t.y,this},NumberPair.prototype.mulN=function(t,e=t){return this.x*=t,this.y*=e,this},NumberPair.prototype.div=function(t){return this.x/=t.x,this.y/=t.y,this},NumberPair.prototype.divN=function(t,e=t){return this.x/=t,this.y/=e,this},NumberPair.prototype.lt=function(t){return this.x<t.x&&this.y<t.y},NumberPair.prototype.ltN=function(t,e){return this.x<t&&this.y<e},NumberPair.prototype.eq=function(t){return this.x==t.x&&this.y==t.y},NumberPair.prototype.eqN=function(t,e){return this.x==t&&this.y==e},NumberPair.prototype.gt=function(t){return this.x>t.x&&this.y>t.y},NumberPair.prototype.gtN=function(t){return this.x>t.x&&this.y>t.y},Object.defineProperty(NumberPair.prototype,"new",{get(){return new NumberPair(this.x,this.y)}}),Object.defineProperty(NumberPair.prototype,"newNeg",{get(){return this.newMulN(-1)}}),NumberPair.prototype.newAdd=function(t){return new this.constructor(this.x+t.x,this.y+t.y)},NumberPair.prototype.newAddN=function(t,e=t){return new this.constructor(this.x+t,this.y+e)},NumberPair.prototype.newSub=function(t){return new this.constructor(this.x-t.x,this.y-t.y)},NumberPair.prototype.newSubN=function(t,e=t){return new this.constructor(this.x-t,this.y-e)},NumberPair.prototype.newMul=function(t){return new this.constructor(this.x*t.x,this.y*t.y)},NumberPair.prototype.newMulN=function(t,e=t){return new this.constructor(this.x*t,this.y*e)},NumberPair.prototype.newDiv=function(t){return new this.constructor(this.x/t.x,this.y/t.y)},NumberPair.prototype.newDivN=function(t,e=t){return new this.constructor(this.x/t,this.y/e)},NumberPair.numeric=function(t,e){return new this(e(...t.map((t=>t.x))),e(...t.map((t=>t.y))))},Object.setPrototypeOf(PriorityQueue.prototype,CompoundArrayContainer.prototype),PriorityQueue.prototype.in=function(){for(let t=0;t<arguments.length;t++){let e=arguments[t];this._a.push(e);for(let t,e=this._a.length-1;e;e=t)t=~~((e-1)/2),this._cmp(this._a[e],this._a[t])<0&&([this._a[e],this._a[t]]=[this._a[t],this._a[e]])}},PriorityQueue.prototype.out=function(){let t=this._a[0];this._a[0]=this._a[this._a.length-1],this._a.pop();for(let t=0;2*t+1<this._a.length;){let e=this._a.length<=2*t+2||this._cmp(this._a[2*t+1],this._a[2*t+2])<0?2*t+1:2*t+2;if(this._cmp(this._a[t],this._a[e])<0)break;[this._a[t],this._a[e]]=[this._a[e],this._a[t]],t=e}return t},Object.defineProperty(PriorityQueue.prototype,"top",{get(){return this._a[0]}}),Object.setPrototypeOf(Queue.prototype,CompoundArrayContainer.prototype),Queue.prototype.out=function(){return this._a.shift()},Object.setPrototypeOf(Range,NumberPair),Object.setPrototypeOf(Range.prototype,NumberPair.prototype),Object.defineProperty(Range.prototype,"len",{get(t){return Math.max(0,this.y-this.x)}}),Range.prototype.valueOf=function(){return Math.max(0,this.y-this.x)},Range.prototype.intersect=function(){let t=[...arguments];return this.x=Math.max(this.x,...t.map((t=>t.x))),this.y=Math.min(this.y,...t.map((t=>t.y))),this},Range.prototype.newIntersect=function(){let t=[...arguments];return new Range(Math.max(this.x,...t.map((t=>t.x))),Math.min(this.y,...t.map((t=>t.y))))},StreamCaller.prototype=new Proxy({},{get:(t,e)=>function(){return new Promise((t=>this._stream.in([e,...arguments,t])))}}),Stream.prototype.in=function(t){return this._out?this._out(t):this._a.push(t),this},Stream.prototype.mapIn=function(t){return(new Stream).out((e=>this.in(t(e))))},Stream.prototype.out=function(t){return t&&(this._a.map(t),this._a=[]),this._out=t,this},Stream.prototype.to=function(t){this.out(this.in.bind(t))},Object.setPrototypeOf(Vector2.prototype,NumberPair.prototype),Vector2.prototype.area=function(t){return Math.abs(this.x*t.y-this.y*t.x)},Vector2.prototype.ip=function(t){return this.x*t.x+this.y*t.y},Object.defineProperty(Vector2.prototype,"len",{get(t){return this.ip(this)**.5}}),Vector2.prototype.valueOf=function(){return this.ip(this)**.5};var main={Container:Container,DeclarativeSet:DeclarativeSet,DirectedGraph:DirectedGraph,List:List,NumberPair:NumberPair,PriorityQueue:PriorityQueue,Queue:Queue,Range:Range,Stack:Stack,Stream:Stream,Vector2:Vector2};export default main;export{Container,DeclarativeSet,DirectedGraph,List,NumberPair,PriorityQueue,Queue,Range,Stack,Stream,Vector2};