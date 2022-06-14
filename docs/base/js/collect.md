

## 收藏JS方法

### URL参数获取(getQuery)

<details open>
<summary>实现方法</summary>

```js

function getQuery(key) {
  if (location.href.indexOf('?') == -1) {
    return '';
  }
  var search = location.href.split('?')[1];
  var arr = search.split('&');
  var res = '';
  for (var i = 0; i < arr.length; i++) {
    var valArr = arr[i].split('=');
    if (valArr[0] == key) {
      res = valArr[1];
      break;
    }
  }
  return decodeURIComponent(res);
}

```
</details>


### 参数拼接(queryConcatString)

<details open>
<summary>实现方法</summary>

```js
function queryConcatString(obj) {
  var str = '';
  if (JSON.stringify(obj) == '{}') return str;
  for (var key in obj) {
    str += (key + '=' + obj[key] + '&')
  }
  str = str.slice(0, str.length - 1)
  return str;
}

```
</details>

### 深度克隆(deepClone)

> 下文方法只针对多层对象结构，递归处理

<details open>
<summary>实现方法</summary>

```js
function deepClone(obj) {
  var newObj = {};
  for (var key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

```

</details>

### 防抖函数(debounce)

> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

```重点在清零clearTimeout(timer)```

使用场景：

- 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
- 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
- 文本编辑器实时保存，当无任何更改操作一秒后进行保存

<details open>
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

window.onscroll = debounce(function() {
    console.log('scroll event);
}, 500)


```

</details>

### 节流函数(throttle)

> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

```重点在开锁和关锁```
<details open>
<summary>实现方法</summary>

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

</details>

### 函数只执行一次(once)

<details open>
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

### 删除数组中某一项(removeArrayItem)

<details open>
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

### 重复某个字符串N次(repeatStr)

> 时间复杂度O(logN)

<details open>
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


### 倒计时(cutdownClass)

> 适用场景：单个或者多个倒计时

建议：单页面应用切换时，清理掉倒计时

<details open>
  <summary>实现方法</summary>

```js

class cutdownClass {
  // 参数初始化
  constructor(num, time, callback, overCallback) {
    this.num = num || 0
    this.time = time || 1000
    this.callback = callback || function () {}
    this.overCallback = overCallback || function () {}
    this.timer = null;
  }
  // 倒计时 -- 时，分，秒
  setTimeHMS(num, timer, callback, backOver) {
    this.timer = setTimeout(() => {
      if (this.num > 0) {
        var obj = {};
        var hours = parseInt(this.num / 60 / 60);
        obj.hours = hours > 9 ? hours : "0" + hours;
        var minutes = parseInt(this.num / 60 % 60);
        obj.minutes = minutes > 9 ? minutes : "0" + minutes;
        var seconds = parseInt(this.num % 60);
        obj.seconds = seconds;

        this.num -= 1;
        this.callback(obj);
        this.setTimeHMS(this.num, timer, callback, backOver);
      } else {
          backOver();
      }
    }, timer)
  }
  // 倒计时 -- 天，时，分
  setTimeDHM(num, timer, callback, backOver) {
    this.timer = setTimeout(() => {
      if (num > 0) {
        var obj = {};
        var day = parseInt(num / 60 / 60 / 24);
        obj.day = day > 9 ? day : "0" + day;
        var hours = parseInt(num / 60 / 60 % 24);
        obj.hours = hours > 9 ? hours : "0" + hours;
        var minutes = parseInt(num / 60 % 60);
        obj.minutes = minutes > 9 ? minutes : "0" + minutes;
        num -= 1;
        callback(obj);
        this.setTimeDHM(num, timer, callback, backOver);
      } else {
        backOver();
      }
    }, timer)
  }
  // 清除倒计时
  clearTimer() {
    clearTimeout(this.timer);
  }
}

```

</details>

### 日期格式化(formatDate)

> 适用场景：时间戳转换为各种格式

注意：new Date(str)，str中如果包含-，ios系统会转换为undefined，建议使用/替代


<details open>
  <summary>实现方法</summary>

```js
function formatDate(date = new Date(), fmt = 'yyyy-MM-dd HH:mm:ss') {
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  var formatOption = {
    'y': date.getFullYear(), // 年份，注意必须用getFullYear
    'M': date.getMonth() + 1, // 月份，注意是从0-11
    'd': date.getDate(), // 日期
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'w': date.getDay(), // 星期，注意是0-6
    'H': date.getHours(), // 24小时制
    'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
    'm': date.getMinutes(), // 分钟
    's': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  };
  var week = ['日', '一', '二', '三', '四', '五', '六'];
  for (var i in formatOption) {
    fmt = fmt.replace(new RegExp(i + '+', 'g'), function (m) {
      var val = formatOption[i] + '';
      if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
      for (var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
      return m.length == 1 ? val : val.substring(val.length - m.length);
    });
  }
  return fmt;
}

```
</details>




### 