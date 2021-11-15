
# git指令




## git基本命令介绍：

- git add fileName（添加指定文件）-> git add .（添加当前路径下的所有文件）-> 添加至暂存区

- git commit -m '注释' fileName （提交暂存区指定文件）-> git commit -m '注释' （提交所有暂存区文件）-> 提交更改记录至本地仓库

- git status fileName（查看某个文件的状态） -> git status（查看所有文件状态） -> 查看变更状态

- git branch <name> -> 创建分支 -> git branch -d <name> -> 删除分支 -> git branch -> 查看所有分支

- git checkout <name> -> 切换分支 -> git checkout -b <name> -> 创建并切换分支

- git fetch -> 从远端获取最新至本地，不回自动merge

- git pull -> 从远端获取最新至本地，自动merge

- git push (git push origin master) -> 推送更改记录至远端仓库

- git merge  <name> -> 合并分支至当前分支 

- git remote -v -> 查看远端仓库详细信息

- git tag <tagname> -> 创建标签

- git tag -> 查看所有标签

- git tag <tagname> commitId -> 为某次提交创建指定标签

- git show <tagname> -> 查看指定标签具体内容

- git tag -d tagid -> 删除tag标签

- git config --list -> 查看git config配置，按q退出

- git show commitId -> 查看文件的修改的历史提交记录

## .git目录

.git目录的介绍：

- hooks/: 默认的hook脚本
- info/: 项目指定忽略的文件信息 + 远端ref记录
- logs/: 提交commit记录
- objects/: git对象库 + 包含标签信息
- config: 项目的配置信息
- description: 项目的描述信息
- HEAD: 指向当前分支的一个提交

## 查看修改username和email

```bash
-- 查看
git config user.name

git config user.email

-- 修改当前项目账号信息

git config user.name 'xxx'

git config user.email 'xxx@163.com'


-- 修改(global代表全局修改)

git config --global user.name 'sneptune'

git config --global user.email '17600112740@163.com'

```

## 如何在不同项目中使用不同的git账号

一般在进行项目提交的时候，会先从该项目下的.git/config中查找提交者的账号信息，如果有则用，否则使用全局配置的账号信息。

所以如果项目不需要使用全局配置的账号信息，那么你在项目中配置一下账号信息即可，同时你也可以在.git/config文件中看到配置的信息

<img src="./static/screenshot/WX20200506-201920@2x.png" alt="" style="width: 600px;">




