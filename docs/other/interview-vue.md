
更新时间：{docsify-updated}

## Vue

### Vue的双向数据绑定是什么意思？

其实就是v-model的用法，用户可以通过网页上输入操作来改变data的值，同时也可以通过改变data来影响页面的展示

模拟实现：

```html
<input :value="name" @input="name = $event.target.value"  />

```

### MVC，MVP，MVVM

- MVC(Model，View，Controller) - 一般来说通信是单向的
- MVP(Model，View，Present) - View和Present，Present和Model之间都是双向联系，View不与Model产生联系
- MVVM(Model，View，ViewModel) - ViewModel和Model之间是双向通信的

### Vue中的data什么情况下是一个函数？

在组件中声明data的时候必须是一个函数，否则在组件多次调用的情况下，会出现数据混乱的问题

如果是一个函数，则每次调用都会返回一个新的对象，避免了数据混乱的问题

但是如果是在vue根实例中，则可以是一个对象，因为只存在一个根实例

### Vue生命周期理解

> 自动执行的生命周期

- `beforeCreate` - 组件内部的事件和生命周期函数已经初始化完成，无法访问data和dom
- `created` - 组件注入的属性和方法已经初始化完成，可以访问data，无法访问dom
- `beforeMount` - 组件模板编译已经完成，但是未完成el的挂载
- `mounted` - 组件渲染完成后执行，此时已完成了el的挂载，可以访问data和通过$ref来访问dom
- `beforeDestroy` - 组件卸载前执行，此时仍然可以访问实例中的属性和方法
- `destroyed` - 组件卸载完成后执行，此时不能访问该实例

> 触发执行

- `beforeUpdate` - 当data中的数据发生改变时触发此钩子，此时还未进行其他相应动作
- `updated` - 当data中的数据发生改变，此时虚拟dom预渲染和比对已经完成
- `activated` - 被keep-alive缓存的组件激活时调用
- `deactivated` - 被keep-alive缓存的组件停用时调用

### $nextTick是干什么的？

提供一种钩子函数，在数据data发生变化引起dom更新后对dom进行自定义操作，其兼容实现方式有四种，排在前面的优先级最高

- promise.then() - 微任务

```js
// callback需要执行的回调函数
let p = Promise.resolve();
p.then(callback);

```

- MutationObserver - 微任务

```js
let observer = new MutationObserver(callback);

let counter = 1;
let textNode = document.createTextNode(String(counter));

observer.observe(textNode, {
    characterData: true // 监视指定目标节点或者子节点树中所包含的字符数据变化
})

```

- setImmediate - 属于宏任务

该方法用来把一些需要长时间运行的操作放在一个回调函数里面，在浏览器执行完其它语句后，立即执行这个回调函数


```js
setImmediate(callback)

```

- setTimeout - 宏任务

### v-for中的key值作用？

key是给vnode增加一个唯一标识，便于在oldVNode和newVnode比对时，快速找到对应的节点，节省查找时间

### v-for和v-if的优先级

如果v-for和v-if同时出现在一个元素节点上，那么会先执行v-for，然后再执行v-if；这种操作并不推荐，更好的办法是在外层增加一个template，将v-if放在template上


### v-show和v-if的区别

- v-show其实就是在节点上添加样式display: none；应用于高频切换场景
- v-if是将节点直接从dom中移除；适用于低频操作场景


### Vue3.0为什么采用proxy，抛弃了Object.defineProperty？

- defineProperty无法响应通过数组下标更改元素；
- defineProperty只能劫持对象的属性；
- defineProperty无法响应新增的对象属性；
- proxy则是对整个对象进行代理，从而实现基本操作的拦截和自定义


### 父子组件的生命周期钩子执行顺序

- 父组件：beforeCreate, created, beforeMount
- 子组件：beforeCreate, created, beforeMount, mounted
- 父组件：mounted



