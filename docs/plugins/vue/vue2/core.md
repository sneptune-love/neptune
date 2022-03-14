
[toc]

# core文件夹解析

## core/index.js

- 入口文件，引入Vue, initGlobalAPI, isServerRendering, FunctionalRenderContext

- 初始化 initGlobalAPI(Vue)

- 监测 Vue.prototype中的$isServer和$ssrContext

- 定义Vue.version为__VERSION__

- export Vue

### core/instance/index.js

- 引入initMixin, stateMixin, renderMixin, eventsMixin, lifecycleMixin, warn

- 定义Vue函数，函数内部调用_init方法

- 初始化Vue, initMixin(Vue), stateMixin(Vue), eventsMixin(Vue), lifecycleMixin(Vue), renderMixin(Vue)

- export Vue

#### core/instance/init.js

- 引入config, initProxy, initState, initRender, initEvents, mark, measure, initLifecycle, callHook, initProvide, initInjections, extend, mergeOptions, formatComponentName

- export 函数initMixin + 函数initInternalComponent + 函数resolveConstructorOptions, 定义函数resolveModifiedOptions

##### 导出函数initMixin介绍

- 在Vue原型上挂载_init方法，该函数只有这一个功能，其功能如下：

- Vue上绑定_uid属性，并执行++操作

- 非生产环境 + config.performance存在 + mark存在，则使用mark方法打标签 `vue-perf-start:${vm._uid}` `vue-perf-end:${vm._uid}`

- 设置Vue属性_isVue为true

- 判断options和options._isComponent是否存在，如果存在，调用函数initInternalComponent(vm, options)，初始化vm.$options；如果不存在，则调用resolveConstructorOptions(vm.constructor)进行配置合并

- 非生产环境 initProxy(vm)，生产环境 vm._renderProxy = vm

- initLifecycle(vm), initEvents(vm), initRender(vm), callHook(vm, 'beforeCreate'), initInjections(vm), initState(vm),  initProvide(vm), callHook(vm, 'created')

- 非生产环境 + config.performance存在 + mark存在，则使用mark方法再打一次结束标签，并measure统计开始标签和结束标签的时间

- 如果vm.$options.el存在，则调用vm.$mount(vm.$options.el)

##### 导出函数initInternalComponent介绍

初始化内部组件

##### 导出函数resolveConstructorOptions

##### 自定义函数resolveModifiedOptions介绍

#### core/instance/state.js

#### core/instance/render.js

#### core/instance/events.js

#### core/instance/lifecycle.js

## core/util/perf.js

- 引入inBrowser

- 暴露mark, measure两个函数,初始值都为undefined

- mark




