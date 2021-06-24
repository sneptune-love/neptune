
更新时间：{docsify-updated}

`  CSS 层叠样式表（Cascading Style Sheets） `

# css基础知识

## 层叠

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

还有一种样式!imprtant，正常情况不建议使用，会对样式维护造成很大的困扰

## 继承

> 一些设置在父元素上的样式，可以被子元素继承

控制继承的属性

1、inherit

继承父元素样式

2、initial

将其属性设置为浏览器默认值

3、unset

将属性重置为自然值，如果自然值是inherit，则就是inherit，否则就是initial

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


## 盒模型

> box-sizing属性介绍

- content-box（默认值，标准盒子模型）

    实际宽度 = width + border + padding   

- border-box（怪异盒模型）

    实际宽度 = width
    
    内容区域 = width - border - padding
    

# 扩展知识
    
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

