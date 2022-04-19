


`Network 网络协议`

网络请求实现的常用方式有两种：

1、[XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

2、[Fetch API](https://fetch.spec.whatwg.org/#methods) 


## 请求内容

---

`请求request主要包含以下内容：`

- 请求方式: method
- 路径: path
- 协议: protocol 
- 请求头部: header
- 请求体: body，出现在post方式中

报文信息

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```
--- 

## 响应内容

`服务端响应response主要包含以下内容：`

- 协议: protocol
- 状态码: status code
- 状态信息: status message
- 响应头: header
- 响应体: body

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html
<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```

---


## 请求方式


| 序号 | 请求方式 | 释义 |
| :-- | :-- | :-- |
| 1 | get | 请求一个指定资源的表示形式，使用GET的请求应该只被用于获取数据 |
| 2 | head | 请求一个与GET请求的响应相同的响应，但没有响应体 |
| 3 | post | 用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用 |
| 4 | put | 用请求有效载荷替换目标资源的所有当前表示 |
| 5 | delete | 删除指定的资源 |
| 6 | connect | 建立一个到由目标资源标识的服务器的隧道 |
| 7 | options | 描述目标资源的通信选项 |
| 8 | trace(兼容性未知) | 沿着到目标资源的路径执行一个消息环回测试 |
| 9 | patch | 用于对资源应用部分修改 |


### get

> GET方法请求一个指定资源的表示形式，使用GET的请求应该只被用于获取数据

| -- | -- |
| -- | -- |
| 请求是否有主体 | 否 |
| 成功的响应是否有主体 | 是 |
| 安全 | 是 |
| 幂等 | 是 |
| 可缓存 | 是 |
| HTML表单是否支持 | 是 |

### Head

> HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体。

| -- | -- |
| -- | -- |
| 请求是否有主体 | 否 |
| 成功的响应是否有主体 | 否 |
| 安全 | 是 |
| 幂等 | 是 |
| 可缓存 | 是 |
| HTML表单是否支持 | 是 |



### post

> 用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用

| -- | -- |
| -- | -- |
| 请求是否有主体 | 是 |
| 成功的响应是否有主体 | 是 |
| 安全 | 否 |
| 幂等 | 否 |
| 可缓存 | 仅包含新鲜度时生效 |
| HTML表单是否支持 | 是 |


### put

> 用请求有效载荷替换目标资源的所有当前表示

| -- | -- |
| -- | -- |
| 请求是否有主体 | 是 |
| 成功的响应是否有主体 | 是 |
| 安全 | 否 |
| 幂等 | 是 |
| 可缓存 | 否 |
| HTML表单是否支持 | 否 |

### delete

> 删除指定的资源

| -- | -- |
| -- | -- |
| 请求是否有主体 | 可以有 |
| 成功的响应是否有主体 | 可以有 |
| 安全 | 否 |
| 幂等 | 是 |
| 可缓存 | 否 |
| HTML表单是否支持 | 否 |


### connect

> 建立一个到由目标资源标识的服务器的隧道

| -- | -- |
| -- | -- |
| 请求是否有主体 | 否 |
| 成功的响应是否有主体 | 是 |
| 安全 | 否 |
| 幂等 | 否 |
| 可缓存 | 否 |
| HTML表单是否支持 | 否 |


### options

> 描述目标资源的通信选项，一般在cors中会使用options来进行预检，看服务器是否接受该请求

| -- | -- |
| -- | -- |
| 请求是否有主体 | 否 |
| 成功的响应是否有主体 | 是 |
| 安全 | 是 |
| 幂等 | 是 |
| 可缓存 | 否 |
| HTML表单是否支持 | 否 |


### trace

`兼容性未知`

> 沿着到目标资源的路径执行一个消息环回测试

| -- | -- |
| -- | -- |
| 请求是否有主体 | 否 |
| 成功的响应是否有主体 | 否 |
| 安全 | 否 |
| 幂等 | 是 |
| 可缓存 | 否 |
| HTML表单是否支持 | 否 |

### patch

> 用于对资源应用部分修改

| -- | -- |
| -- | -- |
| 请求是否有主体 | 是 |
| 成功的响应是否有主体 | 否 |
| 安全 | 否 |
| 幂等 | 否 |
| 可缓存 | 否 |
| HTML表单是否支持 | 否 |


## Content-Type

```js
// 数据被编码成以 '&' 分隔的键-值对, 同时以 '=' 分隔键和值
application/x-www-form-urlencoded
//
multipart/form-data

// 
text/plain
// 
application/json


```


## 缓存

### 浏览器缓存和代理缓存

- Cache-control头

  - no-store（没有缓存）： 缓存中不得存储任何关于客户端请求和服务端响应的内容。每次由客户端发起的请求都会下载完整的响应内容
  
  - no-cache（缓存但重新验证）：服务器验证缓存时间，如果过期则重新请求，否则服务端返回304，客户端使用本地缓存
  
  - private（私有缓存）：只应用于浏览器私有缓存，无法被中间代理缓存
  
  - public（公共缓存）：中间代理例如cdn，可以进行缓存
  
  - max-age=31536000（过期设置）：资源能被缓存的最大时间
  
  - must-revalidate（验证方式）：验证状态，通过后才会使用缓存
  
- Pragma头：通常定义Pragma: no-cache以向后兼容基于Http/1.0的客户端 ，其作用和Cache-control: no-cache相同

### 新鲜度

> 当客户端已经有缓存资源的时候，再次请求会向服务端发送If-None-Match头或者If-Modified-Since头，服务端收到后，发现资源过期了，那么会返回新的资源到客户端。如果没有过期，则返回304

### ETags

> 缓存的强校验器，一般出现在服务端的响应头中

### Vary响应

> 当缓存服务器收到一个请求，只有当前的请求和缓存的请求头跟缓存的响应头里的Vary匹配时，才能使用缓存的响应


`注意：`

如过设置Cache-control: max-age=N，那么N就代表缓存时间

如果设置Cache-control: no-cache，服务端会去查找Expires属性，通过比较Expires的值和头里面的Date属性值来判断缓存是否有效；如果没有Expires，那么则会去寻找头里面的Last-Modified信息，其计算方式就是Date值减去Last-Modified的值然后除以10


## http

> 超文本传输协议

无状态协议 - 服务器不会保留两个请求间的数据（状态），但是可以通过cookie创建一个会话来进行状态管理

## https

> http的加密版本，通过SSL或者TSL来加密客户端和服务端的所有通信


## 跨域CORS

> Cross-origin sharing standard

以下场景会使用跨站点http请求

1、XMLHttpRequest或者Fetch APIs发起的跨源HTTP请求
2、css中的字体引入
3、WebGL贴图
4、canvas中的drawImage将image/video绘制到canvas中
5、使用images来创建css图形

## 浏览器跨域预检CORS

浏览器会先发送options请求，来检测该请求是否能够跨域请求。如果满足以下所有条件，则不会发送预检请求（不适合fetch api）

1、请求方式为get, post, head中的一种

2、header中只包含Accept、Accept-Language、Content-language、Content-type集合

3、Content-Type的属性必须为text/plain、multipart/form-data、application/x-www-form-urlencoded三者中的一种

4、请求中的任意 XMLHttpRequest 对象均没有注册任何事件监听器；XMLHttpRequest 对象可以使用 XMLHttpRequest.upload 属性访问

5、请求中没有使用 ReadableStream 对象


## 网络安全

### 点击劫持

攻击者对网页进行内容注入，引导用户点击注入的内容，从而达到窃取登录凭据或者安装恶意软件

### 跨站脚本（XSS）

攻击者恶意将客户端代码注入到网站中，让攻击者绕过访问控制并冒充用户

- 存储型xss攻击

注入的脚本永久存储至服务器端，当浏览器发送请求时，受害者会从服务器检索此恶意脚本

- 反射型xss攻击

用户点击恶意链接，提交特质表单或者浏览器恶意网站时，注入的代码会传播至易受攻击的网站

- 基于Dom的xss攻击

修改宿主客户端的原始Dom环境，payload被执行。客户端的代码执行依赖的底层环境被更改，导致执行不会按照宿主本身意愿进行。例如修改底层请求方式，进行接口拦截等其它操作

### 跨站请求伪造（CSRF）

攻击使用户的浏览器在未经用户同意或者不知情的情况下向后端执行请求

### 中间人

第三方拦截Web服务器和客户端的流量，并冒充Web服务器来捕获数据。例如我们使用的charles, whistle抓包工具，wifi助手等工具

### 会话劫持

用户与服务端验证的会话cookie会被恶意攻击者获取，通过该会话cookie冒充该用户来与服务端交互

