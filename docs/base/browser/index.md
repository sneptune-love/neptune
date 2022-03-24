

# 浏览器


## 缓存

`1、session和local需要注意：从Firefox 45开始，当浏览器崩溃或重启时，每个源的存储大小将限制在10M，以避免因过度使用web storage引起的内存问题`

`2、若用户禁用第三方cookie，那么将不允许来自第三方IFrames对Web Storage的访问。（从Firefox 43版本开始实行）`

### sessionStorage

> 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）

### localStorage

> 为每一个给定的源（given origin）维持一个独立的存储区域，即使浏览器关闭或者重新打开数据都会存在


### Cookie

[Document.cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

```js
// ca代表cookie key值，123为value值；expires过期时间；path路径，必须为绝对路径，默认为当前文档的路径；domain允许发送cookie的域名；secure代表cookie只能通过https协议传输
document.cookie = 'ca=123;expires=' + new Date().toUTCString() + ';path=/;domain=www.baidu.com;secure'

```

> 定义了两种生命周期：会话期和持久性生命周期

会话期Cookie：浏览器关闭即会自动删除；不需要指定过期时间和有效期（需注意：有些浏览器提供了会话恢复功能，不会自动删除cookie）

持久性Cookie：通过设置Expires或者Max-Age来指定有效期

当Cookie设置了过期时间时，此设定日期只对客户端有关，与服务端无关


> 限制访问Cookie的两种属性：Secure和HttpOnly

Secure：标记此属性的Cookie只能通过https请求发送至服务端，可以预防main-in-the-middle攻击者的攻击

HttpOnly：标记此属性的Cookie只能在服务端访问，客户端无法通过Document.cookie访问


> Cookie的作用域Domain和Path：允许Cookie发送给URL

Domain：如果未指定Domain，默认使用Origin，不包含子域名

Path：指定主机下的那些路径可以接受Cookie（该路径必须存在于请求Url中）

> SameSite

Cookie 允许服务器要求某个 cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击

```
Set-Cookie: key=value; SameSite=Strict
```

- None。浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写
- Strict。浏览器将只在访问相同站点时发送 cookie。
- Lax。与 Strict 类似，但用户从外部站点导航至URL时（例如通过链接）除外

> cookie前缀 

有两个前缀可以使用

- __Host-

  如果 cookie 名称具有此前缀，则仅当它也用 Secure 属性标记，是从安全来源发送的，不包括 Domain 属性，并将 Path 属性设置为 / 时，它才在 Set-Cookie 标头中接受。这样，这些 cookie 可以被视为 "domain-locked”

- __Secure-

  如果 cookie 名称具有此前缀，则仅当它也用 Secure 属性标记，是从安全来源发送的，它才在 Set-Cookie 标头中接受。该前缀限制要弱于 __Host- 前缀








