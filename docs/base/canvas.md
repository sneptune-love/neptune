更新时间：{docsify-updated}

## canvas介绍

Canvas API提供了一个通过Javascript和HTML的\<canvas>元素来绘制图形的方式，可用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理方面

```html
<canvas id="canvas"></canvas>
```
| 属性 | 值 | 释义 |
| -- | -- | -- |
| width | 100 | 宽度，默认为300px |
| height | 100 | 高度，默认为150px |

`画布起点为左上角(0, 0)位置`

## canvas上下文context

```js
var canvas = document.getElementById("canvas");
// 获取canvas上下文
var ctx = canvas.getContext("2d");

```

### 绘制文本

- ctx.fillText(text, x, y, [maxWidth])

  在(x,y)位置绘制（填充）文本。

  maxWidth: 可选值，绘制的最大宽度。如果指定了值，并且经过计算字符串的值比最大宽度还要宽，字体为了适应会水平缩放（如果通过水平缩放当前字体，可以进行有效的或者合理可读的处理）或者使用小号的字体

- ctx.strokeText()

  在(x,y)位置绘制（描边）文本。

- ctx.measureText()

  返回 TextMetrics 对象。

### 线型

- ctx.lineWidth

  线的宽度。默认 1.0

- ctx.lineCap

  线末端的类型。 允许的值： butt (默认), round, square.

- ctx.lineJoin

  定义两线相交拐点的类型。允许的值：round, bevel, miter(默认)。

- ctx.miterLimit

  斜接面限制比例。默认 10。

- ctx.getLineDash()

  返回当前线段样式的数组，数组包含一组数量为偶数的非负数数字。

- ctx.setLineDash()

  设置当前的线段样式。

- ctx.lineDashOffset

  描述在哪里开始绘制线段。


### 文本样式

- ctx.font

  字体设置。 默认值 10px sans-serif。

- ctx.textAlign

  文本对齐设置。 允许的值： start (默认), end, left, right 或 center.

- ctx.textBaseline

  基线对齐设置。 允许的值： top, hanging, middle, alphabetic (默认),ideographic, bottom.

- ctx.direction

  文本的方向。 允许的值： ltr, rtl, inherit (默认).



### 绘制形状

- ctx.fillRect(x, y, width, height)

  绘制可填充的矩形。

- ctx.strokeRect(x, y, width, height)

  绘制矩形边框。

- ctx.clearRect(x, y, width, height)

  清除指定矩形区域，让清除部分完全透明。

### 填充和描边样式

- ctx.fillStyle

  图形内部的颜色和样式。 默认 #000 (黑色).

- ctx.strokeStyle

  图形边线的颜色和样式。 默认 #000 (黑色).


### 渐变和图案

- ctx.createLinearGradient()

  创建一个沿着参数坐标指定的线的线性渐变。

- ctx.createRadialGradient()

  创建一个沿着参数坐标指定的线的放射性性渐变。

- ctx.createPattern()

  使用指定的图片 (a CanvasImageSource)创建图案。通过 repetition 变量指定的方向上重复源图片。此方法返回 CanvasPattern对象。


### 阴影

- ctx.shadowBlur

  描述模糊效果。 默认 0

- ctx.shadowColor

  阴影的颜色。 默认fully-transparent black.

- ctx.shadowOffsetX

  阴影水平方向的偏移量。 默认 0.

- ctx.shadowOffsetY

  阴影垂直方向的偏移量。 默认 0.


### 路径绘制

- ctx.beginPath()

  新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

- ctx.closePath()

  闭合路径之后图形绘制命令又重新指向到上下文中。

- ctx.moveTo(x, y)

  将一个新的子路径的起始点移动到(x，y)坐标。

- ctx.lineTo(x, y)

  使用直线连接子路径的最后的点到x,y坐标。

- ctx.bezierCurveTo()

  添加一个3次贝赛尔曲线路径。该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。

- ctx.quadraticCurveTo()

  添加一个2次贝赛尔曲线路径。

- ctx.arc()

  绘制一段圆弧路径， 圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。

