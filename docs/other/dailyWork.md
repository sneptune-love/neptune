
## 数据排重

给定一个任意数组，实现一个通用函数，让数组中的数据根据 key 排重：

```js

const dedup = (data, getKey = () => {} ) => {
  // todo
}
let data = [
  { id: 1, v: 1 },
  { id: 2, v: 2 },
  { id: 1, v: 1 },
];

// 以 id 作为排重 key，执行函数得到结果
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

let data1 = [
  { id: 1, v: 1, id1: 1 },
  { id: 2, v: 2, id1: 2 },
  { id: 1, v: 1, id1: 1 },
]

// 以 id 和 id1 作为排重 key，执行函数得到结果
// data1 = [
//   { id: 1, v: 1, id1: 1 },
//   { id: 2, v: 2, id1: 2 },
// ];


```

自我解析：

```js
const dedup = (data, unique) => {
    let keyMap = {};
    let newData = [];
    if (typeof unique === 'string') {
       unique = [unique];
       keyMap[unique] = []
    } else {
        unique.forEach(val => {
            keyMap[val] = []
        })
    }
    data.map(val => {
        let pushIndex = -1;
        for (var i = 0; i < unique.length; i++) {
            // 目标值不存在同样输出返回
            pushIndex = i;
            if (val.hasOwnProperty(unique[i])) {
                // 有目标key值
                if (!keyMap[unique[i]].includes(val[unique[i]])) {
                    // 目标value值不存在，进行存储
                    keyMap[unique[i]].push(val[unique[i]])
                    pushIndex = i;
                } else {
                    // 目标value值已存在，直接终止循环
                    pushIndex = -1;
                    break;
                }
            }
        }
        if (pushIndex > -1) {
            newData.push(val)
        }
    })
    return newData
}

```

测试结果

```js

// 测试用例1
const data = [
    { id: 1, v: 1 },
    { id: 2, v: 2 },
    { id: 1, v: 1 },
]

dedup(data, 'id')
// 输出 => 符合预期结果
[ { id: 1, v: 1 }, { id: 2, v: 2 } ]

// 测试用例1
const data2 = [
    { id: 1, v: 1, id1: 1 },
    { id: 2, v: 2, id1: 2 },
    { id: 1, v: 1, id1: 1 },
]

dedup(data2, ['id', 'id1'])
// 输出 => 符合预期结果
[ { id: 1, v: 1, id1: 1 }, { id: 2, v: 2, id1: 2 } ]

// 测试用例3
const data3 = [
    { id: 1, v: 1, id1: 1 },
    { id: 2, v: 2, id1: 2 },
    { id: 3, v: 1, id1: 3 },
    { id: 1, v: 1, id1: 1 },
    { id: 1, v: 1, id1: 1 },
]
dedup(data3, ['id', 'id1', 'v'])
// 输出 => 符合预期结果
[ { id: 1, v: 1, id1: 1 }, { id: 2, v: 2, id1: 2 } ]

// 测试用例4
const data4 = [
    { id: 1, v: 1, id1: 1 },
    { id: 2, v: 2, id1: 2 },
    { id: 3, v: 1, id1: 3 },
    { id: 1, v: 1, id1: 1 },
    { id: 1, v: 1, id1: 1 },
    { id: 6, v1: 1, id1: 4 }
]
dedup(data4, ['id', 'id1', 'v'])
// 输出 => 符合预期结果
[ { id: 1, v: 1, id1: 1 },
  { id: 2, v: 2, id1: 2 },
  { id: 6, v1: 1, id1: 4 } ]

```


## 对一个很长的名字数组，做分片更新名字请求

```js
/*
 * 对一个很长的名字数组，做分片更新名字请求：
 * 1. 分片里的更新是并行的，执行 changeName
 * 2. 各个分片间是串行的，执行 sleep
 * 这个函数接受三个参数，名字列表、分片数量，每次分片后的等待时间
 * 比如：
 * slicePostTask(['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh'], 2, 2000)
 * // => ['aa', 'bb']
 * waiting 2s
 * // => ['cc', 'dd']
 * waiting 2s
 * // => ['ee', 'ff']
 * waiting 2s
 * // => ['gg', 'hh']
 */

const changeName = (name) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(name), 1000)
})

const sleep = time => new Promise((resolve, reject) => {
  setTimeout(resolve, time)
})

const slicePostTask = async (names, chunkSize, time) => {
  // todo
}

```

