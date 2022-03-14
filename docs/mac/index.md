


## mac相关信息


mac终端上经常使用的命令集合


```bash
# 展示文件列表目录并过滤出包含abc的文件展示
ls | grep 'abc'

# 查看本机ip
ifconfig

# 查看网址解析域名
ping www.baidu.com

# 查看历史记录
history

# 查看9000端口使用信息, -i参数表示网络链接，:80指明端口号，该命令会同时列出PID，方便kill
lsof -i tcp:9000

# 杀死进程
sudo kill -9 PID

```

介绍一些mac电脑需要用的软件

### 安装brew

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

### 安装wget

```bash
brew install wget
```

### 安装yum

```bash
// 下载解压
wget http://yum.baseurl.org/download/3.2/yum-3.2.28.tar.gz
tar xvf yum-3.2.28.tar.gz
// 安装
cd yum-3.2.28
sudo apt install yum
// 更新版本
yum check-update
yum update
yum clean all
```

### 安装sshpass

进入/usr/local目录，执行下载安装命令

```bash
cd /usr/local

sudo curl -O -L http://downloads.sourceforge.net/project/sshpass/sshpass/1.06/sshpass-1.06.tar.gz && tar xvzf sshpass-1.06.tar.gz && cd sshpass-1.06 && ./configure && make && sudo make install

```

如果包已经下载完成，但是安装失败的话，将后面的命令拆解带上sudo执行

### 安装mysql

[参考文档](https://www.jianshu.com/p/199492627ccc)

[mysql下载地址](https://dev.mysql.com/downloads/mysql/)

本机下载mysql，版本号如果过高，比如8.0.27需要注意以下内容：

在设置初始密码的时候，建议选择弱类型密码，如果选择第一个推荐的强类型密码，那么在node中链接mysql的时候会出现连接不上的问题

### 安装docker

[docker下载地址](https://docs.docker.com/desktop/mac/install/)

### 安装ffmpeg

> 安装参考网址：https://www.jianshu.com/p/0dccf2fb0dff

```bash 
brew install ffmpeg

ffmpeg -i http://aisylive.oss/xxxxxxx/xxxx/180209c001_3.m3u8  output.mp4

```

>  Installing dependencies for ffmpeg: aom, libpng, freetype, fontconfig, frei0r, gmp, gettext, libidn2, libtasn1, nettle, libffi, p11-kit, openssl@1.1, libevent, unbound, gnutls, lame, fribidi, gdbm, readline, sqlite, python, glib, lzo, pixman, cairo, graphite2, icu4c, harfbuzz, libass, libbluray, libsoxr, libvidstab, libogg, libvorbis, libvpx, opencore-amr, jpeg, libtiff, little-cms2, openjpeg, opus, rtmpdump, flac, libsndfile, libsamplerate, rubberband, sdl2, snappy, speex, giflib, webp, leptonica, tesseract, theora, x264, x265 and xvid


### 安装tree

```bash
brew install tree
```

#### tree命令详解

| 参数 | 说明 |
|:-:|-|
| -a | 显示所有文件和目录 |
| -A | 使用ASNI绘图字符显示树状图而非以ASCII字符组合 |
| -C | 在文件和目录清单加上色彩，便于区分各种类型 |
| -d | 显示目录名称而非内容 |
| -D | 列出文件或目录的更改时间 |
| -f | 在每个文件或目录之前，显示完整的相对路径名称 |
| -F | 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上"*","/","=","@","|"号 |
| -g | 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码 |
| -i | 不以阶梯状列出文件或目录名称。 |
| -I | <范本样式> 不显示符合范本样式的文件或目录名称 |
| -l | 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录 |
| -n | 直接列出文件和目录名称，包括控制字符。 |
| -N | 直接列出文件和目录名称，包括控制字符 |
| -p | 列出权限标示 |
| -P | <范本样式> 只显示符合范本样式的文件或目录名称 |
| -q | 用"?"号取代控制字符，列出文件和目录名称 |
| -s | 列出文件或目录大小 |
| -t | 用文件和目录的更改时间排序 |
| -u | 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码 |
| -x | 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围外 |


##### 使用例子

- 过滤node_modules和dist文件夹并输出到tree.text文件
```bash
tree -I "node_modules|dist" > tree.txt
```