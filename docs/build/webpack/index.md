



##  webpack5介绍

webpack是一个构建工具，会根据入口搭建一个依赖图，然后将项目中关联的资源打包成若干个bundle，输出到指定的目录，并将其关联关系整理好，其流程如下：

1、找到入口文件

2、根据设定的文件解析规则将文件进行解析处理

3、如果有扩展插件

## webpack安装

```js
npm install webpack webpack-cli --save-dev
```

## 配置文件解析

webpack启动的时候默认会在根目录下查找配置文件webpack.config.js

如果想指定配置文件，请在webpack命令后面追加--config xxx/webpack.config.js

配置文件遵循下面格式

```
module.exports = {}

```

下面我们来介绍一下这个配置对象里面的内容吧

### mode - 配置优化模式

```js
// 不使用任何默认优化选项
mode: 'none',
// 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development. 为模块和 chunk 启用有效的名
mode: 'development'
// 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。为模块和 chunk 启用确定性的混淆名称
mode: 'production'

```

### cache - 打包缓存

缓存生成的 webpack 模块和 chunk，来改善构建速度

cache 会在开发 模式被设置成 type: 'memory' 而且在 生产 模式 中被禁用

```js
cache: true | false,
cache: {
  // 将 cache 类型设置为内存或者文件系统
  type: 'filesystem' // string: 'memory' | 'filesystem'
},
```

### devtool - sourceMap文件生成配置