:pencil2: 自我解析：

```js
const changeName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(name)
        console.log('request: ' + name)
    }, 1000);
  });

const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        console.log('wait: ' + time + 's')
    }, time);
  });

const slicePostTask = async (names, chunkSize, time) => {
  if (!names.length) {
      console.log('---task over---')
      return
  };
  // 获取分割切片数组，并删除原数组
  let taskNames = names.splice(0, chunkSize);
  console.log("切片：" + taskNames)
  // 并行处理切片
  await Promise.all(taskNames.map(changeName));
  // 串行执行sleep
  await sleep(time);
  // 继续执行切片分割请求
  return slicePostTask(names, chunkSize, time);
};

```
:label: 测试用例
```js

slicePostTask(["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh"], 2, 2000);

```
:white_check_mark: 输出 => 符合预期 
```js

---task start---
切片：aa,bb
request: aa
request: bb
wait: 2000s
切片：cc,dd
request: cc
request: dd
wait: 2000s
切片：ee,ff
request: ee
request: ff
wait: 2000s
切片：gg,hh
request: gg
request: hh
wait: 2000s 
---task over---

```






## 有一个嵌套层次很深的对象，key 都是 a_b 形式 ，需要改成 ab 的形式，注意不能用递归

示例：

```js
const a = {
  a_y: {
    a_z: {
      y_x: 6
    },
    b_c: 1
  }
}
// {
//   ay: {
//     az: {
//       yx: 6
//     },
//     bc: 1
//   }
// }

```

自我解析：

```js

// 非递归方法
function cloneAndFormat(obj) {
    var newObj = {};
    var arr = [
        {
            root: newObj,
            data: obj,
            key: "",
        },
    ];
    while (arr.length) {
        // 删除数组最后一项，返回删除的结果
        var cur = arr.pop();
        // 本次需要遍历的对象
        var data = cur.data;
        // 本次遍历的对象所属Key值，重新建立一个新的key来存放遍历对象的结果
        var curKey = cur.key;
        // 存储之前转换的结果
        var curRoot = cur.root;
        // 存储本次转换的结果
        var res = curRoot;
        // 为对应的Key值建立空对象Value
        if (curKey) {
            res = curRoot[curKey] = {};
        }
        for (var key in data) {
            var newKey = key.replace(/_/g, "");
            if (Object.prototype.toString.call(data[key]) === "[object Object]") {
                arr.push({
                    root: res,
                    data: data[key],
                    key: newKey,
                });
            } else {
                res[newKey] = data[key];
            }
        }
    }
    console.log(newObj)
    return newObj
}

cloneAndFormat(a)

// 输出 => 符合预期
// { ay: { bc: 1, az: { yx: 6, zd: 2 } } }

// 递归方法
function deepClone(obj) {
    var target = {};
    for (var key in obj) {
        var newKey = key.replace(/_/g, "");
        if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
            target[newKey] = deepClone(obj[key]);
        } else {
            target[newKey] = obj[key];
        }
    }
    return target;
}
deepClone(a)
// 输出 => 符合预期
// { ay: { bc: 1, az: { yx: 6, zd: 2 } } }

```




## 请实现一个大数相加函数，比如说 1111111111111111111 + 1，另请说明为什么在 JS 会存在这样的问题？

<a href="#partial-discussion-header">查看题目</a>


```JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个整数；```
```超过这个最大安全整数的运算，都可能因为发生进位溢出，造成精度丢失```

解析：

```js
function addNum(a, b) {
    var maxNum = Number.MAX_SAFE_INTEGER;
    var res;
    if (a > maxNum || b > maxNum) {
        res = (BigInt(a) + BigInt(b)).toString()
    } else {
        res =  Number(a) + Number(b)
    }
    console.log(res)
    return res
}

addNum('111111111111111111', '1') // 111111111111111112

addNum('111111', '1')   // 111112


```