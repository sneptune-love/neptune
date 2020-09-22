
更新时间：{docsify-updated}

# Node版本管理工具 n


## 全局安装

```bash
sudo npm i n -g

```

## 帮助命令

```bash

n --help || n -h
```

## 查看Node可用版本

```bash
n list || n ls

```

## 安装稳定版本Node

```bash
sudo n stable || sudo n lts

```

## 安装最新版本Node

```bash
sudo n latest

```

## 安装指定版本Node
```bash
sudo n 11.0.0

```

## 安装完成后查看Node版本
```bash
node --version || node -v

```

## Node版本切换

使用n安装过的每个node版本都会被存储，因此你可以在这些版本中进行切换

```bash
n    // 输入n回车即可出现安装过的版本列表，上下选择版本，回车确定版本

```

<img src="./static/screenshot/WX20200504-164515@2x.png" alt="" style="width: 600px;">

## 指定Node版本执行脚本

```
n use 11.0.0 test.js

```

## 删除某个版本

```bash
n rm 11.0.0
```