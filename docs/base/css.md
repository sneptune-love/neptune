


`  CSS 层叠样式表（Cascading Style Sheets） `

[收藏样式](./css/collect)

## 书写规范

> 样式书写自上而下，权重相同的情况下，后面的样式会覆盖前面的样式

## 优先级

> 浏览器根据优先级来选择对应的样式来渲染元素

1、<b>千位：</b>内联样式，1000（例：\<p style="color: #333;">\</p>）

2、<b>百位：</b>ID选择器，0100（例：#app）

3、<b>十位：</b>类选择器，属性选择器，伪类，0010（例：.app, input[type="text"]，span:hover）

4、<b>个位：</b>元素，伪元素选择器，0001（例：p, p::after）

```注：通用类选择器（*），组合符（+, >, ~）和否定伪类不会影响优先级```

<p>
    <code class="tips">Warning：在进行计算的时候不允许进位，即无论多少个类选择器，都无法比一个ID选择器优先级高</code>
</p>

| 示例 | 千位 | 百位 | 十位 | 个位 | 优先级 | 
| :-- | :--: | :--: | :--: | :--: | :--: | 
| h1 | 0 | 0 | 0 | 1 | 0001 | 
| h1 + p::first-letter | 0 | 0 | 0 | 3 | 0003 | 
| .app > li > input[type="text"] | 0 | 0 | 2 | 2 | 0022 | 
| \<p style="color: #333;">\</p> | 1 | 0 | 0 | 0 | 1000 | 

还有一种样式`!imprtant(优先级最高)`，正常情况不建议使用，会对样式维护造成很大的困扰

## 继承

> 一些设置在父元素上的样式，可以被子元素继承

控制继承的属性

1、inherit（继承父元素样式）

2、initial（将其属性设置为浏览器默认值）

3、unset（将属性重置为自然值，如果自然值是inherit，则就是inherit，否则就是initial）

## 盒模型

> box-sizing属性介绍

- content-box（默认值，标准盒子模型）

    实际宽度 = width + border + padding   

- border-box（怪异盒模型）

    实际宽度 = width
    
    内容区域 = width - border - padding
    
## 块级化格式上下文（Block Formatting Context, BFC）

> 边距折叠，有三种情况

1、同一层相邻元素之间

有两个块A，B, A在B的上面，A { margin-bottom: 10px; } B { margin-top: 20px; }

这个时候，会发生边距折叠，AB上下的距离只有20px，取单个边距最大的值

```解决办法：为AB元素中任意一个元素添加一个父元素，增加overflow: hidden;```


2、没有内容将父元素和后代元素分开

有一个A盒子，里面有个子元素B盒子，A { margin-top: 10px; } B{ margin-top: 20px; }

这个时候，也会发生上边距折叠

```解决办法：1、给A创建BFC 2、给A添加边框或者内边距或者行内内容处于B上方```

如果A { margin-bottom: 10px; } B { margin-bottom: 20px; }

这个时候，也会发生下边距折叠

```解决办法：1、给A创建BFC  2、给A添加边框或者内边距或者行内内容处于B下方 3、给A设置高度，最小高度```


> 如何创建BFC

- 根元素

- 浮动元素（float的属性值不为none）

- 绝对定位（position为absolute或者fixed）

- 行内块元素（display: inline-block;）

- 表格单元格（display: table-cell;）

- overflow不为visible

- display为flow-root

- 弹性元素（display: flex; or display: inline-flex;）

- 网格元素（display: grid; or display: inline-grid;）


## 块级、行内元素

```css
// 块级元素
常用标签：address, article, aside, audio, blockquote, canvas, dd, div, dl, footer, form, h1-h6, header, hr, li, ol, p, pre, section, table, ul, video
不常用标签：fieldset, figure, figcaption, hgroup, output, tfoot

// 行内元素
b, big, i, small, tt, abbr, cite, code, dfn, em, kbd, strong, var, samp, a, bdo, br, img, q, script, span, button, input, label, select, textarea

```

- 行内元素margin值只有左右才会生效

- p标签内部不能嵌套div标签

## 选择器

> 指定网页上我们想要样式化的元素