[详细配置](https://webpack.docschina.org/configuration/devtool/#devtool)

```js
// string = 'eval' false
// eval -> 每个被打包的bundle.js会被eval包裹，同时会跟随sourceUrl，指向原文件
// source-map -> 生成一个.map文件
// cheap -> 低消耗，不会包含列信息
// module -> 包含loader的sourceMap
// inline -> 生成一个base64的文件流插入在bundle.js中
devtool: false,
devtool: 'eval',
devtool: 'eval-cheap-source-map',
devtool: 'eval-cheap-module-source-map',
devtool: 'eval-source-map',
devtool: 'cheap-source-map',
devtool: 'cheap-module-source-map',
devtool: 'source-map',
devtool: 'inline-cheap-source-map',
devtool: 'inline-cheap-module-source-map',
devtool: 'inline-source-map',
devtool: 'eval-nosources-cheap-source-map',
devtool: 'eval-nosources-cheap-module-source-map',
devtool: 'eval-nosources-source-map',
devtool: 'inline-nosources-cheap-source-map',
devtool: 'inline-nosources-cheap-module-source-map',
devtool: 'inline-nosources-source-map',
devtool: 'nosources-cheap-source-map',
devtool: 'nosources-cheap-module-source-map',
devtool: 'nosources-source-map',
devtool: 'hidden-nosources-cheap-source-map',
devtool: 'hidden-nosources-cheap-module-source-map',
devtool: 'hidden-nosources-source-map',
devtool: 'hidden-cheap-source-map',
devtool: 'hidden-cheap-module-source-map',
devtool: 'hidden-source-map',
```

### devServer - 开发服务

本地开发模式

```js
devServer: {
  // 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用
  static: './dist', // boolean string [string] object [object]
  // 主机
  host: '0.0.0.0',
  // 指定监听请求的端口号
  port: 7000, // 'auto' string number
  // 启用webpack热模块替换特性
  hot: true,
  // 自动打开浏览器
  open: false, // boolean string [string] object [object]
  // 启用https服务，可自定义证书配置
  https: true, // boolean object
  // 为所有请求增加请求头
  headers: { // function object
    'X-Custom-Foo': 'bar'
  },
  // 接口代理
  proxy: {
    '/api': 'http://localhost:3000',
    '/api': {
      target: 'http://localhost:3000',
      // 默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true 以覆盖此行为
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/api': {
      target: 'https://other-server.example.com',
      // 针对无证书的https服务
      secure: false,
    },
  },
  // 提供在 webpack-dev-server 开始监听端口连接时执行自定义函数的能力
  onListening: function(devServer) { // function (devServer)
    if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

    const port = devServer.server.address().port;
    console.log('Listening on port:', port);
  },
  // 启用gzip 压缩
  compress: true, // boolean = true
  // 客户端配置
  client: {
    // 允许在浏览器中设置日志级别，例如在重载之前，在一个错误之前或者 热模块替换 启用时
    logging: '', // 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
    // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
    overlay: true, // boolean = true object: { errors boolean = true, warnings boolean = true }
    // 在浏览器中以百分比显示编译进度
    progress: true, // boolean
    // 该配置项允许我们为客户端单独选择当前的 devServer 传输模式，或者提供自定义的客户端实现。这允许指定浏览器或其他客户端与 devServer 的通信方式
    webSocketTransport: '', // 'ws' | 'sockjs' string
    // 这个选项允许指定 URL 到 web socket 服务器
    webSocketURL: '', // string object
  },
  // 为 webpack-dev-middleware 提供处理 webpack 资源的配置项
  devMiddleware: {
    // ...
  },
  // historyApi配置
  historyApiFallback: false, // boolean = false object
  // 路由模式匹配webpack输出文件，例如/main -> /main.js
  magicHtml: true, // boolean = true
  // 提供服务器内部在所有其他中间件之后执行 自定义中间件的能力
  onAfterSetupMiddleware: function() { // function (devServer)
    // ...
  },
  // 提供在服务器内部执行所有其他中间件之前执行自定义中间件的能力
  onBeforeSetupMiddleware: function() { // function (devServer)
    // ...
  },
  // 监听文件变化
  watchFiles: [''], // string [string] object [object]
  // 该配置项允许我们选择当前的 web-socket 服务器或者提供自定义的 web-socket 服务器实现。当前默认模式为'ws'
  webSocketServer: 'ws', // false | 'sockjs' | 'ws' string function object
},

```

### entry - 入口

String类型 | Array类型，
  
```js
// 单入口
entry: './a.js',
// 多入口
entry: ['./a.js', './b.js']
// 多入口，指定入口名称 -- 在配置output的filename时，可以通过[name]来获取该入口名称
entry: {
  entryA: './a.js',
  entryB: './b.js'
}

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

[webpack5官方中文文档-resolve](https://webpack.docschina.org/configuration/resolve/#resolve)

```js
resolve: {
  // 别名路径配置
  `alias`: {
    Utilities: path.resolve(__dirname, 'src/utilities/'),
    Templates: path.resolve(__dirname, 'src/templates/'),
  },
  // 指定一个字段，例如 browser，根据此规范进行解析
  `aliasFields`: [''], // [string]: ['browser']
  // 如果是 true，将不允许无扩展名文件
  `enforceExtension`: false, // boolean = false
  // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀
  // 注意：会覆盖默认扩展，使用...来访问默认扩展
  `extensions`: ['', '...'], // [string] = ['.js', '.json', '.wasm']
  // 当从 npm 包中导入模块时，此选项将决定在 package.json 中使用哪个字段导入模块。
  `mainFields`: [''], // [string]
  // 告诉 webpack 解析模块时应该搜索的目录。
  `modules`: [''], // [string] = ['node_modules']
  // 启用，会主动缓存模块，但并不安全。传递 true 将缓存一切。
  `unsafeCache`: false, // RegExp [RegExp] boolean: true
  // 额外的解析插件列表
  `plugins`: [
    new DirectoryNamedWebpackPlugin()
  ], // // [Plugin]
  // 当启用此选项时，webpack 更倾向于将模块请求解析为相对请求，而不使用来自 node_modules 目录下的模块。
  `preferRelative`: true, // boolean
  // 解析时，首选的绝对路径为 resolve.roots。
  `preferAbsolute`: true, // boolean
  // 解析限制列表，用于限制可以解析请求的路径。
  `restrictions`: [''], // [string, RegExp]
  // 配置以/开头的请求路径
  `roots`: [''], // [string]
  // 配置引入依赖解析规则
  `importsFields`: [''], // [string]
  // 通过 module 请求类型来配置 resolve 选项
  `byDependency`: {
    esm: {
      mainFields: ['browser', 'module'],
    },
    commonjs: {
      aliasFields: ['browser'],
    },
    url: {
      preferRelative: true,
    },
  }
}

```

### plugins - 扩展插件

```js
const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
  // 打包进度条展示
  new ProgressBarPlugin({
    format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
  })
  // 打包体积分析，默认配置会自动创建一个服务，并打开浏览器
  new BundleAnalyzerPlugin()
]

