


# 收藏Js

## 防抖函数 debounce - 执行最后一个函数

<details>

<summary>实现方法</summary>

```js
function debounce(fn, wait) {
    var timer;
    return function() {
        var _this = this;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            fn.apply(_this, arguments)
        }, wait)
    }
}
```
</details>

## 节流函数 throttle - 执行第一个函数

<details>
<summary>实现方法</summary>

```js
function throttle(fn, wait) {
    var timer;
    return function() {
        var _this = this;
        timer = setTimeout(function() {
            fn.apply(_this, arguments)
            clearTimeout(timer)
        }, wait)
    }
}
```
</details>

## 函数只执行一次 once

<details>
<summary>实现方法</summary>

```js
function once (fn) {
    let called = false
    return function () {
        if (!called) {
            called = true
            fn.apply(this, arguments)
        }
    }
}

function test() {
    console.log(1);
}

function test2() {
    console.log(2);
}

var a = once(test);

var c = once(test2);

a(); // 1

a(); // 无输出

c(); // 2

c(); // 无输出  

```
</details>

## 删除数组中某一项 removeArrayItem

<details>
<summary>实现方法</summary>

```js
function removeArrayItem(array, item) {
    if (array.length > 0) {
        var index = array.indexOf(item);
        if (index > -1) {
            return array.splice(index, 1)
        }
    }
}
```
</details>

## 重复某个字符串N次repeatStr(时间复杂度O(logN))

<details>
<summary>实现方法</summary>

```js
function repeat (str, n) {
  let result = ''
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) result += str
      n >>>= 1
      if (n <= 0) break
      str += str
    }
  }
  return result
}

```
</details>