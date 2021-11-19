


`JS（Javascript）`


:fire: [收藏函数](/docs/base/js/collect)

:fire: [js小技巧](./js/technique)




## 浏览器支持类型

> 浏览器对ECMAScript标准的支持情况 [查看](https://kangax.github.io/compat-table)

* ECMAScript 3 - 所有浏览器都支持

* ECMAScript 5（ES5） - 所有现代浏览器都支持

* ECMAScript 6（ECMAScript2015 | ES6）- 大部分浏览器都支持


## JavaScript错误参考

[错误列表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors)

## JS事件大全

[传送门](https://developer.mozilla.org/zh-CN/docs/Web/Events)


## 变量声明和变量提升

> 变量声明无论在代码中哪个位置，都会在执行代码之前进行处理；其作用域为当前的执行上下文

<details open="true">

<summary>声明变量的作用域是在其声明位置的上下文中，非声明变量的作用域则是全局</summary>

```js
function test() {
    var a = 1;
    b = 2;
    console.log(a, b) // 1, 2
}
test();
console.log(a); // 抛出ReferenceError，a的作用域在test函数内
console.log(b); // 2

```
</details>

<hr>

<details open="true">

<summary>声明变量在任何代码执行前创建，非声明变量只有在赋值操作的时候才会被创建</summary>

```js
function test() {
    b = 2;
    console.log(b) // 2
}
console.log(b); // 抛出ReferenceError，b此时还未被创建
test();
console.log(d); // undefined，此时d已经被创建，但是还未赋值
console.log(b); // 2
var d = 3;
console.log(d); // 3

```
</details>

<hr>
<details open="true">

<summary>变量提升</summary>

```js
a = 1;
console.log(a); // 1
var a;

// 等价于
var a;
a = 1;
console.log(a); // 1
```
</details>

## 条件判断

<details open>

<summary>if else</summary>

```js
if (a === 1) {
    // do something
} else if (a === 2) {
    // do something
} else {
    // do something
}

```

</details>

<hr>
<details open>

<summary>switch</summary>

```js
switch(a) {
    case 1:
        // do something
        break;
    case 2:
        // do something
        break;
    default:
        // do default thing
}

```
</details>

## 循环

<details open>
<summary>for 循环</summary>

```js
for (var i = 0;  i < 10; i++) {
    if (i === 2) {
        continue;  // 中断后续代码执行，进入下一次循环
    }
    if (i === 6) {
        break;    // 中断后续代码执行并结束循环
    }
}

```
</details>

<hr>
<details open>
<summary>while 循环</summary>

```js
var a = 0;
while(a < 10) {
    // do somthing
    a ++;
}

// 与上面不同的是，如果a < 0，则上面不会执行循环内的do somthing，而下面的do则会执行一次do something
// do while 至少会执行一次do中的语句
do {
    // do something
    a ++;
} while (a < 10)

```
</details>

<hr>
<details open>
<summary>for in 循环</summary>

> 循环一个指定的变量来循环一个对象所有可枚举的属性

```js
var obj = {a: 1, b: 2}
for (var key in obj) {
    // do something
    console.log(key); // a, b
}

// for in 遍历数组的结果是数组的索引
var a = [1, 2, 3]
a.foo = 'other';
for (var key in a) {
    console.log(key); // 0, 1, 2, 'foo'
}

```
</details>

<hr>
<details open>
<summary>for of 循环</summary>

> for of语句在可迭代对象（包括Array, Map, Set, String, arguments对象等等）上创建了一个循环，对值的每一个独特属性调用一次迭代

`注意：对象是不可以用for of来循环的，因为对象内部没有实现@@iterator方法`

```js
var a = [1, 2, 3];
for (var i of a) {
    console.log(i); // 1, 2, 3
}

```
</details>


## 事件

<hr>

<details open>

<summary>阻止默认事件</summary>

```js
e.preventDefault();
```

</details>

<hr>

<details open>

<summary>事件冒泡和事件捕获</summary>

> 事件冒泡：浏览器先检查子元素，然后再检查父元素

> 事件捕获：浏览器先检查父元素，然后再检查子元素

`注意：目前现代浏览器已将两种事件行为统一为冒泡处理`

```js
// 阻止事件冒泡
e.stopPropagation();
```

</details>
<hr>
<details open>

<summary>事件委托</summary>

> 在父级元素上添加事件处理，点击子元素的时候冒泡到父级元素并执行该事件处理

```js

var parent = document.getElementById('parent');
parent.onclick = function(e) {
    // e.target代表点击触发的对应子元素
    // do something for children
}

```

</details>
<hr>

## 函数

<hr>

<details open>
<summary>参数：arguments</summary>

> 是一种对应传递给函数的参数的类数组对象

* arguments是所有函数（箭头函数除外）内部都可以使用的局部变量

* typeof arguments返回'object'

* arguments是一种类数组，除了length和索引，不拥有数组其它的特性

```js
// 如何将类数组转换为数组
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);
var args = Array.apply(null, arguments);

// ES6语法
var args = [...arguments];
var args = Array.from(arguments);

// 遍历
var args = [];
for (var i of arguments) {
    args.push(i);
}

```
</details>

<hr>
<details open>
<summary>函数形式</summary>

> 声明式函数，可以写在全局作用域的任意位置，同声明变量一样，会在代码执行前进行声明

```js
function a() {}

// 函数生成器
function* a() {}

```

> 函数表达式，当其没有函数名称时又称为匿名函数
```js

// 匿名函数
var a = function() {}

var a = function() b{}

var btn = document.getElementById('btn');
btn.onclick = function() {}

```

> 箭头函数

```js
() => {}

```

</details>


## 对象
<hr>
<details open>
<summary>创建对象</summary>

```js
var obj = {};

var obj = new Object();

// 创建一个原型为空的对象
var obj = Object.create(null);

```
</details>

<hr>
<details open>
<summary>原型和原型链</summary>

> 每个对象都有原型，以原型为模板，从原型继承属性和方法。原型对象也可能有原型，并从中继承属性和方法，一层一层，以此类推。这种关系就称为原型链

默认情况下，所有函数的原型对象`__proto__`就是window.Object.prototype

```js

// a的原型是__proto__
var a = {};

// b的原型是prototype也就是 construstor + __proto__
var b = function() {}

```
</details>

<hr>

## ECMAScript 2015（ES6）

> 浏览器支持情况，chrome >= 58、safari >= 10、Firefox >= 54

[w3school参考](https://www.w3schools.com/js/js_es6.asp#mark_forof)


- let

- const

- 箭头函数

- for/of

- Map对象

- Set对象

- Class类

- Promise

- Symbol

- 函数参数赋予默认值

- 函数参数使用扩展运算符

- String.includes()

- String.startsWith()

- String.endsWith()

- Array.from()

- Array.keys()

- Array.find()

- Array.findIndex()

- New Math Methods

    - Math.trunc()
    
    - Math.sign()
    
    - Math.cbrt()
    
    - Math.log2()
    
    - Math.log10()

- Number新增属性

    - Number.EPSILON
    
    该值为：Number大于1的所能展示的最小浮点数减去1，接近于2<sup>-52</sup>
    
    - Number.MIN_SAFE_INTEGER
    
    - Number.MAX_SAFE_INTEGER
    
- Number新增方法

    - Number.isInteger()
    
    - Number.isSafeInteger()
    
- 新增全局方法

    - isFinite()
    
    - isNaN()


## ECMAScript 2016

- 求幂运算符 `**`


```js
let x = 5;

let z = x ** 2; // result is 25

let y = Math.pow(x, 2); // result is 25

```

- 取幂赋值分配符


```js
let x = 5;

x **= 2; // x is 25;

```

- Array.includes()


```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.include("Mango") // result is true

```

## ECMAScript 2017

- String Padding（字符串补位）


```js
let x = '4';

x = x.padStart(4, 0); // x is '0004'

let y = '4'

y = y.padEnd(4, 0); // y is '4000'

```

- Object.entries()


```js
const person = {
    name: 'sneptune',
    age: '28',
    sex: 'man'
}

Object.entries(person); // [["name", "sneptune"], ["age", "28"], ["sex", "man"]]

```

- Object.values()

```js
const person = {
    name: 'sneptune',
    age: '28',
    sex: 'man'
}

Object.values(person); // ["sneptune", "28", "man"]
```

- async function

```js
async function demo() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("setTimeout done")
        }, 300)
    })
    let x = await myPromise;
    console.log(x);
}

demo(); // x is "setTimeout done"

```

## ECMAScript 2018

- 异步迭代for/of 可以使用await关键字

- Promise.finally()

- 对象扩展运算

```js
let {x, y, ...z} = {1, 2, 3, 4, 5}

x; // 1

y; // 2

z; // {3, 4, 5}

```

- 新增4种正则匹配规则




