
[toc]

# vue封装常用功能函数

## src/shared/util.js解析

### ```1. emptyObject```

创建一个冻结的空对象

```js
export const emptyObject = Object.freeze({})
```

### ```2. isUndef(val:any): boolean```

判断传入的值是否绝对等于undefined或者null，返回布尔值

```js
export function isUndef (v: any): boolean %checks {
  return v === undefined || v === null
}

```

### ```3. isDef(val:any): boolean```

判断传入的值是不是不绝对等于undefined，也不等于null，返回布尔值

```js
export function isDef (v: any): boolean %checks {
  return v !== undefined && v !== null
}
```

### ```4. isTrue(val:any): boolean```

判断传入的值是否绝对等于true，返回布尔值

```js
export function isTrue (v: any): boolean %checks {
  return v === true
}
```


### ```5. isFalse(val:any): boolean```

判断传入的值是否绝对等于false，返回布尔值

```js
export function isFalse (v: any): boolean %checks {
  return v === false
}
```


### ```6. isPrimitive(val:any): boolean```

通过typeof判断传入的值是string、number、symbol、boolean，返回布尔值

```js
export function isPrimitive (value: any): boolean %checks {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
```

### ```7. isObject(val:any): boolean```

判断传入的值是否不绝对等于null并且其typeof类型绝对等于'object'，返回布尔值

```js
export function isObject (obj: mixed): boolean %checks {
  return obj !== null && typeof obj === 'object'
}
```

### ```8. toRawType(value: any): string```

获取传入值的具体类型，传入的值会先被转换为字符串类似"[Object String]"，然后截取String部分返回

```js
const _toString = Object.prototype.toString

export function toRawType (value: any): string {
  return _toString.call(value).slice(8, -1)
}

```

### ```9. isPlainObject(obj: any): boolean ```

判断传入的值是否是纯对象类型，返回布尔值

```js
export function isPlainObject (obj: any): boolean {
  return _toString.call(obj) === '[object Object]'
}
```

### ```10. isRegExp(val: any): boolean```

判断传入的值是否是正则对象，返回布尔值

```js
export function isRegExp (v: any): boolean {
  return _toString.call(v) === '[object RegExp]'
}
```

### ```11. isValidArrayIndex(val: any): boolean```

判断传入的值是否是数组的索引，返回布尔值

```js
export function isValidArrayIndex (val: any): boolean {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}
```

### ```12. isPromise(val: any): boolean```

判断传入的值是否是Promise对象，返回布尔值

```js
export function isPromise (val: any): boolean {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}
```

### ```13. toString(val: any): string```

将传入的值转换为字符串类型，返回字符串

```js
export function toString (val: any): string {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}
```

### ```14. toNumber(val: string): number | string```

将传入的字符串转换为数字并返回，如果出现NaN，则返回字符串

```js
export function toNumber (val: string): number | string {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}
```

### ```15. makeMap( str: string, expectsLowerCase?: boolean ): (key: string) => true | void```

将传入的字符串用,分割，作为Map结构对象的key值，其value值为true，最终返回一个函数；

该函数参数为key值，如果map对象中有该key值，则返回true，否则返回undefined

```js
export function makeMap (
  str: string,
  expectsLowerCase?: boolean
): (key: string) => true | void {
  const map = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}

```


### ```16. isBuiltInTag(key:string): true | void```

判断传入的字符串是slot或者component，返回ture或者undefined

```js
export const isBuiltInTag = makeMap('slot,component', true)
```


### ```17. isReservedAttribute(key:string): true | void```

判断传入的字符串是否是保留属性，返回ture或者undefined

```js
export const isReservedAttribute = makeMap('key,ref,slot,slot-scope,is')
```

### ```18. remove(arr: Array<any>, item: any): Array<any> | void```

删除数组中的某一项，返回一个新的数组或者undefined

```js
export function remove (arr: Array<any>, item: any): Array<any> | void {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

```

### ```19. hasOwn(obj: Object | Array<*>, key: string): boolean```

检查对象中是否有该属性值，返回布尔值

```js
const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn (obj: Object | Array<*>, key: string): boolean {
  return hasOwnProperty.call(obj, key)
}

```

### ```20. cached<F: Function> (fn: F): F```

定义一个缓存结果的方法，返回缓存的结果或执行的结果

```js
export function cached<F: Function> (fn: F): F {
  const cache = Object.create(null)
  return (function cachedFn (str: string) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }: any)
}
```

### ```21. camelize(str: string): string =>```

使用cached缓存camelize方法，将-连接字符转换为大写字母，并将传入字符和结果进行缓存，下次调用直接读取缓存结果并返回

```js
const camelizeRE = /-(\w)/g
export const camelize = cached((str: string): string => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})
```

### ```22. capitalize(str: string): string```

将传入字符串首字母大写，并返回转换后的字符串

```js
export const capitalize = cached((str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})
```

### ```23. hyphenate```

将传入字符串大写字母转换为'-' + 小写格式，并返回转换后的字符串

```js
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cached((str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})
```

### ```24. bind(fn: Function, ctx: Object): Function```

定义bind方法，如果函数本身有bind方法则直接使用，否则重新定义bind方法

```js
function polyfillBind (fn: Function, ctx: Object): Function {
  function boundFn (a) {
    const l = arguments.length
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length
  return boundFn
}

function nativeBind (fn: Function, ctx: Object): Function {
  return fn.bind(ctx)
}

export const bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind
```

### ```25. toArray(list: any, start?: number): Array<any>```

将数组对象转换为真实数组并返回

```js
export function toArray (list: any, start?: number): Array<any> {
  start = start || 0
  let i = list.length - start
  const ret: Array<any> = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}
```

### ```26. extend(to: Object, _from: ?Object): Object```

to对象继承from对象的属性，如果key值相同，则覆盖，返回继承后的对象

```js
export function extend (to: Object, _from: ?Object): Object {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}
```

### ```27. toObject```

```js
export function toObject (arr: Array<any>): Object {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}
```

### ```28. noop```

空函数，执行任意操作

```js
export function noop (a?: any, b?: any, c?: any) {}
```

### ```29. no```

总是返回false

```js
export const no = (a?: any, b?: any, c?: any) => false
```

### ```30. identity```

总是返回相同的值

```js
export const identity = (_: any) => _
```

### ```31. genStaticKeys```

Generate a string containing static keys from compiler modules（从编译器模块中生成一个包含静态键的字符串）.

```js
export function genStaticKeys (modules: Array<ModuleOptions>): string {
  return modules.reduce((keys, m) => {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}
```

### ```32. looseEqual```

 * Check if two values are loosely equal - that is,（检查两个值是否大致相等）
 * if they are plain objects, do they have the same shape?（如果它们是普通对象，它们的属性是否相同?）

```js
export function looseEqual (a: any, b: any): boolean {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
```


### ```33. looseIndexOf(arr: Array<mixed>, val: mixed): number```

检查val是否是Array中的某一项，深度比对，如果相等则返回对应Array对应下标，否则返回-1

```js
export function looseIndexOf (arr: Array<mixed>, val: mixed): number {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) return i
  }
  return -1
}
```

### ```34. once(fn: Function): Function```

包装一个函数，只能执行一次

```js
export function once (fn: Function): Function {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
```