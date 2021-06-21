
# Html介绍

HTML（HyperText Markup Language，超文本标记语言） 是一种描述语言，用来定义网页结构

其主要可以分为三部分理解Head网页关键信息，Body网页内容主体，Script脚本

## 文档类型声明

```
<!DOCTYPE HTML>

```

## Head头部

> 规定文档相关的配置信息，包括文档的标题，样式，脚本等

```
<head>

    <meta>

    <link rel="stylesheet" src="xx.css>
    
    <script src="xx.js"></script>

</head>

```

[meta详解](./html/meta)

## body主体

### 标签

具体标签详情参考[MDN-HTML元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

### 块级元素汇总

```
address, article, aside, audio, blockquote, 
canvas, dd, div, dl, fieldset, figure, figcaption, 
footer, form, h1-h6, header, hgroup, hr, ol, output,
p, pre, section, table, tfoot, ul, video

```

### 行内元素汇总

```
b, big, i, small, tt,
abbr, cite, code, dfn, em, kbd, strong, var, samp,
a, bdo, br, img, q, script, span,
button, input, label, select, textarea

```

### script标签属性解析

- async

    脚本并行请求

- defer

    阻止DOMContentLoaded，直到脚本加载并解析完成

### Canvas和SVG的区别

| Canvas | SVG |
| -- | -- |
| 较新，Apple私有技术发展而来 | 历史悠久，2003年成为W3C标准 |
| 像素，只能脚本驱动，动态渲染和大数据量绘制 | 矢量，XML，CSS，元素操作；适合静态图标展示，高保真文档查看和打印的应用场景 |
| 功能简单，2D绘图 | 功能丰富，各种图形、滤镜、动画等 |
| 主流浏览器，IE9+ | 主流浏览器，IE9+，其它SVG阅读器 |


## HTML5新特性

> HTML5新特性参考[HTML5](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/Guide/HTML/HTML5)




