
更新时间：{docsify-updated}


## 配置文件解析

### mode

开发模式 | 生产模式

```js
mode: 'production',
mode: 'development'

```

### entry

String类型 | Array类型，
  
```js
entry: './a.js',
entry: ['./a.js', './b.js']

```

### output

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

### devtool

```js
devtool: false,
devtool: 'inline-source-map',

```

### devServer

本地开发模式

```js
devServer: {
  static: './dist',
  host: '0.0.0.0',
  port: 7000
},

```

### module

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

### plugins

```js
plugins: [
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
  new HtmlWebpackPlugin({
    title: '测试demo'
  })
],

```

### optimization

配置优化