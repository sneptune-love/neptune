

# git

[git中文文档](https://git-scm.com/book/zh/v2)

## git基本命令介绍


### `git clone`

> 仓库克隆，支持http，https，ssh等协议

其中ssh协议需要将本机的公钥存放在git上，才能与git建立链接；http/https协议则是需要密码验证

`语法：git clone [仓库地址] [本地目录名称]`

```bash
// vueGit目录名称可以省略，默认会创建vue目录
git clone https://github.com/vuejs/vue.git vueGit

```


### `git remote`

> 远端主机

```bash
// 查看所有远端主机
git remote

// 查看所有远端主机地址
git remote -v

// 查看指定远端主机详细信息
git remote show [主机名/origin]

// 添加远端主机
git remote add [主机名] [网址] / git remote add origin https://github.com/vuejs/vue.git

// 删除指定远端主机
git remote rm [主机名] / git remote rm origin-test

// 修改远端主机名
git remote rename [原主机名] [新主机名] / git remote rename origin-test origin-test2
```


### `git add`

> 添加文件到暂存区

```bash
// 添加指定文件
git add fileName

// 添加当前路径下的所有文件
git add .

```

### `git status`

> 查看变更状态

```bash
// 查看某个文件的状态
git status fileName

// 查看所有文件状态
git status

```

### `git commit`

> 将暂存区文件提交至本地仓库

```bash
// 提交暂存区指定文件
git commit -m '注释' fileName

// 提交所有暂存区文件
git commit -m '注释'

```

### `git branch`

> 分支创建、删除，以及分支的追踪管理

```bash
// 创建分支
git branch <name>

// 删除分支
git branch -d <name>

// 查看本地所有分支
git branch

// 查看远端分支
git branch -r

// 查看本地和远端所有分支
git branch -a

// 手动创建追踪关系
git branch --set-stream master origin master

```

### `git checkout`

> 分支切换

```bash
// 切换分支
git checkout <name>

// 创建并切换分支
git checkout -b <name>

```

### `git merge`

> 分支合并

```bash
// 将<name>分支合并至当前分支
git merge  <name>

```

### `git fetch`

> 拉取远端仓库的更新

`语法：git fetch [远端主机] [远端分支]`

```bash
// 更新远端所有分支的更新
git fetch

// 更新origin远端指定分支master的更新
git fetch origin master
```

### `git pull`

> 获取远端最新分支并与指定的分支合并，相当于先执行一次git fetch，然后再执行git merge

`语法：git pull [远程主机名] [远端分支]:[本地分支]`

```bash
// 从远端获取最新至本地，自动merge，默认追踪与当前分支同名的远端分支
git pull

// 获取远端next分支并合并至本地master分支
git pull origin next:master

// 获取远端next分支合并至本地next分支
git pull origin next

// 手动建立追踪关系
git branch --set-upstream master origin/master

```

### `git push`

> 推送本地仓库的变更

`语法：git push [远程主机名] [本地分支]:[远程分支]`

```bash
// 将本地仓库的修改推送至远端仓库
git push origin master -> 追踪关系绑定后，可省略为 git push

// 删除远端分支，即推送一个空分支至远端
git push origin :master == git push origin --delete master

// 标签推送，默认不会推送标签
git push origin --tags

```

### `git log`

> 日志查看

### `git reflog`

> 精简日志查看

### `git reset`

> 版本回退

```bash
git reset <commit-id > --hard

```

### `git config`

> 配置文件

```bash
// 查看git config配置，按q退出
git config --list
```

### `git tag`

> 标签管理

```bash
// 创建标签
git tag <tagname>
// 查看所有标签
git tag
// 为某次提交创建指定标签
git tag <tagname> commitId
// 删除指定ID标签
git tag -d tagid
```

### `git show`

> 查看命令操作

```bash
// 查看文件的修改的历史提交记录
git show commitId
// 查看指定标签具体内容
git show <tagname>

```

## 项目中的.git目录解析

`.git目录下的具体分类：`

```
- hooks/: 默认的hook脚本
- info/: 项目指定忽略的文件信息 + 远端ref记录
- logs/: 提交commit记录
- objects/: git对象库 + 包含标签信息
- config: 项目的配置信息
- description: 项目的描述信息
- HEAD: 指向当前分支的一个提交

```

## 全局配置文件解析

`全局配置文件：/etc/gitconfig`

`用户全局配置文件：~/.gitconfig`

`项目配置文件：project/.git/config`

```
[core]
  # 配置忽略文件
  excludesfile = /Users/hujiang/.gitignore_global
  # cr(回车符)和lf(换行符)格式化，windows中使用cr和lf来结束一行，mac中使用lf来结束，为了解决兼容问题，开启此功能，git会再提交时将cr和lf转换为lf，检出时将lf转换为cr和lf
  autocrlf = false
  # 压缩等级-1到9，0 - 代表不压缩
  compression = 0
  
# diff工具，sourcetree自动添加此配置
[difftool "sourcetree"]
  cmd = opendiff \"$LOCAL\" \"$REMOTE\"
  
# 合并工具，sourcetree自动添加此配置
[mergetool "sourcetree"]
  cmd = /Applications/Sourcetree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
  trustExitCode = true
  

[user]
  # 用户信息配置
  name = 胡江
  email = 13697136064@139.com

[commit]
  # 提交信息时使用的模板文件
  template = /Users/hujiang/.stCommitMsg


[color]
  # 控制git输出内容UI颜色，false为关闭
  ui = true
[filter "lfs"]
  clean = git-lfs clean -- %f
  smudge = git-lfs smudge -- %f
  process = git-lfs filter-process
  required = true
  

[credential]
  # 认证配置，记录用户认证密码，避免每次输入，store无期限的进行存储，cache进行短时间存储
  helper = store
  
# 示例：针对指定的仓库存储指定的用户信息
[credential "https://example.com"]
  username = foo
  
# 别名配置
[alias]
  b = branch
  co = checkout
  s = status
  cm = commit -m

```


## 用户名和邮箱查看/更改

```bash
// 查看用户名
git config user.name
// 查看邮箱
git config user.email

// 修改当前项目账号信息
git config user.name 'xxx'
git config user.email 'xxx@163.com'

// 修改(global代表全局修改)
git config --global user.name 'xxx'
git config --global user.email 'xx@163.com'

```

## 如何在不同项目中使用不同的git账号

一般在进行项目提交的时候，会先从该项目下的.git/config中查找提交者的账号信息，如果有则用，否则使用全局配置的账号信息。

所以如果项目不需要使用全局配置的账号信息，那么你在项目中配置一下账号信息即可，同时你也可以在.git/config文件中看到配置的信息

`.git/config文件`

```config
[core]
  repositoryformatversion = 0
  filemode = true
  bare = false
  logallrefupdates = true
  ignorecase = true
  precomposeunicode = true
[remote "origin"]
  url = https://github.com/sneptune-love/neptune.git
  fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
  remote = origin
  merge = refs/heads/master
[user]
  name = sneptune-love
  email = 13697136064@139.com
[pull]
  rebase = false

```




