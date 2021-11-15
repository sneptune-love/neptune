


## 基础类型

1. boolean
```js
    let a: boolean = true
```

2. number
```js
    let a: number = 1
```

3. string
```js
    let a: string = 'a'
```

4. Array
```js
    // 第一种方式
    let a: number[] = [1, 2]
    // 第二种方式
    let a: Array<number> = [1, 2]
```

5. 元组Tuple
```js
    let a: [number, string] = [1, 'a']
```

6. 枚举enum
```js
    enum Color = { Green, Red, Yellow }
    let a: Color = Color.Green
```

7. 任意类型Any
```js
    let a: any
    a = 1
    a = 'a'
    a = []
    ...
```

8. 没有类型Void
```js
    function a(): void {
        ...
    }
```

9. Null和Undefined

```null和undefined是所有类型的子类型，如果指定了strictNullChecks标记，那么就只能赋值给null和undefined类型```

10. 永远不存在的值类型Never

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

11. 非原始类型Object

> 除number, string, boolean, symbol, null和undefined之外的类型

```js
declare function create(o: object | null): void

create({a: 1})

create(null)

```

## 变量声明

> 推荐使用let和const来进行变量声明

<hr>

> 解构

```js
// 数组解构
let input = [1, 2, 3, 4, 5]
let [a, b, ...c] = input;

a; // 1
b; // 2
c; [3, 4, 5]

// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let {a, b, ...d} = o;
a; // "foo"
b; // 12
d; // {c: "bar"}

```
<hr>

> 属性重命名

```js
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

let {a: aNew, b: bNew} = o;

aNew; // "foo"
bNew; //  12

```

<hr>

> 展开

```js
let input = [1, 2, 3];
let other = [...input, 4]; // [1, 2, 3, 4]

let obj = {a: 1, b: 2};
let objNew = {...obj, b: 3}; // {a: 1, b: 3}
let objNew2 = {b: 3, ...obj}; // {a: 1, b: 2}

```


## 接口

`interface用法，用于检测对象，数组，函数，类等类型检查`

> 基础属性检测

```js
interface doConfig = {
    width: number,
    color: string
}
// 可选属性
interface doConfig = {
    width?: number,
    color: string
}

// 只读属性
interface doConfig = {
    readonly width: number,
    readonly color: string
}

// 只读数组
let testArray: ReadonlyArray<number> = [1, 2, 3]
testArray[0]; // 1
testArray[0] = 2; // error

// 检测对象部分属性
interface doConfig = {
    width?: number;
    color?: string;
    [propName: string]: any; 
}

```

> 函数类型：检测函数参数和返回值类型

```js
interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    console.log(result)
    return result > -1;
}

mySearch('4423', '2')

```

> 数组索引，对象key值类型检测

```js

// 约束数组索引
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["1", "2"]

myArray[1] = '2';
myArray[1] = 2;     // error
myArray['a'] = '2'; // error

// 约束对象key值
interface NumberObject {
    [key: string]: number;
}

let myObject: NumberObject = {
    a: 1
}

myObject['b'] = 2;
myObject['c'] = '1'; // error
myObject[4] = 1;    // error

```

> Class类 类型检测

```js
// 检测类中hour，minute属性，tick方法
interface ClockInterface {
    hour: number,
    minute: number,
    tick(): void;
}

// 检测clock中是否有tick函数
class testClock implements ClockInterface {
    hour: number;
    minute: number;
    constructor(hour: number, minute: number) {
        this.hour = hour;
        this.minute = minute;
    };
    tick(): any {
        console.log(this.hour, this.minute);
    }
}


let doFunc = new testClock(12, 10)

doFunc.tick();   // 12, 10

```

> 类型检查继承

```js
interface ColorInterface {
    color: string
}
interface AgeInterface {
    age: number
}

interface UserInterface extends ColorInterface, AgeInterface {
    sex: string
}

let people: UserInterface =  {
    color: 'red',
    age: 12,
    sex: '男'
}

// 当接口继承了一个拥有保护或者私有成员的类时，这个接口只能被该类或者子类实现
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

```

## 类

> 继承

如果派生类中有构造器，那么必须在构造器中调用`super()`执行基类构造函数

```js
// 父类
class Father {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
    showName() {
       console.log(this.name); 
    }
}
// 子类
class childOne extends Father {
    constructor(name: string) {
        super(name);
    }
    showFatherName() {
        super.showName()
    }
}

let a = new Father('father');
a.showName(); // father

let b = new childOne('children');
b.showFatherName(); // children


```

> 类中成员修饰符

- `public` 类中的成员默认都是public

- `private` 当成员被标记为private时，就不能在声明它的类的外部访问，即使派生类中，也无法访问该成员

```js
class Father {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class childOne extends Father {
    constructor(name: string) {
        super(name);
    }
    showFatherName() {
       console.log(this.name);
    }
}

let a = new Father('test').name; // error, name是私有的，外部不能访问

let b = new childOne('test');

b.showFatherName(); // error，无法访问name，若没有private，则可以访问

```

- `protected` 当成员被标记为protected时，就不能在声明它的类的外部访问，但是派生类中可以访问

- `readonly` 只读修饰符，当属性被标记为readonly时，只能在声明或者构造器里对其初始化

- `static` 静态属性，当我们使用static标记类中的成员时，访问该成员需要在前面加上类名

```js
class demo {
    static sex: string;
    showName() {
        demo.sex = 'test';
        
        console.log(demo.sex);
    }
}

let a = new demo();

a.showName(); // 'test'

```

> 抽象类 abstract

-  抽象类无法被实例化，子类可以被实例化

- 抽象类方法，子类必须实现


```js
// 定义抽象类，该类无法被实例化
abstract class parent {
    showName() {
        console.log('parent');
    }
    // 定义抽象类方法，派生类中必须实现该方法
    abstract showAge(): void;
}

class children extends parent {
    showAge() {
        console.log('children abstract method')
    }
    showSex() {
        console.log('c2 sex is 女');
    }
}

let p = new parent();   // error，不能创建一个抽象类的实例
let c1 = new children();
c1.showAge(); // 'children abstract method'
c1.showName(); // 'parent'
c1.showSex(); // 'c2 sex is 女'

class childrenTwo extends parent {
    showSex() {
        console.log('c2 sex is 女');
    }
}

let c2 = new children(); // error, 派生类中未实现定义的抽象类方法

```


## 函数

> 定义函数参数和返回值类型

```js

function addFn(a: number, b: number): number {
    return a + b;
}

// b参数可选
function addFn(a: number, b?: number): number {
    return a + (b || 0);
}

// a参数赋予默认值
function addFn(a = 1, b: number): number {
    return a + b;
}


```


## 泛型

```js
function demo<T>(arg: T): T {
    console.log(arg);
    return arg;
}
demo<string>('demo'); // demo，定义T类型
demo('demo'); // demo，编译器通过传入参数定义T类型
demo(1); // 1

```

## 类型推论

```js
let x = 1;  // 类型推论会认为x是number类型

x = '1'; // error, 此时x已经被认定为number类型，所以赋值字符串会报错

```



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