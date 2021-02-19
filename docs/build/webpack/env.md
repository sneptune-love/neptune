
更新时间：{docsify-updated}

# 项目环境变量配置

> 前提： 项目使用webpack搭建

> 目的：创建对应的环境变量文件，不同环境读取不同的配置，并应用到代码中

- 方式一：[cross-env](https://github.com/kentcdodds/cross-env#readme)

以命令行的方式设置环境变量


- 方式二：[dotenv](https://github.com/motdotla/dotenv#readme)

读取配置文件来设置环境变量

-----

那么接下来讲述的就是咱自己研究的一个小功能

# envSet

> 功能：命令行参数设置环境，根据该参数读取对应创建的配置文件，在webpack中将其配置好，在项目代码中进行适用

## 1、创建环境配置文件

创建三个环境配置文件，.env.dev, .env.test, .env.prod -- 内容格式如下（PS：建几个都可以，根据你实际需求来）

```
SP_BASE_URL=localhost
NODE_ENV=prod
```

注意：左边是key值，右边是value值，key值起名要注意不要与process.env本身的属性冲突

## 2、创建envSet文件，内容如下

```js

const path = require('path');

// 命令行参数解析
const minimist = require('minimist');

// 获取.env.xxx文件配置内容
const dotenv = require('dotenv');

// process.env对象属性设置
const dotenvExpand = require('dotenv-expand')


const envSet = {
    
    envData: {},
    
    initEnv() {
        
        this.getEnvData();
        
        this.setProcessEnv();
        
        return this.formatEnvData(this.envData.parsed);
    },
    
    // 设置process.env属性
    setProcessEnv() {

        if (this.envData.error) {
            throw rel.error
            process.exit(1);
        }
        
        dotenvExpand(this.envData);
        
    },
    // 获取.env.xxx文件配置内容
    getEnvData() {
        
        const rawArgv = process.argv.slice(2);
        
        const args = minimist(rawArgv);

        const mode = args.mid || 'dev';
        
        this.envData =  dotenv.config({path: path.resolve(process.cwd(), `./build/.env.${mode}`)});

    },
    formatEnvData(data) {
        const envData = {};
        Object.keys(data).forEach(key => {
            envData['process.env.' + key] = JSON.stringify(data[key]);
          });
        return envData;
    }
}

module.exports = envSet;

```

## 3、修改webpack.base.conf.js文件



```js
// 引入配置文件数据
const envData = require('./envSet.js').initEnv();

// 在plugins中加入

...
    plugins: [
        new webpack.DefinePlugin(envData)
    ]

```

## 4、修改package.json中命令行参数

由于dev-server 本身有对--mode参数的解析，所以咱们换个名字mid，进行咱们的解析

```json
 "scripts": {
    "dev": "webpack-dev-server --inline --progress --config ./build/webpack.dev.conf.js --mid dev",
    "test": "webpack-dev-server --inline --progress --config ./build/webpack.dev.conf.js --mid test",
    "build": "webpack --config ./build/webpack.prod.conf.js --mid prod"
  }

```

## 5、最后一步，在你的项目中愉快的使用.env.xxx配置的内容吧！
