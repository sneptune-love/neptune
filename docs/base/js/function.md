

# 防抖函数（debounce）

> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

```重点在清零clearTimeout(timer)```

使用场景：

- 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
- 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
- 文本编辑器实时保存，当无任何更改操作一秒后进行保存

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

window.onscroll = debounce(function() {
    console.log('scroll event);
}, 500)


```

# 节流函数(throttle)

> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

```重点在开锁和关锁```

```js

function throttle(fn, wait) {
    var timer;
    return function() {
        var _this = this;
        if (timer) return;
        setTimeout(function() {
            fn.apply(_this, arguments)
            timer = null;
        }, wait)
    }
}


```

