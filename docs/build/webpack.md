
更新时间：{docsify-updated}


##  webpack介绍

webpack是一个构建工具，会根据入口搭建一个依赖图，然后将项目中关联的资源打包成若干个bundle，输出到指定的目录，并将其关联关系整理好，其流程如下：

1、找到入口文件

2、根据设定的文件解析规则将文件进行解析处理

3、如果有扩展插件

## webpack安装

```js
npm install webpack webpack-cli --save-dev
```

## 配置文件解析

### mode - 打包模式

开发模式 | 生产模式

```js
mode: 'production',
mode: 'development'

```

### devtool - 开发工具

```js
devtool: false,
devtool: 'inline-source-map',

```

### devServer - 开发服务

本地开发模式

```js
devServer: {
  static: './dist',
  host: '0.0.0.0',
  port: 7000
},

```

### entry - 入口

String类型 | Array类型，
  
```js
// 单入口
entry: './a.js',
// 多入口
entry: ['./a.js', './b.js']

```

### output - 输出

String类型 | Function类型
  
```js
output: {
  filename: '[name].bundle.js',
  filename: '[id].bundle.js',
  filename: '[contenthash].bundle.js',
  filename: '[hash].bundle.js',
  filename: (pathData) => {
    console.log(pathData);
    return pathData.chunk.name === 'main' ? '[name].bundle.js' : 'js/[name].bundle.js'
  },
}
```





### module - 模块

- rules - 规则
  
- loader - 文件解析

- parser - 配置所有解析器的选项
  
- noParse - 防止 webpack 解析那些任何与给定正则表达式相匹配的文件
  
- unsafeCache - 缓存模块请求的解析

```js
// 模块配置
module: {
  rules: [
    // css文件编译配置
    {
      test: /\.css$/i,
      // use: ['style-loader', 'css-loader'],
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    // 图片编译配置
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    // 字体文件编译配置
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    // csv表格文件处理
    {
      test: /\.(csv|tsv)$/i,
      use: ['csv-loader'],
    },
    // xml文件处理
    {
      test: /\.xml$/i,
      use: ['xml-loader'],
    },
    // json文件可以直接导入引用
  ],
},

```

### resolve - 配置模块如何解析

### plugins - 扩展插件

```js
plugins: [
  // css文件抽离和压缩
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
  // 配置html文件
  new HtmlWebpackPlugin({
    title: '测试demo'
  })
],

```

### optimization - 配置优化

