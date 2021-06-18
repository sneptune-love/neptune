


# css基础知识


## box-sizing属性

- content-box（默认值）

    实际宽度 = width + border + padding   

- border-box

    实际宽度 = width
    
    内容区域 = width - border - padding
    
## 块级化格式上下文（Block Formatting Context BFC）

> 边距折叠，有三种情况

1、同一层相邻元素之间

有两个块A，B, A在B的上面，A { margin-bottom: 10px; } B { margin-top: 20px; }

这个时候，会发生边距折叠，AB上下的距离只有20px，取单个边距最大的值

```解决办法：为AB元素中任意一个元素添加一个父元素，增加overflow: hidden;```


2、没有内容将父元素和后代元素分开

3、空的块级元素

解决办法：

1、BFC
2、

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