| 序号 | 分类 | 示例 |
| -- | -- | -- |
| 1 | ID选择器 | #name {} |
| 2 | 类选择器 | .name {} |
| 3 | 伪类选择器 | a:hover {} |
| 4 | 标签属性选择器 | input[type="text"] {} |
| 5 | 元素选择器 | p {} |
| 6 | 伪元素选择器 | p::first-letter {} |
| 7 | 通配选择器 | * {} |
| 8 | 后代选择器 | p a {} |
| 9 | 子代选择器 | p > a {} |
| 10 | 相邻兄弟选择器 | p + a {} |
| 11 | 通用兄弟选择器 | p ~ a {} |

例如常用的:nth-of-type(n) 属于伪类选择器，大致有如下：

- <b>LVHA伪类</b>

  为了可以正确地渲染链接元素的样式，:link伪类选择器应当放在其他伪类选择器的前面，并且遵循LVHA的先后顺序，即：:link — :visited — :hover — :active

  | 伪类 | 释义 |
  | -- | -- |
  | :link | 是用来选中元素当中的链接。它将会选中所有尚未访问的链接，包括那些已经给定了其他伪类选择器的链接 |
  | :visited | 用户已访问过的链接 |
  | :hover | 鼠标悬停状态 |
  | :active | 用户激活的元素，例如鼠标点击按键和松下按键之间的状态 |

- <b>父子兄弟选择器</b>

  | 伪类 | 释义 |
  | -- | -- |
  | :first-child | 一组兄弟元素中的第一个 |
  | :first-of-type | 一组兄弟元素中的第一个，多用于嵌套场景和通配符一起搭配使用 |
  | :last-child | 父元素最后一个子元素 |
  | :last-of-type | 给定类型元素的父元素列表中的最后一个给定类型元素 |
  | :nth-child(n) | 找到当前兄弟元素的第n个元素 |
  | :nth-last-child(n) | 从兄弟节点中从后往前匹配处于某些位置的元素 |
  | :nth-last-of-type(n) |  在兄弟节点中从后往前匹配第n个元素 |
  | :nth-of-type(n) |  在兄弟节点中从前往后匹配第n个元素 |
  | :only-child |  匹配没有任何兄弟元素的元素 |
  | :only-of-type |  代表了任意一个元素，这个元素没有其他相同类型的兄弟元素 |
  

- <b>打印相关</b>

  | 伪类 | 释义 |
  | -- | -- |
  | :first | 打印文档时，第一页的样式。不能改变所有样式，只对部分样式生效（margin, window, orphan(打印的孤行)等）。 |
  | :left | 需要和@规则  @page 配套使用, 对打印文档的左侧页设置CSS样式 |
  | :right | 需要和@规则  @page 配套使用, 对打印文档的右侧页设置CSS样式 |


- <b>其它</b>
    
  | 伪类 | 释义 |
  | -- | -- |
  | :checked | radio或者select中的option选中状态 |
  | :default | 默认表单元素，应用于checkbox, radio, button, option |
  | :disabled | 被禁用的元素 |
  | :empty | 没有子元素的元素。子元素可以是元素节点或者文本（包括空格），注释或者处理指令不包含在内 |
  | :enabled | 启用的元素 |
  | :focus | 聚焦元素，仅适用于元素本身 |
  | :focus-within | 元素自身或者子元素获取焦点，适用于父级元素和元素本身 |
  | :indeterminate | 不确定的表单元素 |
  | :in-range | 处于min-max之间的状态，用于表单元素 |
  | :out-of-range | 处于min-max之外的状态，用于表单元素 |
  | :invalid | 未通过校验的表单元素，多用于input或者其它form元素 |
  | :valid | 通过校验的表单元素，多用于input或者其它form元素 |
  | :lang(en) | 通过元素语言来匹配页面元素 |
  | :not(p) | 反选伪类，匹配不符合一组选择器的元素 |
  | :optional | 没有required属性的input, select, textarea |
  | :required | 设置required属性的input, select, textarea |
  | :read-only | 不能被用户编辑的元素，不仅仅只是input, 还有设置contenteditable属性的p标签 |
  | :read-write | 可以被用户编辑的元素 |
  | :root | 匹配文档树的根元素html [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root) |
  | :scope | 它表示作为选择器要匹配的参考点的元素 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope) |
  | :target | 代表一个唯一的页面元素(目标元素)，其id 与当前URL片段匹配 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target) |
  