```

### optimization - 配置优化

```js
optimization: {
  // 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle
  minimize: true, // boolean = true
  // 允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)
  minimizer: '', // [TerserPlugin] 或 [function (compiler)]
  // 将 optimization.runtimeChunk 设置为 true 或 'multiple'，会为每个入口添加一个只含有 runtime 的额外 chunk
  runtimeChunk: true, // 其值为object string boolean
  // 编译时每当有错误时，就会 emit asset。这样可以确保出错的 asset 被 emit 出来。关键错误会被 emit 到生成的代码中，并会在运行时报错
  emitOnErrors: true , // boolean = false
  // 告知 webpack 当选择module id 时需要使用哪种算法
  moduleIds: '',  // boolean: false string: 'natural'(按使用顺序的数字 id) | 'named'(对调试更友好的可读的 id) | 'deterministic'(被哈希转化成的小位数值模块名) | 'size'(专注于让初始下载包大小更小的数字 id)
  // 告知 webpack 当选择chunk id 时需要使用哪种算法
  chunkIds: '', // boolean = false string: 'natural' | 'named' | 'size' | 'total-size'(专注于让总下载包大小更小的数字 id) | 'deterministic'
  // 告知 webpack 将 process.env.NODE_ENV 设置为一个给定字符串
  nodeEnv: '', // boolean = false string
  // 在设置为 true 时，告知 webpack 通过将导入修改为更短的字符串，来减少 WASM 大小。这会破坏模块和导出名称
  mangleWasmImports: false, // boolean = false
  // 如果模块已经包含在所有父级模块中，告知 webpack 从 chunk 中检测出这些模块，或移除这些模块。将 optimization.removeAvailableModules 设置为 true 以启用这项优化。在 生产 模式 中默认会被开启
  removeAvailableModules: false, // boolean = false
  // 如果 chunk 为空，告知 webpack 检测或移除这些 chunk。将 optimization.removeEmptyChunks 设置为 false 以禁用这项优化
  removeEmptyChunks: true, // boolean = true
  // 告知 webpack 合并含有相同模块的 chunk。将 optimization.mergeDuplicateChunks 设置为 false 以禁用这项优化
  mergeDuplicateChunks: true, // boolean = true
  // 告知 webpack 确定和标记出作为其他 chunk 子集的那些 chunk，其方式是在已经加载过较大的 chunk 之后，就不再去加载这些 chunk 子集。optimization.flagIncludedChunks 默认会在 生产 模式 中启用，其他情况禁用
  flagIncludedChunks: false, // boolean
  // 告知 webpack 去确定那些由模块提供的导出内容，为 export * from ... 生成更多高效的代码。默认 optimization.providedExports 会被启用
  providedExports: false, // boolean
  // 告知 webpack 去决定每个模块使用的导出内容
  usedExports: true, // boolean = true string: 'global'
  // 告知 webpack 去寻找模块图形中的片段，哪些是可以安全地被合并到单一模块中
  concatenateModules: true, // boolean
  // 告知 webpack 去辨识 package.json 中的 副作用 标记或规则，以跳过那些当导出不被使用且被标记不包含副作用的模块
  sideEffects: true, // boolean = true string: 'flag'
  // 告知 webpack 生成带有相对路径的记录(records)使得可以移动上下文目录
  portableRecords: false, // boolean
  // 允许控制导出处理
  mangleExports: false, // boolean string: 'deterministic' | 'size'
  // 告知 webpack 是否对未使用的导出内容，实施内部图形分析(graph analysis)
  innerGraph: true, // boolean = true
  // 添加额外的哈希编译，如果设置为false，则采用内部数据来进行哈希计算
  realContentHash: true, // boolean = true
  // 分离公用的chunk配置，下面这个配置时splitChunksPlugin的默认行为
  splitChunks: {
    // all代表所有，async代表异步，initial代表同步；同时chunks也可以是一个函数
    chunks: 'async',
    // 返回false代表不分离name为my-excluded-chunk的chunk
    chunks(chunk) {
      return chunk.name !== 'my-excluded-chunk';
    },
    // 生成 chunk 的最小体积，20000bytes ~= 20keb
    minSize: 20000,
    // 拆分后剩余的单个chunk最小体积大小
    minRemainingSize: 0,
    // 拆分前必须共享模块的最小 chunks 数
    minChunks: 1,
    // 按需加载时的最大并行请求数
    maxAsyncRequests: 30,
    // 入口点的最大并行请求数
    maxInitialRequests: 30,
    // 强制执行拆分的体积阈值和其他限制（minRemainingSize，maxAsyncRequests，maxInitialRequests）将被忽略
    enforceSizeThreshold: 50000,
    // 缓存组配置，可继承和覆盖上面的任何选项，比如chunks、minSize等
    cacheGroups: {
      defaultVendors: {
        // 匹配规则，[\\/]兼容不同机型的写法
        test: /[\\/]node_modules[\\/]/,
        // 优先级比，值越大，优先级越高，默认组的优先级为负值，自定义组的优先级为0
        priority: -10,
        // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      }
    }
  },
}

```

