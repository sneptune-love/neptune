const dedup = (data, unique) => {
    let keyMap = {};
    let newData = [];
    if (typeof unique === "string") {
        unique = [unique];
        keyMap[unique] = [];
    } else {
        unique.forEach((val) => {
            keyMap[val] = [];
        });
    }
    data.map((val) => {
        let pushIndex = -1;
        for (var i = 0; i < unique.length; i++) {
            // 目标值不存在同样输出返回
            pushIndex = i;
            if (val.hasOwnProperty(unique[i])) {
                // 有目标key值
                if (!keyMap[unique[i]].includes(val[unique[i]])) {
                    // 目标value值不存在，进行存储
                    keyMap[unique[i]].push(val[unique[i]]);
                    pushIndex = i;
                } else {
                    // 目标value值已存在，直接终止循环
                    pushIndex = -1;
                    break;
                }
            }
        }
        if (pushIndex > -1) {
            newData.push(val);
        }
    });
    return newData;
};

const data = [
    { id: 1, v: 1 },
    { id: 2, v: 2 },
    { id: 1, v: 1 },
];

// console.log(dedup(data, 'id'));

const data2 = [
    { id: 1, v: 1, id1: 1 },
    { id: 2, v: 2, id1: 2 },
    { id: 1, v: 1, id1: 1 },
];
// console.log(dedup(data2, ['id', 'id1']))

const data3 = [
    { id: 1, v: 1, id1: 1 },
    { id: 2, v: 2, id1: 2 },
    { id: 3, v: 1, id1: 3 },
    { id: 1, v: 1, id1: 1 },
    { id: 1, v: 1, id1: 1 },
];

// console.log(dedup(data3, ['id', 'id1', 'v']))

const data4 = [
    { id: 1, v: 1, id1: 1 },
    { id: 2, v: 2, id1: 2 },
    { id: 3, v: 1, id1: 3 },
    { id: 1, v: 1, id1: 1 },
    { id: 1, v: 1, id1: 1 },
    { id: 6, v1: 1, id1: 4 },
];

// console.log(dedup(data4, ['id', 'id1', 'v']))

const changeName = (name) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
            console.log("request: " + name);
        }, 1000);
    });

const sleep = (time) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("wait: " + time + "s");
        }, time);
    });

const slicePostTask = async (names, chunkSize, time) => {
    if (!names.length) {
        console.log("---task over---");
        return;
    }
    // 获取分割切片数组，并删除原数组
    let taskNames = names.splice(0, chunkSize);
    console.log("切片：" + taskNames);
    // 并行处理切片
    await Promise.all(taskNames.map(changeName));
    // 串行执行sleep
    await sleep(time);
    // 继续执行切片分割请求
    return slicePostTask(names, chunkSize, time);
};

// slicePostTask(["aa", "bb", "cc", "dd", "ee", "ff", "gg"], 2, 2000);

let list1 = [1, 2, 3, 4];
let list2 = [5, 6, 7, 8, 3, 1, 9];

let newList = [];

if (list1.length > list2.length) {
    newList = list2.filter((val) => list1.includes(val));
} else {
    newList = list1.filter((val) => list2.includes(val));
}
// console.log(newList)

const a = {
    a_y: {
        a_z: {
            y_x: 6,
            z_d: 2
        },
        b_c: 1,
    }
};

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

// console.log(deepClone(a))

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

// cloneAndFormat(a);

function addNum(a, b) {
    var maxNum = Number.MAX_SAFE_INTEGER;
    if (a > maxNum || b > maxNum) {
        return (BigInt(a) + BigInt(b)).toString()
    } else {
        return  Number(a) + Number(b)
    }
}

// addNum('111111111111111111', '1')

// addNum('111111', '1')
