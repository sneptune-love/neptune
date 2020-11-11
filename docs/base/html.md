
更新时间：{docsify-updated}

# 发展历史（介绍来源于MDN）

1990 年，由于对 Web 未来发展的远见，Tim Berners-Lee 提出了 超文本 的概念，并在第二年在 SGML 的基础上将其正式定义为一个标记语言。IETF 于 1993 年正式开始制定 HTML 规范，并在经历了几个版本的草案后于 1995 年发布了 HTML 2.0 版本。1994年，Berners-Lee 为了 Web 发展而成立了 W3C。1996 年，W3C 接管了 HTML 的标准化工作，并在1年后发布了 HTML 3.2 推荐标准。1999 年，HTML 4.0 发布，并在 2000 年成为 ISO 标准。

自那以后，W3C 几乎放弃了 HTML 而转向 XHTML，并于 2004 年成立了另一个独立的小组 WHATWG。幸运的是，WHATWG 后来又转回来参与了 HTML5 标准的制定，两个组织（译注：即 W3C 和 WHATWG）在 2008 年发布了第一份草案，并在 2014 年发布了 HTML5 标准的最终版。

# HTML简介

HTML（超文本标记语言），定义了网页内容的结构和含义

HTML元素通过Tag标签来将文本从文档中引出，标签由 “<” 和 ">" 中包裹的元素名组成，<b>不区分大小写</b>

# 主体结构

## \<!DOCTYPE html>

> 文档类型，保证文档能够正常读取

## \<html>\</html>

> 页面根元素，包含整个页面内容

## \<head>\</head>

> 定义文档头部内容，该元素的内容对用户不可见。其中可包含页面标题，搜索关键字，页面描述，css样式表和字符编码等内容

### \<title>\</title>

> 页面标题

### \<meta>

> meta属性有两种， name和http-equiv

```
// 指定文档使用utf-8编码字符编码
<meta charset="utf-8" >

```

#### name

- name主要用于描述网页，对应于content（网页内容），以便于搜索引擎机器人查找、分类

##### keywords

```
// 设置页面搜索关键字，便于搜索引擎统计网站关键字
<meat name="keywords" content="搜索关键字">

```

##### description

```
// 设置页面搜索关键内容，便于搜索引擎统计网站关键内容
<meat name="description" content="搜索关键内容">

```
##### robots

- 用于指令搜索引擎禁止索引（收录）本页内容，其中content的值有all, none, index, noindex, follow, nofollow, 默认all

```
// all - 文件将被检索，且页面上的链接可以被查询
<meta name="robots" content="all">
// none - 文件不可以被检索且页面上的链接也不可以被查询
<meta name="robots" content="none">
// index - 文件可以被检索
<meta name="robots" content="index">
// noindex - 文件不可以被检索
<meta name="robots" content="noindex">
// follow - 页面上的链接可以被查询
<meta name="robots" content="follow">
// nofollow - 页面上的链接不可以被查询
<meta name="robots" content="nofollow">

```
##### author

- 标注网页的作者和相关信息

```
// 标注作者信息，比如作者昵称，邮箱等；
<meta name="author" content="xiaofan, 17600112740@163.com">
```

##### generator

- 表示网页用什么软件制作

```
<meta name="generator" content="vue,jquery">

```

##### copyright

- 网页版权信息

```
<meta name="copyright" content="">
```

##### revisit-after

- 限定搜索引擎隔多久来爬取一次网页，如果搜索引擎本身爬取周期大于该值，则不生效
```
<meta name="revisit-afeter" content="7days">
```

#### http-equiv

- http-equiv相当于http的文件头作用，可以向浏览器回传一些有用的信息，以帮助正确和精确的显示网页内容，与之对应的属性值也是content，content中的内容就是各个参数的变量值

##### refresh

```
// content中的0代表，0s后重定向至ifram.html路径
<meta http-equiv="refresh" content="0;url=./iframe.html">

```

## \<body>\</body>

> 定义文档主体内容，包含页面展示时的所有内容（文本，图像，音频，视频，游戏等）

# DOM节点

## 类型

## 节点操作方法

### 增

### 删

### 改/查

# 浏览器方法

## encodeURI

## decodeURI



# 参考链接

[\<meta>：文档级元数据元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

[meta属性详解](https://blog.csdn.net/ssisse/article/details/51590584)