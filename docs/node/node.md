

`推荐使用nvm来进行node版本管理`

## n和nvm的区别

 n 是 node 的一个模块，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

由于 npm 安装的模块路径均为 /usr/local/lib/node_modules，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求


## Node版本管理工具 n
### 

```bash
# 全局安装
sudo npm i n -g
# 帮助命令
n --help || n -h
# 查看Node可用版本
n list || n ls
# 安装稳定版本Node
sudo n stable || sudo n lts
# 安装最新版本Node
sudo n latest
# 安装指定版本Node
sudo n 11.0.0
# 安装完成后查看Node版本
node --version || node -v
# Node版本切换，输入n回车即可出现安装过的版本列表，上下选择版本，回车确定版本
n
# 指定Node版本执行脚本
n use 11.0.0 test.js
# 删除某个版本
n rm 11.0.0
```

<img src="./static/screenshot/WX20200504-164515@2x.png" alt="" style="width: 600px;">

## node版本管理工具nvm

[nvm](https://github.com/nvm-sh/nvm)

> 安装命令：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

> 使用方法：

```bash
// 查看node版本
nvm ls
// 安装node版本
nvm install v12.6.0
// 选择node版本
nvm use v12.6.0
```