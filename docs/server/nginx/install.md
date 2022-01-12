

## nginx 安装文档


nginx包下载地址：https://nginx.org/en/download.html

咱们的下载用不到这个地址，但是可以查看nginx最新版本和稳定版本


mac中下载nginx很简单，如果有已经下载过了homebrew，那么一个命令搞定

```bash
brew install nginx
```

如果没有下载homebrew，则需要去下载一下homebrew，详情参考[传送](/docs/mac/index)

`简单几个命令操作nginx`


```bash
# 开启
nginx
# 关闭
nginx -s stop
# 重启
nginx -s reload
# 检查配置，会输出配置文件地址
nginx -t

```