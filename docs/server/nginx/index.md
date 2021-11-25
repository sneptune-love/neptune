


# Nginx相关信息


## root目录配置

```bash
server {
  set $root  /Users/hujiang/Desktop/codeTest/;
}

```

## 端口配置

```bash
server {
  listen       9000;
}
```

## 开启文件目录列表访问

```bash
location /dir {
  root   $root;
  autoindex on;
  autoindex_exact_size off;
  autoindex_localtime on;
}
```

## 反向代理

> vue项目history模式配置

```bash
location /testvue3 {
  root   $root;
  try_files $uri $uri/ /testvue3/index.html;
}

```


## 命令操作

```bash
// 配置检查
nginx -t

// 启动
nginx

// 重启
nginx -s reload

// 停止
nginx -s stop

```