

[官网地址](https://wproxy.org/whistle/)

## whistle

`作者：avenwu，腾讯员工`

> 基于node实现的跨平台调试代理工具

适用场景如下：

1、接口代理，查询

2、接口request修改

3、接口response重写

4、页面重定向

配置页面地址：http://local.whistlejs.com/

注意事项：

1、https协议需要证书才能代理，电脑本机需要安装，如果调试移动端，移动端也需要安装证书

2、chrome浏览器中页面接口代理，需要安装扩展[SwitchyOmega](https://chrome.google.com/webstore/detail/padekgcemlokbadohgkifijomclgjgif)  -- 翻墙才能下载

3、我的翻墙工具是clashX，所以在开启SwitchyOmega后，clashX系统代理会失效，需要关闭SwitchyOmega，才能正常工作


whistle主要有四个模块：network、rules、values、plugins

### network

网络请求查看，主要功能有

### rules

拦截规则

### values

全局变量，可用于拦截规则

### plugins

扩展功能

#### whistle.inspect

[github文档](https://github.com/whistle-plugins/whistle.inspect)

> 该whistle插件集成了 vConsole、eruda、mdebug 等用来在移动端页面上模拟Chrome开发者工具功能的模块，方便调试手机上的H5页面，只需简单配置即可随意切换 vConsole、eruda、mdebug。

使用方法

在rule中编写：

```bash
# 插入vconsole/edura/mdebug/
# https://test.shiwanmaster.com/ilanding/share whistle.inspect://
# https://test.shiwanmaster.com/ilanding/share whistle.inspect://eruda
https://test.shiwanmaster.com/ilanding/share whistle.inspect://mdebug

```

## Lightproxy（客户端）

`阿里出品，貌似已停止维护`

:fire: [文档](https://github.com/alibaba/lightproxy)
:fire: [github](https://github.com/alibaba/lightproxy)

> LightProxy 是一款基于 whistle 的本地代理抓包软件

- 抓包，包括无线场景抓包
- 实时 hosts 绑定
- 按规则转发资源
- mock 接口，页面等
- 修改请求和响应内容，例如在页面中插入 script ，修改返回头等


`内嵌whistle，新增debugger功能，但是我在移动端调试不太好使，没有找到解决的办法。github最后更新在2021/3月份，疑似阿里废弃产品，内部whistle未更新至最新版本`



## Nohost（权限分配）

`腾讯出品`

:fire: [文档](https://nohost.pro/docs/)
:fire: [github](https://github.com/Tencent/nohost)


> Nohost 是基于 Whistle 实现的多用户多环境配置及抓包调试系统，不仅具备 Whistle 的所有功能，并在 Whistle 基础上扩展了一些功能，且支持多人多环境同时使用，主要用于部署在公共服务器上供整个部门（公司）的同事共同使用，具有以下功能：

- 环境共享：前端无需配后台环境，后台无需配前端环境，其他人无需配任何环境
- 抓包调试：远程实时抓包调试，支持各种 Whistle 规则，以及通过链接分享抓包数据
- 历史记录：可以把环境配置及抓包数据沉淀下来，供后续随时切换查看
- 插件扩展：可以通过插件扩展实现诸如 inspect，vase，autosave 等功能
- 对外接口：提供对外接口，可供发布系统、CI等工具操作，实现自动化增删查改环境配置

`同样是基于whistle，增加了一系列权限和环境功能，巴适的很`



