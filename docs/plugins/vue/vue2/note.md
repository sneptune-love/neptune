

note


vue version 2.6.12


`入口文件 - 引用Vue`

> Vue函数 内部实现

1、定义一个Vue函数，当用户在非生产环境并且未使用new来实例vue时，抛出一个异常warn `Vue is a constructor and should be called with the `new` keyword`

2、在Vue原型上挂载_init方法

3、在Vue原型上挂载$data、$props对象，并开启监听

4、在Vue原型上挂载$set、$delete、$watch函数方法

5、在Vue原型上挂载$on、$once、$off、$emit函数方法

6、在Vue原型上挂载_update、$forceUpdate、$destroy函数方法

7、在Vue原型上挂载$nextTick、_render函数方法


> 对Vue进行扩展

  - 在Vue上创建set、delete、nextTick、observable属性函数
  
  - 创建Vue.options空对象，并在其中创建components、directives、filters空对象属性
  
  - 在Vue上创建use、mixin、extend、component、directive、filter属性函数

  - 在Vue原型上挂载$mount函数方法
  

`开始使用Vue`

> new Vue实例的时候执行_init函数方法，其作用如下

 - 插入beforeCreate钩子

 - 初始化props、methods、data、computed、watch

 - 插入created钩子

 - 如果el元素存在，则执行$mount方法进行挂载
 

> $mount中进行的操作，其作用如下

  - 插入beforeMount钩子
  
  - 创建vNode，渲染dom
  
  - 使用Watcher监听组件更新，并插入beforeUpdate钩子
  
  - 插入mounted钩子
 
 
 创建vNode时，会比对新老Vnode节点，如果发生变化
 
  - 先触发beforeDestroy钩子
  
  - 移除老Vnode节点，并触发destroyed钩子
  
与此同时，如果A节点有keep-alive包裹，从A->B则发生如下变化

  - A节点中触发deactivated钩子
  
再次从B->A时

  - A节点触发activate钩子
 
 
 errorCaptured捕获场景
 
  - 进行render渲染时发生错误，会抛出异常，并标明错误来源 'render' 'renderError'
  
  - 初始化data数据时发生错误，会抛出异常，并标明错误来源 'data()'
  
  - watch钩子中声明一个对象属性，该对象中有immediate属性并为true，在执行该对象中的handle方法时，发生错误，会抛出异常，并标明错误来源 'callback for immediate watcher ...'
  
  - 监视器Watcher类中获取value值，若果发生错误，会抛出异常，并标明错误来源 'getter for watcher ...'
  
  - 监视器Watcher类中执行run方法，若发生错误，会抛出异常，并标明错误来源 'callback for watcher ...'
  
  - 钩子函数如果是Promise，发生错误，会抛出异常，并标明错误来源 '... (Promise/async)'
  
  - 执行nextTick回调时发生错误，会抛出异常，并标明错误来源 'nextTick'
  
  - 绑定在指定上的钩子函数发生错误时，会抛出异常，并标明错误来源 'directive ... hook'
  
  
` errorCaptured捕获的所有异常都会上传至全局捕获errorHandler中 `
  
  
  
 
 