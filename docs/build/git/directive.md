
# git指令


更新时间：{docsify-updated}
## 查看git配置

```bash
git config --list  // 按q退出
```

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


## git log


### git log --pretty

> git log --pretty=one fileName

查看文件的修改的历史提交记录

> git show commitId