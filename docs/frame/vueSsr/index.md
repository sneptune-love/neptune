
# Vue服务端渲染SSR

## 介绍

Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。

服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。

## 为什么要使用SSR？

与目前客户端渲染相比，有如下优势

- 更好的SEO体验，搜索爬虫引擎可捕获完整的页面结构，提升网站的收录和排名
- 更快的内容到达时间，即渲染速度快，减少首页加载时间，提升用户体验

当然有优势就必然有其复杂的地方

- 开发条件限制，需要浏览器执行的代码需要遵循服务端渲染提供的生命周期规则，一些插件则需要特殊的处理，才能使用
- 构建设置和部署更为复杂，服务端渲染应用程序必须处于node.js server运行环境
- 服务器负载会更高，对服务器的知识了解要求高

<p style="color: red;">所以是否使用服务端渲染需要根据自身业务来决定！</p>

## 开始使用SSR

##### 安装相关依赖

> 安装vue, vue-server-renderer -- 用于服务端组件渲染开发

    npm install vue vue-server-renderer --save
    
> 安装express，用于服务端服务开发

    npm install express --save
    
##### 生命周期

服务端可执行的生命周期和客户端有所不同，仅有beforeCreate和created会在服务端渲染过程中使用，其它的生命周期比如beforeMount和mounted，则在客户端执行

在服务端使用生命周期过程中，要注意不要产生副作用的code，比如定时器；因为SSR期间并不会调用销毁生命周期钩子。

##### 访问特定平台API

服务端渲染过程中无法使用window, document等浏览器特定API，对于它们可以在客户端的生命周期函数中惰性访问它们

##### 实例创建

在创建实例的时候我们要注意服务端的区别，Node.js服务时一个长期运行的过程，如果每次访问的时候都创建一个实例，那么这些请求则会共享实例，造成交叉请求污染，所以我们在创建实例的时候，我们应该功过工厂函数返回一个新的跟Vue实例，这样就不会有交叉污染的情况了。同样的，router，store等的实例也是如此，需要注意⚠️

    import Vue from 'vue'
    import App from './App.vue'
    
    // 导出一个工厂函数，用于创建新的
    // 应用程序、router 和 store 实例
    export function createApp () {
      const app = new Vue({
        // 根实例简单的渲染应用程序组件。
        render: h => h(App)
      })
      return { app }
    }

##### 客户端激活

服务端渲染最重要的一个环节就是客户端激活， Vue 在浏览器端接管由服务端发送的静态 HTML，使其变为由 Vue 管理的动态 DOM，这是用户交互必备的步骤。

在客户端入口文件entry-client.js中定义：

    import { createApp } from './app.js';
    
    const { app } = createApp();
    
    app.$mount('#app');

    
服务端渲染结果中出现data-server-rendered的值为true即代表激活成功

##### 构建配置

服务器配置：用于服务端渲染配置，主要用于预加载资源以及服务定义

以下是部分服务定义配置：

        backendRouter.get('/index', (ctx, next) => {
            renderer.renderToString((err, html) => {
                if (err) {
                  console.error(err);
                  ctx.status = 500;
                  ctx.body = '服务器内部错误';
                } else {
                  console.log(html);
                  ctx.status = 200;
                  ctx.body = html;
                }
            });
        });

客户端配置：用户客户端激活后的配置，主要用户客户端应用程序交互

    <html>
      <head>
        <!-- 用于当前渲染的 chunk 会被资源预加载(preload) -->
        <link rel="preload" href="/manifest.js" as="script">
        <link rel="preload" href="/main.js" as="script">
        <link rel="preload" href="/0.js" as="script">
        <!-- 未用到的异步 chunk 会被数据预取(prefetch)（次要优先级） -->
        <link rel="prefetch" href="/1.js" as="script">
      </head>
      <body>
        <!-- 应用程序内容 -->
        <div data-server-rendered="true"><div>async</div></div>
        <!-- manifest chunk 优先 -->
        <script src="/manifest.js"></script>
        <!-- 在主 chunk 之前注入异步 chunk -->
        <script src="/0.js"></script>
        <script src="/main.js"></script>
      </body>
    </html>

##### 非Node环境下使用

2.5版本以前是只能在Node环境下使用，2.5+后则支持在PHP V8Js 或者 Oracle Nashorn中使用，但是在使用过程中还需结合一些其它配置来实现服务端渲染

---
