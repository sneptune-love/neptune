


`HTML（HyperText Markup Language，超文本标记语言）`

## HTML介绍

HTML（HyperText Markup Language，超文本标记语言） 是一种描述语言，用来定义网页结构

网页文档解析顺序`自上而下`

网页结构一般可以由以下部分组成：

1、 文档类型声明（\<!DOCTYPE HTML>）

2、 文档头部内容(\<head>...\</head>) ，包含以下内容：

  - \<title>网页标题\</title>

  - \<meta> 元信息，主要用于对网站的介绍，其内容丰富，详情查看请点击 [meta详解](./html/meta)
  
  - \<link> 资源引用，对网页样式表和网站图标资源的引入
  
  - \<script> 脚本引用，除特殊脚本外，不建议将脚本引入放置该位置，会阻塞下方文档加载
  
3、 文档主体内容(\<body>...\</body>)，呈现在网页上的各种展示内容，其末尾部分一般会引入脚本文件

`script标签正常情况都是放置于文档主题内容之后，特殊脚本可以放置与head中`

## HTML发展史

①HTML 1.0：在1993年6月作为互联网工程工作小组(IETF)工作草案发布

②HTML 2.0：1995年1 1月作为RFC 1866发布，于2000年6月发布之后被宣布已经过时

③HTML 3.2：1997年1月14日，W3C推荐标准

④HTML 4.0：1997年12月18日，W3C推荐标准

⑤2014年10月28日，HTML5作为稳定W3C推荐标准发布,Internet Explorer 8及以前的版本不支持

## HTML5新增特性

### 语义化

常见标签：article, aside, details, summary, footer, header, mark, nav, section, time

不常见标签： bdi, command, dialog, figure, figcaption, meter, progress, ruby, rt, rp, wbr 

### 多媒体

标签：video, audio, source, embed, track

### 表单

datalist, keygen, output

### canvas

canvas


### 移除HTML4.01中的元素

acronym, applet, basefont, big, center, dir, font, frame, frameset, noframes, strike

## 文档类型声明

```
<!DOCTYPE HTML>
```
## Head头部

> 规定文档相关的配置信息，包括文档的标题，样式，脚本等

一般标签内部放置文档的元信息、网站图标、样式表、提前加载的脚本文件

```
<head>
  <meta>
  <link rel="stylesheet" src="xx.css>
  <link rel="Shortcut Icon" href="./mine.ico" type="image/x-icon" />
  <script src="xx.js"></script>
</head>
```

[元信息  meta详解](./html/meta)

## body主体

具体标签详情参考[MDN-HTML元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

标签拥有一套[全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)（去除废弃26个），大部分全局属性都能适用


## script标签属性解析

`async`

    脚本并行请求，对于相互

`defer`

    阻止DOMContentLoaded，直到脚本加载并解析完成
    
如果脚本无需等待页面解析，且无依赖独立运行，推荐使用async

如果脚本需要等待页面解析，且依赖其它脚本，请使用defer，并将脚本按顺序放置html中





