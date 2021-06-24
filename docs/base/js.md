
更新时间：{docsify-updated}

`JS（Javascript）`


## 浏览器支持类型

> 浏览器对ECMAScript标准的支持情况 [查看](https://kangax.github.io/compat-table)

* ECMAScript 3 - 所有浏览器都支持

* ECMAScript 5（ES5） - 所有现代浏览器都支持

* ECMAScript 6（ECMAScript2015 | ES6）- 大部分浏览器都支持


## JavaScript错误参考

[错误列表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors)


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



