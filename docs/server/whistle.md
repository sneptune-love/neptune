

[官网地址](https://wproxy.org/whistle/)

## whistle

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


## whistle插件

### whistle.inspect

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

