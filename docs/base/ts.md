
更新时间：{docsify-updated}

# TS

## 基础类型

### 1. 布尔值boolean
```js
    let a: boolean = true
```

### 2. 数字number
```js
    let a: number = 1
```

### 3. 字符串string
```js
    let a: string = 'a'
```

### 4. 数组Array
```js
    // 第一种方式
    let a: number[] = [1, 2]
    // 第二种方式
    let a: Array<number> = [1, 2]
```

### 5. 元组Tuple
```js
    let a: [number, string] = [1, 'a']
```

### 6. 枚举enum
```js
    enum Color = { Green, Red, Yellow }
    let a: Color = Color.Green
```

### 7. 任意类型Any
```js
    let a: any
    a = 1
    a = 'a'
    a = []
    ...
```

### 8. 没有类型Void
```js
    function a(): void {
        ...
    }
```

### 9. Null和Undefined

```null和undefined是所有类型的子类型，如果指定了strictNullChecks标记，那么就只能赋值给null和undefined类型```

### 10. 永远不存在的值类型Never

```js
// 返回nerver的函数必须存在无法到的达终点
function error(message): nerver {
    return new Error(message)
}
// 推断的返回值为nerver类型
function fali(message): nerver {
    return error('something failed')
}
// 返回nerver的函数必须存在无法到的达终点
function infiniteLoop(): nerver {
    while(true) {
        
    }
}
```

### 11. 非原始类型Object

> 除number, string, boolean, symbol, null和undefined之外的类型

```js
declare function create(o: object | null): void

create({a: 1})

create(null)

```

## 变量声明

## 接口

## 类

## 函数

## 泛型

## 枚举

## 类型推论

## 类型兼容性

## 高级类型

## Symbols

## 迭代器和生成器

## 模块

## 命名空间

## 命名空间和模块

## 模块解析

## 声明合并

## JSX

## 装饰器

## Mixins

## 三斜线指令

## Javascript文件类型检查