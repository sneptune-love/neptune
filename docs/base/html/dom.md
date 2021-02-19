
更新时间：{docsify-updated}

# Dom节点类型

| nodeType| 释义 |
| :--: | :-- |
| 1 | 元素节点 |
| 2 | 属性节点 |
| 3 | 文字节点 |
| 4 | CDATA部分，不会由解析器解析的文本 |
| 5 | 实体引用 |
| 6 | 实体 |
| 7 | 处理指令 |
| 8 | 注释 |
| 9 | 根节点 |
| 10 | 为文档定义的实体提供接口 |
| 11 | 轻量级的Document对象，能容纳文档的某个部分 |
| 12 | DTD中声明的符号 |

# Dom操作方法

```js

<div id="dom"></div>

var dom = document.getElementById('dom');

var childDom = document.createElement('p');

```

- ```document.createElement```   → 创建元素节点

- ```dom.appendChild(childDom)``` → 末尾插入子节点

- ```dom.insertBefore(childDom)``` → 开头插入子节点

- ```dom.cloneNode(Boolean)``` → Boolean - 1.默认false 仅复制该节点, 2.true 复制该节点，并包含所有子节点

- ```dom.removeChild(childDom)``` → 删除子节点

- ```dom.parentNode``` → 父节点

- ```dom.nextSibling``` → 下一个节点

- ```dom.nexElementSibling``` → 下一个元素节点

- ```dom.previousSibling``` → 上一个节点

- ```dom.previousElementSibling``` → 上一个元素节点

- ```dom.firstChild``` → 第一个子节点

- ```dom.firstElementChild``` → 第一个元素子节点

- ```dom.lastChild``` → 最后一个子节点

- ```dom.lastElementChild``` → 最后一个元素子节点

- ```dom.childNodes``` → 所有子节点

- ```dom.children``` → 所有元素子节点

- ```dom.getAttribute('className')``` → 获取元素属性

- ```dom.setAttribute('className', 'abc')``` → 设置元素属性

- ```dom.removeAttribute('data-id')``` → 移除元素属性






