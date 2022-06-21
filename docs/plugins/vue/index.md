


[vue2.x 运行解析](./vue2/note)

[使用cli搭建一个vue3.x 移动端项目](./vue3/index)

[vue中的使用技巧](./vue-info)

## Vue相关信息


## Vue2.x官方文档

[传送门](https://cn.vuejs.org/)

## Vue3.x官方文档

[传送门](https://vue3js.cn/)

## 问题汇总

### 生命周期执行顺序是什么？

- 实例初始化后，数据观测和事件配置之前  beforeCreate 

- 数据观测和事件配置之后，实例被挂载之前 created 

- 实例被挂载之前，render函数首次调用后 beforeMount 

- 实例被挂在之后  mounted

- 组件更新 beforeUpdate -> updated

- 缓存组件激活 activated

- 缓存组件停用 deactivated

- 实例销毁前 beforeDestroy 

- 实例销毁后 destoryed

- 捕获子孙组件错误 errorCaptured

### 组件内的data为什么是函数？

- 根实例data可以是对象也可以是函数

- 组件实例data必须是函数，其目的是防止多个组件实例之间共用一个data，产生数据污染，采用函数方式，初始化的时候会返回一个全新的data对象


### created和mounted的区别？

created生命周期阶段实例未被挂载，无法获取相关dom元素，但是可以访问data

mounted生命周期阶段实例已被挂载，可以获取相关dom元素

### nextTick实现原理？

setTimeout异步延时处理

### key的作用？

保证dom元素的唯一性，在数据重新渲染时可以避免重构过程