

# NPM管理工具nrm


## nrm介绍

1.1.0 版本nrm中含有6种源的地址，你可以在不同的场景使用不同的源，同时你也可以自定义添加源的地址，在日常工作中，还是很便捷的


## nrm 安装

```bash
sudo npm i nrm -g

```

## 查看npm源

```bash
nrm ls

```
上下选择npm源，回车确定

<img src="./static/screenshot/WX20200505-160115@2x.png" alt="" style="width: 600px;">

## 使用list中的某个源

```bash

nrm use cnpm 
```

## 查看现在使用的源

```bash
nrm current   // cnpm

```

## 查看list中的源的速度

```bash
nrm test cnpm // * cnpm --- 294ms

nrm test // 查看list中所有源的下载速度

```

<img src="./static/screenshot/WX20200505-160818@2x.png" alt="" style="width: 600px;">

## 添加自定义源

```bash
nrm add <registry> <url> [home]

```

## 删除源

```bash
del cnpm
```