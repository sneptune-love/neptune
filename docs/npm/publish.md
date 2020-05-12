
# npm发布新包

- 拥有自己的git项目

- npm源设置为 http://registry.npmjs.org/

- npm adduser || npm login 添加作者信息，这个地方使用的是npm官网的账号，便于你找到自己的发布的包

- npm whoami  查看登录用户

- npm publish 发布你的项目至Npm官方，每次更新时注意修改版本号，才能重新发布



# 全局命令

需要你再package.json文件中加入bin配置，如下所示

```json
"bin": {
    "vs": "./bin/vs"
  }

```

在你全局安装这个包的时候，vs就是你的全局命令，执行的文件就是./bin/vs命令