


# Mac相关信息


## 安装brew

因为brew是ruby开发的，所以先确认电脑中是否有ruby，默认是已安装的

```bash
which ruby

ruby --version
```

运行下方命令，选择1，中科大下砸源

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

```

brew 相关命令

```bash
# 本地软件库列表
brew ls
# 查找软件
brew search google（其中google替换为要查找的关键字）
# 查看brew版本：
brew -v  
# 更新brew版本：
brew update
# 安装cask软件：
brew install --cask firefox 把firefox换成你要安装的

```


## 安装sshpass

进入/usr/local目录，执行下载安装命令

```bash
cd /usr/local

sudo curl -O -L http://downloads.sourceforge.net/project/sshpass/sshpass/1.06/sshpass-1.06.tar.gz && tar xvzf sshpass-1.06.tar.gz && cd sshpass-1.06 && ./configure && make && sudo make install

```

如果包已经下载完成，但是安装失败的话，将后面的命令拆解带上sudo执行


## docker安装


## mysql安装

[参考文档](https://www.jianshu.com/p/199492627ccc)

[mysql下载地址](https://dev.mysql.com/downloads/mysql/)

## docker安装

[docker下载地址](https://docs.docker.com/desktop/mac/install/)




