

# vue3项目搭建

## vue-cli搭建基础架构

[vue-cli官网](https://cli.vuejs.org/zh/)

:fire: 推荐使用vue-cli自动搭建基本配置，然后添加一些自定义配置来完成项目搭建

首先，我们来安装vue-cli

```bash
sudo yarn global add @vue/cli
```

安装完成后，查看vue版本，如果能看到 ` @vue/cli 5.0.1 `，则代表安装成功

然后我们来创建项目

```bash
vue create test-demo
```

👉 &nbsp; 提示选择模板，这里我们选择 `Manually select features`，会出现一些配置选择

我们选择 ` Babel + TypeScript + Router + Vuex + CSS Pre-processors + Linter / Formatter ` （空格选择），选择好后回车确定

👉 &nbsp; 提示vue版本选择，我们选择`3.x`，

👉 &nbsp; 提示 ` Use class-style component syntax? `，选择Y，回车确定

👉 &nbsp; 提示 `Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?` ，选择Y，回车确定

👉 &nbsp; 提示 `Use history mode for router? (Requires proper server setup for index fallback in production)`，选择Y，回车确定

👉 &nbsp; 提示 `Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default)`， 有`Sass Less Stylus` 三个选项，我们选择 `Less`，回车确定

👉 &nbsp; 提示 `Pick a linter / formatter config`，我们选择 `ESLint + Standard config`，回车确定

👉 &nbsp; 提示 `Pick additional lint features`，我们选择保存时检测 `Lint on save`，回车确定

👉 &nbsp; 提示 `Where do you prefer placing config for Babel, ESLint, etc.?`，我们选择创建相应的配置文件 `In dedicated config files`，回车确定

👉 &nbsp; 最后提示 `Save this as a preset for future projects?` 这里选择不保存本次配置 N，回车确定

然后等待项目模板自动生成...


## 移动端px适配

目前移动端的适配方案有两种

1、px转rem，用手淘的lib-flexible库（因为目前浏览器兼容性较好，该仓库也推荐使用vw适配方案）

2、px转vw，使用postcss-px-to-viewport

目前我们采用第二种方案，在项目根目录下创建postcss.config.js，

注意：因为我们上面自动构建的时候选择了 `CSS Pre-processors`，所以postcss目前默认是支持的，我们只需要进行扩展即可。如果没有默认支持，我们就需要对文件进行loader解析

```js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334 也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.wrap'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px
    }
  }
}
```










