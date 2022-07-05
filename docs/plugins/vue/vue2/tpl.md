

[vue2-template](https://github.com/sneptune-love/vue2-template)

# vue2移动端项目搭建

<strong>

本项目模板使用vue-cli生成

自带router，sass语法支持，autoprefixer样式前缀添加，eslint校验

后续增加了pre-commit校验 + px2rem语法转换

</strong>

## 开始

默认你已经安装了vue-cli>=3的版本，这个时间需要安装一下桥接工具，才能安装vue2项目模板

```bash
npm install -g @vue/cli-init

vue init webpack vue2-template

```

## 引入lib-flexible进行移动端rem适配

```
yarn add lib-flexible -S
```

同时在 `main.js`中引入

```js
import 'lib-flexible'
```

## 引入px2rem-loader进行px转换

安装px2rem-loader

```bash
yarn add px2rem-loader -D
```

修改 `build/utils.js` 文件

```js

exports.cssLoaders = {
  // ...
  // 定义 px2rem-loader
   const px2remLoader = {
    loader: 'px2rem-loader',
    // 默认remUnit为75，所以无需再次设置
    // options: {
    //   remUnit: 75
    // }
  } 
  // 修改 generateLoaders 函数，将该loader加入进去
  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader, px2remLoader]
    if (options.usePostCSS) {
      loaders.push(postcssLoader)
    }
    // ...
  }
}

```

## 增加pre-commit校验

[同vue3模板搭建一致](/docs/plugins/vue/vue3/tpl?id=commit检测提交)





