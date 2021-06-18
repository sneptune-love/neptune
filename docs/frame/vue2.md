
更新时间：{docsify-updated}

# Vue源码解析

## package.json文件解析

[package.json文件解析](./package)

## 静态配置文件

[静态配置文件](./config)

## 封装基础函数解析

[封装基础函数解析 src/shared/util.js](./util)


## 流程解析

### src/platforms/web/entry-runtime-with-compiler.js

1. 引入Vue文件，

2. 定义Vue.prototype.$mount函数

3. Vue定义compile方法


```非生产环境抛出异常提示 --- el挂载元素不能是body或者html，更换其他正常元素```

```Do not mount Vue to <html> or <body> - mount to normal elements instead.```


```js
import Vue from './runtime/index'

Vue.prototype.$mount = ...
Vue.compile = ...
```

#### src/platforms/web/runtime/index.js

1. 引入Vue文件

2. Vue.config上绑定五个方法mustUseProp、isReservedTag、isReservedAttr、getTagNamespace、isUnknownElement，用于元素标签筛选

3. 扩展Vue.options.directives和扩展Vue.options.components

4. Vue原型挂载__patch__属性

5. 定义Vue.prototype.$mount函数，函数内部实现三个生命周期函数```beforeMount```，```beforeUpdate```，```mounted```

    - 将el赋值到vm.$el
    
    - callHook(vm, 'beforeMount')
    
    - 

<details>

```js
    ...
    callHook(vm, 'beforeMount')
    ...
    new Watcher(vm, updateComponent, noop, {
        before () {
            if (vm._isMounted && !vm._isDestroyed) {
                callHook(vm, 'beforeUpdate')
            }
        }
    }, true /* isRenderWatcher */)
    ...
    if (vm.$vnode == null) {
        vm._isMounted = true
        callHook(vm, 'mounted')
    }

```
</details>

6. 控制台输出Devtools开发工具提示 + 开发环境提示信息


```js
import Vue from 'core/index'
import { mountComponent } from 'core/instance/lifecycle'

Vue.prototype.$mount
Vue.config.mustUseProp = mustUseProp
Vue.config.isReservedTag = isReservedTag
Vue.config.isReservedAttr = isReservedAttr
Vue.config.getTagNamespace = getTagNamespace
Vue.config.isUnknownElement = isUnknownElement
extend(Vue.options.directives, platformDirectives)
extend(Vue.options.components, platformComponents)
Vue.prototype.__patch__ = inBrowser ? patch : noop
Vue.prototype.$mount = function() {
    ...
    return mountComponent(this, el, hydrating)
}


console[console.info ? 'info' : 'log'](
    'Download the Vue Devtools extension for a better development experience:\n' +
    'https://github.com/vuejs/vue-devtools'
)

console[console.info ? 'info' : 'log'](
    `You are running Vue in development mode.\n` +
    `Make sure to turn on production mode when deploying for production.\n` +
    `See more tips at https://vuejs.org/guide/deployment.html`
)

```

##### src/core/index.js

1. 引入Vue

2. 初始化全局API

    - 对Vue.config进行监听，非生产环境替换config将抛出warn警告
    
    - 暴露Vue.util、Vue.set、Vue.delete、Vue.nextTick、Vue.observable、Vue.options
    
        - options中定义components、directives、filters三个空对象，_base值为Vue
        
    - initUse(Vue) -- 暴露Vue.use方法
    
    - initMixin(Vue) -- 暴露Vue.mixin方法
    
    - initExtend(Vue) -- 暴露Vue.extend方法
    
    - initAssetRegisters(Vue) -- 暴露Vue.component、Vue.directive、Vue.filter方法
    

<details>

```js
Object.defineProperty(Vue, 'config', configDef)
Vue.util = ...
Vue.set = ...
Vue.delete = ...
Vue.nextTick = ...
Vue.observable = ...
Vue.options.components = Object.create(null) 
Vue.options.directive = Object.create(null) 
Vue.options.filter = Object.create(null)
extend(Vue.options.components, builtInComponents)
initUse(Vue)
initMixin(Vue)
initExtend(Vue)
initAssetRegisters(Vue)
```

</details>

3. 监听Vue.prototype上三个属性$isServer、$ssrContext、FunctionalRenderContext

4. Vue定义version属性


```js
initGlobalAPI(Vue)
    
