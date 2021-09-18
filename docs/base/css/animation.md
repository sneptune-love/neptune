# 收藏动画效果

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

## 