- ctx.arcTo()

  根据控制点和半径绘制圆弧路径，使用当前的描点(前一个moveTo或lineTo等函数的止点)。根据当前描点与给定的控制点1连接的直线，和控制点1与控制点2连接的直线，作为使用指定半径的圆的切线，画出两条切线之间的弧线路径。

- ctx.ellipse() - 实验性，未正式纳入标准，注意浏览器兼容性

  添加一个椭圆路径，椭圆的圆心在（x,y）位置，半径分别是radiusX 和 radiusY ，按照anticlockwise （默认顺时针）指定的方向，从 startAngle  开始绘制，到 endAngle 结束。

- ctx.rect()

  创建一个矩形路径，矩形的起点位置是 (x, y) ，尺寸为 width 和 height。

- ctx.stroke()

  通过线条来绘制图形轮廓。

- ctx.fill()

  通过填充路径的内容区域生成实心的图形。

- ctx.drawFocusIfNeeded()

  如果给定的元素获取了焦点，那么此方法会在当前的路径绘制一个焦点。

- ctx.scrollPathIntoView()

  将当前或给定的路径滚动到窗口。

- ctx.clip()

  从当前路径创建一个剪切路径。在  clip() 调用之后，绘制的所有信息只会出现在剪切路径内部。

- ctx.isPointInPath()

  判断当前路径是否包含检测点

- ctx.isPointInStroke()

  判断检测点是否在路径的描边线上。


`注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。`


### 变换

- ctx.currentTransform

  当前的变换矩阵 (SVGMatrix 对象)。

- ctx.rotate()

  在变换矩阵中增加旋转，角度变量表示一个顺时针旋转角度并且用弧度表示。

- ctx.scale()

  根据 x 水平方向和 y 垂直方向，为canvas 单位添加缩放变换。

- ctx.translate()

  通过在网格中移动 canvas 和 canvas 原点 x 水平方向、原点 y 垂直方向，添加平移变换。

- ctx.transform()

  使用方法参数描述的矩阵多次叠加当前的变换矩阵。

- ctx.setTransform()

  重新设置当前的变换为单位矩阵，并使用同样的变量调用 transform() 方法。

- ctx.resetTransform() - 实验性，未正式纳入标准，注意浏览器兼容性

  使用单位矩阵重新设置当前的变换。

### 合成

- ctx.globalAlpha

  在合成到 canvas 之前，设置图形和图像透明度的值。默认 1.0 (不透明)。

- ctx.globalCompositeOperation

  通过 globalAlpha 应用，设置如何在已经存在的位图上绘制图形和图像。


### 图像处理

- ctx.drawImage()

  绘制指定的图片。该方法有多种格式，提供了很大的使用灵活性。

- ctx.createImageData()

  使用指定的尺寸，创建一个新的、空白的 ImageData 对象。所有的像素在新对象中都是透明的。

- ctx.getImageData()

  返回一个 ImageData 对象，用来描述canvas区域隐含的像素数据，这个区域通过矩形表示，起始点为(sx, sy)、宽为sw、高为sh。

- ctx.putImageData()

  将数据从已有的 ImageData 绘制到位图上。 如果提供了脏矩形，只能绘制矩形的像素。 


### canvas状态

- ctx.save()

  恢复到最近的绘制样式状态，此状态是通过 save() 保存到”状态栈“中最新的元素。

- ctx.restore()

  使用栈保存当前的绘画样式状态，你可以使用 restore() 恢复任何改变。


### 点击区域

- ctx.addHitRegion() - 实验型

  给 canvas 添加点击区域。

- ctx.removeHitRegion() - 实验型

  从 canvas 中删除指定 id  的点击区域。

- ctx.clearHitRegions() - 实验型

  从 canvas 中删除所有的点击区域。
  

### Canvas和SVG的区别

| Canvas | SVG |
| --| -- |
| 较新，Apple私有技术发展而来 | 历史悠久，2003年成为W3C标准 |
| 像素，只能脚本驱动，动态渲染和大数据量绘制 | 矢量，XML，CSS，元素操作；适合静态图标展示，高保真文档查看和打印的应用场景 |
| 功能简单，2D绘图 | 功能丰富，各种图形、滤镜、动画等 |
| 主流浏览器，IE9+ | 主流浏览器，IE9+，其它SVG阅读器 |

