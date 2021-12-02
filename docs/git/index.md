

[git中文文档](https:#git-scm.com/book/zh/v2)

## git介绍

`git保存的不是文件的变化和差异，而是每次提交时候的快照信息`

## git基本命令介绍


#### git clone

> 仓库克隆，支持http，https，ssh等协议

其中ssh协议需要将本机的公钥存放在git上，才能与git建立链接；http/https协议则是需要密码验证

`语法：git clone [仓库地址] [本地目录名称]`

```bash
# vueGit目录名称可以省略，默认会创建vue目录
git clone https:#github.com/vuejs/vue.git vueGit

```

### git remote

> 远端主机

```bash
# 查看所有远端主机
git remote

# 查看所有远端主机地址
git remote -v

# 查看指定远端主机详细信息
git remote show [主机名/origin]

# 添加远端主机
git remote add [主机名] [网址] / git remote add origin https:#github.com/vuejs/vue.git

# 删除指定远端主机
git remote rm [主机名] / git remote rm origin-test

# 修改远端主机名
git remote rename [原主机名] [新主机名] / git remote rename origin-test origin-test2
```


### git add

> 添加文件到暂存区

```bash
# 添加指定文件
git add fileName

# 添加当前路径下的所有文件
git add .

```

### git restore

> 取消暂存

```bash
# 取消暂存文件
git restore --staged <file>...

```

### git reset

> 取消暂存文件，回退版本

```bash
# 取消某个已暂存的文件
git reset HEAD <file>...

```

### git status

> 查看变更状态

```bash
# 查看某个文件的状态
git status fileName

# 查看所有文件状态
git status

# 精简输出
git status --short / git status --s

```

### git commit

> 将暂存区文件提交至本地仓库

```bash
# 提交暂存区指定文件
git commit -m '提交信息' fileName

# 提交所有暂存区文件
git commit -m '提交信息'

# 暂存并提交所有文件
git commit -a -m '提交信息'

# 覆盖上一次提交信息
git commit --amend

```

### git branch

> 分支创建、删除，以及分支的追踪管理

```bash
# 创建分支
git branch <branchName>

# 删除分支/强制删除分支
git branch -d <branchName> / git branch -D <branchName>

# 查看本地所有分支
git branch

# 查看远端分支
git branch -r

# 查看本地和远端所有分支
git branch -a

# 查看每个人分支的最后一次提交
git branch -v

# 过滤已合并或者未合并到当前分支的分支
git branch --merged / git branch --no-merged

# 手动创建追踪关系
git branch --set-stream master origin master

```

### git checkout

> 分支切换，`撤销文件更改-撤销使用的时候要慎重，无法恢复`

```bash
# 切换分支
git checkout <name>

# 创建并切换分支
git checkout -b <name>

# 撤销文件的更改
git checkout -- <file>...

# 检出标签
git checkout <tagname>

```

### git merge

> 分支合并

```bash
# 将<name>分支合并至当前分支
git merge  <name>

```

### git fetch

> 拉取远端仓库的更新

`语法：git fetch [远端主机] [远端分支]`

```bash
# 更新远端所有分支的更新
git fetch

# 更新origin远端指定分支master的更新
git fetch origin master
```

### git pull

> 获取远端最新分支并与指定的分支合并，相当于先执行一次git fetch，然后再执行git merge

`语法：git pull [远程主机名] [远端分支]:[本地分支]`

```bash
# 从远端获取最新至本地，自动merge，默认追踪与当前分支同名的远端分支
git pull

# 获取远端next分支并合并至本地master分支
git pull origin next:master

# 获取远端next分支合并至本地next分支
git pull origin next

# 手动建立追踪关系
git branch --set-upstream master origin/master

```

### git push

> 推送本地仓库的变更

`语法：git push [远程主机名] [本地分支]:[远程分支]`

```bash
# 将本地仓库的修改推送至远端仓库
git push origin master -> 追踪关系绑定后，可省略为 git push

# 删除远端分支，即推送一个空分支至远端
git push origin :master == git push origin --delete master

# 标签推送 -- 推送所有，默认不会推送标签
git push origin --tags

# 标签推送 -- 推送指定
git push origin <tagname>

# 删除远端标签
git push origin --delete <tagname>

# 将冒号前面的空值推送到远程标签名，从而删除标签
git push origin :refs/tags/<tagname>

```

### git log

> 日志查看

在不输入参数的情况下，`git log` 会按时间先后顺序输出所有的提交信息，最近更新的排在最上面；

  + SHA-1校验和
  + 作者的名称
  + 作者的电子邮件
  + 提交时间
  + 提交说明


```bash
# 限制日志输出数量，例如限制两条
git log -2

# 输出指定时间的内容，例如最2.weeks-近两周，2021-11-30-指定日期，1day-一天内，2day ago
git log --since=2.weeks / git log --since=2021-11-30 / git log --since=1day

# 输出指定时间之前的提交 utils, before
git log --utils=2021-11-30 / git log --before=2021-11-30

# 输出指定时间之后的提交 since, after
git log --since=2021-11-30 / git log --after=2021-11-30

# 仅显示作者匹配指定字符串的提交
git log --author=xxx

# 仅显示提交者匹配指定字符串的提交
git log --committer=xxx

# 仅显示提交说明中包含指定字符串的提交
git log --grep=xxx

# 仅显示添加或删除内容匹配指定字符串的提交
git log -S function_name

# 显示提交差异信息，按补丁格式输出
git log --patch / git log -p

# 查看简略信息，比如文件的新增、修改、删除等
git log --stats

# 只显示 --stat 中最后的行数修改添加移除统计
git log --shortstat

# 仅在提交信息后显示已修改的文件清单
git log --name-only

# 显示新增、修改、删除的文件清单
git log --name-status

# 仅显示 SHA-1 校验和所有 40 个字符中的前几个字符
git log --abbrev-commit

# 使用较短的相对时间而不是完整格式显示日期（比如“2 weeks ago”）
git log --relative-date

# 在日志旁以 ASCII 图形显示分支与合并历史
git log --graph

# 使用其他格式显示历史提交信息。可用的选项包括 oneline、short、full、fuller 和 format（用来定义自己的格式）
git log --pretty

# --pretty=oneline --abbrev-commit 合用的简写
git log --oneline

# 统计信息定制化，%h-提交的简写哈希值，%an-作者名字，%ar-作者修订日期，按多久以前的方式显示，%s-提交说明
git log --pretty=format:"%h - %an, %ar : %s"
# 输出 ==>
# 7896549 - sneptune-love, 4 hours ago : docs: 增加每日一问专栏
# 1108d4d - sneptune-love, 21 hours ago : docs: 更新git文档

# 当前指针指向
git log --online --decorate

```


### git reflog

> 精简日志查看

### git reset

> 版本回退

```bash
git reset <commit-id > --hard

```

### git config

> 配置文件

```bash
# 查看git config配置，按q退出
git config --list
```

### git tag

> 标签管理

注意：

- git push并不会推送标签；

- 不要直接在tag标签上进行开发，需要根据tag标签重新创建分支来进行开发

```bash
# 创建附注标签
git tag -a <tagname> -m "标签附注信息"

# 创建轻量标签
git tag <tagname>

# 查看所有标签
git tag

# 为某次提交创建指定标签
git tag -a <tagname> <commit-id>

# 删除指定ID标签
git tag -d <tagname>
```

### git show

> 查看命令操作

```bash
# 查看文件的修改的历史提交记录
git show commitId
# 查看指定标签具体内容
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

Mac路径位置

  + 全局配置文件：`/etc/gitconfig`

  + 用户全局配置文件：`~/.gitconfig或者~/.config/git/config` 

  + 项目配置文件：`project/.git/config`

Windows路径位置

  + 系统级配置：`C:\ProgramData\Git\config` (windows xp在C:\Documents and Settings\All Users\Application Data\Git\config)

  + 用户全局配置文件：`C:\Users\$USER\.gitconfig` 

  + 安装git路径下的 `/etc/gitconfig`


查看所有配置文件命令：`git config --list --show-origin`

```bash
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
[credential "https:#example.com"]
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
# 查看用户名
git config user.name
# 查看邮箱
git config user.email

# 修改当前项目账号信息
git config user.name 'xxx'
git config user.email 'xxx@163.com'

# 修改(global代表全局修改)
git config --global user.name 'xxx'
git config --global user.email 'xx@163.com'

# 别名设置
git config --global alias.co checkout

```

## 如何在不同项目中使用不同的git账号

一般在进行项目提交的时候，会先从该项目下的.git/config中查找提交者的账号信息，如果有则用，否则使用全局配置的账号信息。

所以如果项目不需要使用全局配置的账号信息，那么你在项目中配置一下账号信息即可，同时你也可以在.git/config文件中看到配置的信息

`.git/config文件`

```bash
[core]
  repositoryformatversion = 0
  filemode = true
  bare = false
  logallrefupdates = true
  ignorecase = true
  precomposeunicode = true
[remote "origin"]
  url = https:#github.com/sneptune-love/neptune.git
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




