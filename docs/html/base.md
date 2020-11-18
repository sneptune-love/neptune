
更新时间：{docsify-updated}

# 发展历史

[参考MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML)

# HTML简介

HTML（超文本标记语言），定义了网页内容的结构和含义

HTML元素通过Tag标签来将文本从文档中引出，标签由 “<” 和 ">" 中包裹的元素名组成，<b>不区分大小写</b>


```html
<!-- 文档类型，保证文档能够正常读取 -->
<!DOCTYPE html>   
<!-- 页面根元素，包含整个页面内容 -->
<html>
    <!-- 定义文档头部内容，该元素的内容对用户不可见。其中可包含页面标题，搜索关键字，页面描述，css样式表和字符编码等内容 -->
    <head>
        <!-- 页面标题 -->
        <title>
<!-- name 主要用于描述网页，对应于content（网页内容） -->
    <!-- 指定文档使用utf-8编码字符编码 -->
        <meta charset="utf-8" >
    <!-- 设置页面搜索关键字，便于搜索引擎统计网站关键字 -->
        <meta name="keywords" content="搜索关键字">
    <!-- 设置页面搜索关键内容，便于搜索引擎统计网站关键内容 -->
        <meta name="description" content="搜索关键内容">
    <!-- 标注作者信息，比如作者昵称，邮箱等； -->
        <meta name="author" content="xiaofan, 17600112740@163.com">
    <!-- 网页版权信息 -->
        <meta name="copyright" content="">
    <!-- 表示网页用什么软件制作 -->
        <meta name="generator" content="vue,jquery">
    <!-- viewport -- 浏览器视口，适用于移动端适配 -->
        <!-- - width  指定viewport的宽度
        - height  指定viewport的高度
        - initial-scale  初始缩放的比例
        - maximum-scale  允许用户缩放的最大比例
        - minimum-scale  允许用户缩放的最小比例
        - user-scalable  用户是否可以手动缩放 -->
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum=1.0; minimum=1.0; user-scalable=1.0">
        <!-- 禁止电话功能（针对页面数字） -->
        <meta name="format-detection" content="telphone=no">
        <!-- 启用电话功能（默认属性） -->
        <meta name="format-detection" content="telphone=yes">
        <!-- android设备，禁止启用邮件功能 -->
        <meta name="format-detection" content="email=mo">
        
<!-- name不常用属性，兼容性差，不推荐使用 -->
    <!-- robots 用于指令搜索引擎禁止索引（收录）本页内容，其中content的值有all, none, index, noindex, follow, nofollow, 默认all -->
        <!-- all - 文件将被检索，且页面上的链接可以被查询
        none - 文件不可以被检索且页面上的链接也不可以被查询
        index - 文件可以被检索
        noindex - 文件不可以被检索
        follow - 页面上的链接可以被查询
        nofollow - 页面上的链接不可以被查询 -->
        <meta name="robots" content="all">
    <!-- revisit-after 限定搜索引擎隔多久来爬取一次网页，如果搜索引擎本身爬取周期大于该值，则不生效 -->
        <meta name="revisit-afeter" content="7days">
    <!-- apple-mobile-web-app-capable 删除默认苹果系统的工具栏（适用于低版本），默认显示 -->
        <meta name="apple-mobile-web-app-capable" content="no">
    <!-- apple-mobile-web-app-status-bar-style 苹果状态栏样式，default默认白色， 灰色black，灰色半透明black-translucent -->
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        
<!-- http-equiv 相当于http的文件头作用，可以向浏览器回传一些有用的信息，以帮助正确和精确的显示网页内容，与之对应的属性值也是content，content中的内容就是各个参数的变量值 -->
    <!-- refresh 重定向页面 content中的0代表，0s后重定向至ifram.html路径 -->
        <meta http-equiv="refresh" content="0;url=./iframe.html">
    <!-- content-type 设定页面内容编码格式 -->
        <!-- | utf-8 | 世界通用语言 |
        | ISO-8859-1 | 英文 |
        | GB2312 | 中文 |
        | BIG5 | 繁体中文 |
        | iso-2022-jp | 日文 |
        | ks_c_5601 | 韩文 | -->
        <meta http-equiv="content-type" content="text/html;charest=utf-8">
    <!-- content-language  显示语言的设定 -->
        <meta http-equiv="content-language" content="zh-cn">
    <!-- X-UA-Compatible IE8专用标记，指定IE8浏览器去模拟某个特定版本的IE浏览器渲染方式，以此来解决部分兼容问题 -->
        <!-- 使用最新版本IE浏览器渲染方式 -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Content-Cecurity-Policy（网页安全政策，简称CSP） -->
        <!-- 参考   [阮一峰老师文章](http://www.ruanyifeng.com/blog/2016/09/csp.html) -->
        <meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">
        
<!-- http-equiv 不常用属性，兼容性差，不推荐使用 -->
    <!-- pragma（针对低版本IE）禁止浏览器从本地计算机的缓存中访问该页面 -->
        <meta http-equiv="pragma" content="no-cache">
    <!-- set-cookie（针对低版本IE）设置cookie，经测试chrome浏览器直接锁定限制该实现方式；safari浏览器提示该方式过期并直接忽略，建议使用http请求头和document.cookie实现 -->
        <meta http-equiv="set-cookie" content="a value=1;expires=Wed, 11 Nov 2020 10:03:52 GMT;path=/">
    <!-- window-target（针对低版本IE） 显示窗口的设定，强制页面在当前窗口以独立页面展示；用来防止别人嵌套自己的页面（经测试chrome和safari对此属性均不生效！） -->
        <meta http-equiv="window-target" content="_top">
    <!-- expires（针对低版本IE） 设定网页过期时间，超过该时间则需重新去服务器拉去该网页的信息。必须使用GMT格式时间 -->
        <meta http-equiv="expires" content="Wed, 11 Nov 2020 03:03:52 GMT">
    <!-- cache-control（针对低版本IE） 指定请求和响应遵循的缓存机制（兼容IE低版本可设置该属性，属于http/1.0时代的产物，仅做了解） -->
        <!-- - public 响应可被任何缓存区缓存
        - private 对于单个或者部分响应详细不能被缓存
        - no-cahce 请求或者响应不能缓存
        - no-store 发送请求信息时不使用缓存信息
        - max-age 接受响应的最大时间
        - min-fresh 接受响应的最小时间
        - max-stale 接受超出指定值内的响应消息 -->
        <meta http-equiv="cache-control" content="public">
    </head>
    <!-- 定义文档主体内容，包含页面展示时的所有内容（文本，图像，音频，视频，游戏等） -->
    <body>
    </body>
</html>

```

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