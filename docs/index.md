

更新时间：{docsify-updated}

## 简述

```javascript
window.$docsify = {
  alias: {
    '/foo/(+*)': '/bar/$1', // supports regexp
    '/zh-cn/changelog': '/changelog',
    '/changelog':
      'https://raw.githubusercontent.com/docsifyjs/docsify/master/CHANGELOG',
    '/.*/_sidebar.md': '/_sidebar.md', // See #301
  },
};

```


```javascript
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: {
                title: "首页"
            },
            component: resolve => require(["@/components/Home"], resolve)
        }
    ]
})


```


## 关于

## 感悟

## 术语