Object.defineProperty(Vue.prototype, '$isServer', {...})
Object.defineProperty(Vue.prototype, '$ssrContext', {...})
Object.defineProperty(Vue.prototype, 'FunctionalRenderContext', {...})
Vue.version = '__VERSION__'
    
```

######  src/core/instance/index.js

1. 定义Vue函数

<details>

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

```

</details>

2. 使用五个方法对Vue函数进行初始化。initMixin、stateMixin、eventsMixin、lifecycleMixin、renderMixin

- initMixin(Vue)，Vue原型挂载_init方法

    - vm增加_uid、_isVue属性，
    
    - 将Vue传入的option合并至vm.$options
    
    - initLifecycle(vm) -- vm定义初始属性$parent、$root、$children、$refs、_watcher、_inactive、_directactive、_isMounted、_isDestroyed、_isBeingDestroyed
    
    - initEvents(vm) -- vm定义初始属性_events、_hasHookEvent
    
    - initRender(vm) 
    
        - vm定义初始属性_vnode、_staticTrees、$slots、$scopedSlots、_c、$createElement
        
        - 对vm.$attrs和vm.$listeners进行监听
        
    - 创建```beforeCreate```生命周期
        
    - initInjections(vm) -- 初始化注入对象vm.$options.inject

    - initState(vm)
    
        - 定义vm._watchers
        
        - 初始化```vm.$options.props```，```vm.$options.methods```，```vm.$options.data```，```vm.$options.computed```，```vm.$options.watch```
    
    - initProvide(vm) -- 初始化provide函数内部指向vm
    
    - 创建```created```生命周期
    
    - 如果el存在，则调用vm.$mount进行挂载

<details>

```js
Vue.prototype._init = function() {
    ... 
    vm._uid
    vm._isVue
    vm.$options
    vm._renderProxy
    vm._self
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm)
    initState(vm)
    initProvide(vm)
    callHook(vm, 'created')
    vm.$mount(vm.$options.el)
}
   

```

</details>

- stateMixin(Vue)

    - 在Vue原型上挂载$data和$props并开启监听
    
    - 在Vue原型上挂载$set，$delete，$watch


<details>

```js
Object.defineProperty(Vue.prototype, '$data', dataDef)
Object.defineProperty(Vue.prototype, '$props', propsDef)
Vue.prototype.$set
Vue.prototype.$delete
Vue.prototype.$watch

```

</details>

- eventsMixin(Vue)

    - 在Vue原型上挂载$on、$once、$off、$emit四个函数方法

<details>

```js
Vue.prototype.$on
Vue.prototype.$once
Vue.prototype.$off
Vue.prototype.$emit

```

</details>

- lifecycleMixin(Vue)

    - 在Vue原型上挂载_update、$forceUpdate、$destroy三个函数方法
    
    - $destroy内部触发```beforeDestroy```和```destroyed```生命周期

<details>

```js
Vue.prototype._update
Vue.prototype.$forceUpdate
Vue.prototype.$destroy

```

</details>

- renderMixin(Vue)

    - 在Vue原型上挂载一系列缩写函数方法_o、_n、_s、_l、_t、_q、_i、_m、_f、_k、_b、_v、_e、_u、_g、_d、_p

    - 在Vue原型上挂载$nextTick、_render两个函数方法

<details>

```js
installRenderHelpers(Vue.prototype)
    target._o = markOnce
    target._n = toNumber
    target._s = toString
    target._l = renderList
    target._t = renderSlot
    target._q = looseEqual
    target._i = looseIndexOf
    target._m = renderStatic
    target._f = resolveFilter
    target._k = checkKeyCodes
    target._b = bindObjectProps
    target._v = createTextVNode
    target._e = createEmptyVNode
    target._u = resolveScopedSlots
    target._g = bindObjectListeners
    target._d = bindDynamicKeys
    target._p = prependModifier
Vue.prototype.$nextTick
Vue.prototype._render
    vm.$scopedSlots
    vm.$vnode

```

</details>


```js

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

```






















