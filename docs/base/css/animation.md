

# 收藏动画效果

可以参考[animate.css](https://www.dowebok.com/demo/2014/98/)网站的动画样式

## 弹窗出现动画

```css
.fadeInAni {
  animation: fadeInAni 0.4s forwards;
}

@keyframes fadeInAni {
  0% {
    transform: scale3d(0.5, 0.5, 0.5);
    opacity: 0;
  }
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
  }
  100% {
    transform: scale3d(1, 1, 1);
    -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 1;
  }
}
```

## 左右摆动动画

```css
.tada{
  transform: tada 1s .2s ease infinite;
}
@keyframes tada {
  0%{
    transform: scale(1);
  }
  10%, 20%{
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90%{
    transform: scale(1.02) rotate(3deg);
  }
  40%, 60%, 80%{
    transform: scale(1.02) rotate(-3deg);
  }
  100%{
    transform: scale(1) rotate(0);
  }
};
```
