

## 收藏样式


### 文本隐藏

> 单行文本隐藏

```css
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

> 多行文本隐藏

```css
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
```

### 三角绘制

red对应的是三角形的底边

```css
width: 0;
height: 0;
border-style: solid;
border-width: 100px;
border-color: red transparent transparent transparent;
```


### ios 安全区域适配

```css
padding-top: calc(constant(safe-area-inset-top));
padding-top: calc(env(safe-area-inset-top));

padding-bottom: calc(110px + 25px + constant(safe-area-inset-bottom));
padding-bottom: calc(110px + 25px + env(safe-area-inset-bottom));
```

### ios 设备滚动优化

启动硬件加速，使滑动流畅

```css
webkit-overflow-scrolling: touch
```