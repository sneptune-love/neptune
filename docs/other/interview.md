

`汇总`

更新时间：{docsify-updated}

## HTML

### DOCTYPE是什么？

\<!DOCTYPE\>指定浏览器以标准文档类型来对文档进行解析，如果不存在，则浏览器会以兼容模式来对文档解析

- 标准模式：浏览器以最新的文档标准来进行解析

- 兼容模式：浏览器以向后兼容的形式来进行解析，以防止老式浏览器运行异常

### 元素区分

> 行内元素

`a, b, span, i, em, button, label,select...`

- 设置宽高无效

- 只能设置margin左右值，上下值无效

- 不会自动换行

> 块级元素

`div, p, ul, li, ol, dl, dt, dd, h1-h6, table, form, hr, pre, address...`

- 可以设置宽高

- margin和padding均有效

- 会自动换行

> 行内块元素

`img, input, textarea`

- 可以设置宽高

- 不能自动换行

### 浏览器渲染Html的过程

### 浏览器的回流和重绘机制

### script标签上的defer和async属性

### 


## CSS

### 样式引入

> 样式引入方式有以下三种方式

- style标签

    - 直接书写样式
    
    - 通过@import 引入样式文件

- 标签元素上添加style属性

- link方式引入


> link和@import的区别，可以划分四种不同

- 从属关系：link是XHTML标签，可以引入外部css文件；@import是css语法，作用于css文件内部，其功能是引入其它css文件

- 加载顺序：link引用css是在页面载入时同时加载；@import是在网页完全载入后再加载

- 兼容性：link无兼容问题；@import不兼容IE5一下浏览器

- DOM可控性：link支持Dom操作动态改变引入样式文件；@import无法动态改变


### 有哪些样式属性？

### rem, em, vw, vh详解

### 权重是什么意思？

### 什么是BFC?

### 盒模型

### 浏览器兼容性如何处理？

### 

## JS

### JS语法标准有哪些？

### JS是如何运行在浏览器上的？


### 事件轮询（Event Loop）

- 宏任务

`setTimeout、setInterval、setImmediate、XMLHttpRequest，I/O、UI rendering等`

- 微任务

`promise.then、process.nextTick(node环境)、Object.observe，MutationObserver等`

> 执行顺序

- 先执行主线程
- 若果遇到宏任务放入宏任务队列
- 如果遇到微任务放入微任务队列
- 主线程执行完毕
- 执行微任务队列
- 微任务队列执行完毕
- 执行宏任务队列中先放入的宏任务，执行一次
- 宏任务执行完毕
- 执行微任务队列
- ...依次循环

### 深拷贝和浅拷贝的区别？

浅拷贝是对引用地址进行的拷贝，如果更改拷贝后的内容，原内容也会发生改变（拷贝层级1）

深拷贝则是返回一个全新的值，更改拷贝后的内容，不会影响原内容（拷贝层级无限）

如何对一个对象实现深拷贝：

> 单层拷贝

- `Object.assign`

```js
var obj = {a: 1, b: 2}
var cloneObj = Object.assign({}, obj);

```

- `ES6 展开语法之字面量数组`

```js
var cloneArr = [...arr];
```

- `ES2018 展开语法之字面量对象`

```js
var cloneObj = {...obj};

```

> 多层拷贝

- `递归`

```js
function deepClone(obj) {
    var cloneObj = Object.prototype.toString.call(obj) === '[object Object]' ? {} : [];
    for (var key in obj) {
        if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            cloneObj[key] = deepClone(obj[key])
        } else {
            cloneObj[key] = obj[key]
        }
    }
    return cloneObj;
}

```

- `JSON.stringify`

```js
var cloneObj = JSON.parse(JSON.stringify(obj));

```

递归当对象层级过多的时候，会出现爆栈情况，那么该如何处理呢？


### 节流和防抖的作用？

### call, apply, bind 三者的区别？

### for in, forEach, for of, map 的区别？



## HTTP

### http和https的区别？

### 请求方式有哪些？

### http缓存

### 常用状态码

### TCP协议是什么？


## 安全


### XSS跨站脚本攻击是什么, 如何防范？

### CSRF跨站请求伪造是什么？

### SQL注入

### 请求劫持
