---
description: JavaScript 练习题与面试题
thumbnail:
tag:
  - 前端
  - javascript
  - 笔记
---

# JavaScript 错题本

## 实现 new

``` JS
function _new(Con, ...args){
    // 创建指向构造函数的原型对象的新对象
  this.obj = Object.create(Con.prototype)
  // obj绑定到构造函数上，便可以访问构造函数中的属性，即this.obj.Con(args)
  let result = Con.apply(this.obj, args);
  // 如果返回的result是一个对象则返回result
  // 否则返回obj
  return result instanceof Object ? result : this.obj;
}
```

``` TS
function _new(this: any, Con:any, ...args: any[]): Object{
  this.obj = Object.create(Con.prototype)
  let result = Con.apply(this.obj, args);
  return result instanceof Object ? result : this.obj;
}
```

## 实现 Array.isArray()

利用 Object.prototype.toString.call()

``` JS
Array._isArray = function(o) {
  return Object.prototype.toString.call(Object(o)) === '[object Array]';
};
```

## 实现 Object.create()

``` JS
Object._create =  function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
};
```

## 实现 EventEmitter

``` JS
class Event {
  constructor () {
    // 储存事件的数据结构
    // 为查找迅速， 使用对象（字典）
    this._cache = {}
  }

  // 绑定
  on(type, callback) {
    // 为了按类查找方便和节省空间
    // 将同一类型事件放到一个数组中
    // 这里的数组是队列， 遵循先进先出
    // 即新绑定的事件先触发
    let fns = (this._cache[type] = this._cache[type] || [])
    if(fns.indexOf(callback) === -1) {
      fns.push(callback)
    }
    return this
    }

  // 解绑
  off (type, callback) {
    let fns = this._cache[type]
    if(Array.isArray(fns)) {
      if(callback) {
        let index = fns.indexOf(callback)
        if(index !== -1) {
          fns.splice(index, 1)
        }
      } else {
        // 全部清空
        fns.length = 0
      }
    }
    return this
  }

  // 触发
  emit(type, data) {
    let fns = this._cache[type]
    if(Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(data)
      })
    }
    return this
  }


  // 一次性绑定
once(type, callback) {
	let wrapFun = () => {
		callback.call(this);
		this.off(type, wrapFun );
	};
	this.on(type, wrapFun );
	return this;
}
```

## 实现 Array.prototype.reduce()

``` JS
Array.prototype._reduce = function (callback, initialValue) {
  // 判断数组
  if (Object.prototype.toString.call(this) !== '[object Array]') {
    throw new TypeError('not a array')
  }
  // 判断空数组
  if (this.length === 0) {
    throw new TypeError('empty array')
  }
  // 判断传入的第一个参数是否为函数
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }

  // 回调函数参数初始化
  let accumulator, currentValue, currentIndex
  if (initialValue) {
    accumulator = initialValue
    currentIndex = 0
  } else {
    accumulator = this[0]
    currentIndex = 1
  }

  while (currentIndex < this.length) {
    if (Object.prototype.hasOwnProperty.call(this, currentIndex)) {
      currentValue = this[currentIndex]
      accumulator = callback(accumulator, currentValue, currentIndex, this)
    }
    currentIndex++
  }

  return accumulator
}
```
