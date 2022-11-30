

## 兼容样式问题汇总

### 父级容器圆角隐藏失效

> ios手机中，父容器设置圆角，并overflow hidden，但是子元素滚动时还是会漏出直角

```css
.parent {
  width: 100%;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
  /* 兼容部分Ios手机 */
  transform: rotate(0);
}
.children {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

```