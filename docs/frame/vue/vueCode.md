
更新时间：{docsify-updated}

[toc]

# Vue源码解析

## [package.json文件解析](./package)

## [静态配置文件](./config)

## [封装基础函数解析 src/shared/util.js](./util)

## [src/compiler文件夹解析](./compiler)

## [src/core文件夹解析](./core)

## [src/platforms文件夹解析](./platforms)

## [src/server文件夹解析](./server)

## [src/sfc文件夹解析](./sfc)

## 初始化流程解析

### 入口文件: src/core/index.js

### 入口文件: src/platform/web/entry-runtime.js -> runtime/index.js

    引入Vue, 原型挂载$mount


### 创建Vue对象，调用_init方法

    initMixin、stateMixin、eventsMixin、lifecycleMixin、renderMixin 对Vue对象进行属性和方法的添加

#### initMixin(Vue)

    在Vue原型prototype上挂载_init方法
    
        Options处理
        
        initLifecycle(vm)  
        
            在Vue上增加$parent、$root、$children、$refs、 _watcher、 _inactive、 _directInactive、 _isMounted、 _isDestroyed、 _isBeingDestroyed属性
        
        initEvents(vm)  
        
            事件添加, 移除, 一次性事件
            
        initRender(vm)
        
            $vnode, $slots, $scopedSlots, $createElement, $attrs, $listeners
            
        callHook(vm, 'beforeCreate')
        
            添加beforeCreate hook
            
        initInjections(vm)
        
            注入options.inject, 并对注入的属性进行监听
            
        initState(vm)
        
            初始化props, methods, data, computed, watch
            
            初始化provide, 改变this指向
            
        callHook(vm, 'created')
        
            添加created hook
            
        $mount挂载el元素
        
    
#### stateMixin(Vue)

    监听$data, $props
    
    原型挂载$set, $delete, $watch
    
    
#### eventsMixin(Vue)

    原型挂载 $on, $once, $off, $emit

    
#### lifecycleMixin(Vue)

    原型挂载 _update, $forceUpdate, $destroy(callHook(vm, 'beforeDestroy'), callHook(vm, 'destroyed'))

    
#### renderMixin(Vue)

    原型挂载 $nextTick, _render, 
    

    ASSET_TYPES = [
        'component',
        'directive',
        'filter'
    ]
    
    // 生命周期
    LIFECYCLE_HOOKS = [
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeUpdate',
        'updated',
        'beforeDestroy',
        'destroyed',
        'activated',
        'deactivated',
        'errorCaptured',
        'serverPrefetch'
    ]


