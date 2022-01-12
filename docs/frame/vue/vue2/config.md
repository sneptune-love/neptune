
# vue 静态配置文件解析

## shared/constants.js

- ```SSR_ATTR```（SSR服务端渲染属性）

- ```ASSET_TYPES```（组件，指令，过滤类型名称）

- ```LIFECYCLE_HOOKS```（生命周期钩子函数名称）

```js
export const SSR_ATTR = 'data-server-rendered'

export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]
export const LIFECYCLE_HOOKS = [
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

```

## 