

## 白嫖之旅

我是从阿里白嫖的一个月ECS计算型c5服务器（2核4G；实例镜像：Alibaba Cloud Linux / Alibaba Cloud Linux  3.2104 LTS 64位；20G高效云盘；1M固定带宽）

[活动领取地址](https://developer.aliyun.com/topic/ecs2022)：https://developer.aliyun.com/topic/ecs2022

刚好赶上了阿里乘风者活动，去社区发了三篇原创文章，得到一个技术博主勋章，如果不想发的话，可以领取一个ECS共享型n4

[技术博主申请入口](https://survey.aliyun.com/apps/zhiliao/LFF0Fd3tX?accounttraceid=cacb7c11a31f4967bdb77e468116445fqjtj)

## 部署前的准备

1、先去阿里云控制台找到咱们领取的这个服务器，修改一下密码，通过阿里云远程连接先进入瞅一瞅，虽然也看不出来啥，嘻嘻。

2、找到网络与安全中安全组，将80端口、443端口和后面需要用到的mysql端口给配置一下，以免外部无法访问

## 开始部署了

先装一下下面几个东西，毕竟后续装其它软件的时候，都会用到

1、安装一下c++环境

```
yum install -y gcc gcc-c++
```

2、检查一下是否有wget，毕竟能不能下载外链东西就靠它了，如果没有的话，就得先下载一下它

```
yum -y install wget

```

### nginx 

然后咱们部署一下nginx环境，让外网能够访问服务器，至少能通过公网ip能看到一个页面，来一点自信，咔嚓咔嚓


咱们先来安装一下nginx需要用到的一些依赖

```
# 安装SSL库

cd /usr/local/

wget http://www.openssl.org/source/openssl-1.0.1j.tar.gz

tar -zxvf openssl-1.0.1j.tar.gz

cd openssl-1.0.1j

./config

make && make install

# 安装zlib库

cd /usr/local/
wget http://zlib.net/zlib-1.2.12.tar.gz
tar -zxvf zlib-1.2.12.tar.gz
cd zlib-1.2.12
./configure
make && make install

```

上面的这几个都安装完成后，咱们再来安装nginx咯，搞起来

```
# 安装nginx 

cd usr/local/src

wget http://nginx.org/download/nginx-1.20.2.tar.gz

tar -zxvf nginx-1.20.2.tar.gz

cd nginx-1.20.2

# 将nginx配置文件放到/usr/local/nginx
./configure --prefix="/usr/local/nginx"

# 开始安装
make && make install

```

来记录几个常用的nginx命令

```
# 查看nginx进程
ps -aux | grep nginx

# 启动nginx
./usr/local/nginx/sbin/nginx

# 停止nginx
/usr/local/nginx/sbin/nginx -s stop

# 检查nginx配置语法
/usr/local/nginx/sbin/nginx -t

# 重启nginx
/usr/local/nginx/sbin/nginx -s restart

```




