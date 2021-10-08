
更新时间：{docsify-updated}

`HTML（HyperText Markup Language，超文本标记语言）`

## HTML介绍

HTML（HyperText Markup Language，超文本标记语言） 是一种描述语言，用来定义网页结构

其主要可以分为四部分：
- 文档类型声明
- Head网页关键信息
- Body网页内容主体
- Script脚本

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

标签拥有一套全局属性（去除废弃26个），大部分全局属性都能适用


## 块级元素汇总

常用标签：address, article, aside, audio, blockquote, canvas, dd, div, dl, footer, form, h1-h6, header, hr, li, ol, p, pre, section, table, ul, video

不常用标签：fieldset, figure, figcaption, hgroup, output, tfoot


## 行内元素汇总

b, big, i, small, tt, abbr, cite, code, dfn, em, kbd, strong, var, samp, a, bdo, br, img, q, script, span, button, input, label, select, textarea

### script标签属性解析

`async`

    脚本并行请求，对于相互

`defer`

    阻止DOMContentLoaded，直到脚本加载并解析完成
    
如果脚本无需等待页面解析，且无依赖独立运行，推荐使用async

如果脚本需要等待页面解析，且依赖其它脚本，请使用defer，并将脚本按顺序放置html中

### Canvas和SVG的区别

| Canvas | SVG |
| --| -- |
| 较新，Apple私有技术发展而来 | 历史悠久，2003年成为W3C标准 |
| 像素，只能脚本驱动，动态渲染和大数据量绘制 | 矢量，XML，CSS，元素操作；适合静态图标展示，高保真文档查看和打印的应用场景 |
| 功能简单，2D绘图 | 功能丰富，各种图形、滤镜、动画等 |
| 主流浏览器，IE9+ | 主流浏览器，IE9+，其它SVG阅读器 |


## HTML5新特性

> HTML5新特性参考[HTML5](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/Guide/HTML/HTML5)




