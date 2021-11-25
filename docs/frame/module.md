

[参考文章：前端模块化——彻底搞懂AMD、CMD、ESM和CommonJS](https://www.cnblogs.com/chenwenhao/p/12153332.html)

## AMD

引入require.js，依赖前置，异步加载模块的理方式，缺点是即使有的模块没有用到，也会被提前引用

```js
// 定义 math.js
define(function () {
    var basicNum = 0;
    var add = function (x, y) {
        return x + y;
    };
    return {
        add: add,
        basicNum :basicNum
    };
});
// 使用
require(['jquery', 'math'], function($, math){
  var sum = math.add(10,20);
  $("#sum").html(sum);
});

```

## CMD

引入sea.js，依赖就近的模块化处理方式

```js
define(function(require, exports, module) {
    var a = require('./a'); //在需要时申明
    a.doSomething();
    if (false) {
        var b = require('./b');
        b.doSomething();
    }
});

// 加载模块
seajs.use(['math.js'], function(math){
    var sum = math.add(1+2);
});

```

## CommonJs

同步加载模块，一般使用module.exports定义模块，require引入模块

```js
// 定义 math.js
var basicNum = 0;
function add(a, b) {
  return a + b;
}
module.exports = { //在这里写上需要向外暴露的函数、变量
  add: add,
  basicNum: basicNum
}

// 使用
let math = require('./math.js')
math.add(2, 5);

```

## ESModule

使用export对外暴露模块，import引入模块，并且import/export 必须处于模块顶部，不能位于作用域内

```js
// 定义 math.js
export.default = { 
  add: (a, b) => {
    return a + b;
  }
 };

// 使用
import math from './math.js';
math.add(2, 5);
```


## 区别

> CommonJs和ESModule的区别

+ CommonJs是对模块的拷贝，模块内部值发生变化，不会影响引用的变化；ESModule是对模块的引用，模块内部值发生变化，会同步影响引用的变化

+ CommonJs模块是运行时加载，ESModule是编译时加载

CommonJs 示例

```js
// 定义模块 main.js
var a = 1;
setTimeout(function() {
  a = 2;
}, 200)

module.exports = {
  a
}

// 引入
var a = require('./main.js').a;
console.log(a); // 1
setTimeout(function() {
  console.log(a); // 1
}, 300)

```

ESModule 示例

```js
// 定义模块 main.js
let a = 1;
setTimeout(() => {
  a = 2;
}, 200)

export default {
  a
}

// 引入
import { a } from './main.js';
console.log(a); // 1
setTimeout(function() {
  console.log(a); // 2
}, 300)

```