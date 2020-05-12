
# commander命令行

> [commander传送门](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)

## 安装

```bash
 npm i commander

```

## 使用

### arguments

> 指定参数语法，通过.arguments来为最顶级命令指定参数

```js
const program = require('commander')

program
    .arguments('<cmd>[env]')

```

### usage

> 使用说明

```
program
    .usage('<path> [options]')

```

### option

> 参数选项配置

- '-d, --debug': 标识，挂载在commander对象上， '--debug-abc'则会被转换为驼峰法, program.debugAbc

- 'output extra debugging': 标识解释说明

- 'default': 默认值，选填

```js
program.option('-d, --debug', 'output extra debugging'， 'default')

```

每个option定义的选项都会被挂载在program上，成为它的一个属性

### requireOption

> 必须的选项，未定义选项值则会有异常抛出

```js
program
    .requireOption('-c, --cheese <type>', 'pizza must have cheese')
```

### action

### parse

> 命令行参数解析

```js
program
    .parse(process.argv)
```

### version

> 版本命令，vesion()会处理显示版本命令，默认选项标识为-V和--version

```js
program
    .version('0.0.1')
// 自定义
program
    .version('0.0.1', '-v, --vers', 'output the current version')
```

### help

> 自动化帮助信息

举个例子如下

```js
program
    .version('0.0.1')
    .arguments('<path>')
    .usage('<path> [options]')
    .parse(process.argv)

```


```bash
Usage: vs <path> [options]

Options:
  -V, --version  output the version number
  -h, --help     display help for command

```

> 自定义帮助

在.parse之前调用
```js
program
    .on('--help', () => {
        console.log('')
        console.log('$ custom-help --help)
    })

```

```bash
Usage: vs <path> [options]

Options:
  -V, --version  output the version number
  -h, --help     display help for command
  
  $ custom-help --help

```