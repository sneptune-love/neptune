

# Scss语法

[Scss 官方文档](https://sass-lang.com/documentation/at-rules/import)

## Variables 变量

```css
$blueColor: blue;
.t1 {
  color: $blueColor;
}
```

## Nesting 嵌套语法

```css
.test1 {
  transition {
    duration: 2s;
    delay: 2s;
  }
}

=> css
.test1 {
  transition-duration: 2s;
  transition-delay: 2s;
}


.test2 {
  margin: auto {
    bottom: 1px;
    left: 2px;
  }
}

=> css
.test2 {
  margin: auto;
  margin-bottom: 1px;
  margin-left: 2px;
}

```

## Interpolation 封装引用

```css
@mixin flex-center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mask-wrapper {
  @include flex-center();
}
```

## Parent Selector 父级选择 

```css
.demo {
  &.a {
    color: #fff;
  }
  &-t1 {
    color: #ddd;
    &_b1 {
      color: #000;
    }
  }
}

=> css

.demo.a {
  color: #fff;
}
.demo-t1 {
  color: #ddd;
}
.demo-t1_b1 {
  color: #000;
}
```

## PlaceHolder Selector 占位符选择

```css
%tools {
  width: 100px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
}
.demo {
  @extend %tools;
}

=> css
.demo {
  width: 100px;
  height: 20px;
}
.demo:hover {
  cursor: pointer;
}
```

## At-Rules

- @use  👉🏻  命名空间 -- 创建命名空间，为加载的文件创建作用域，并仅在该文件中使用它；但是，这会造成变量和函数在 CSS 框架等中不可见的情况

- @forward  👉🏻  使变量和函数在加载该文件的文件中可见

- @import  👉🏻  引入其他样式表

- @mixin and @include  👉🏻  @mixin 定义可重复使用的样式 || @include 引入定义的样式

- @function  👉🏻  定义可在表达式中使用的自定义函数

- @extend  👉🏻  从其它选择器继承样式

- @error  👉🏻  编译失败打印错误信息

- @warn  👉🏻  编译过程中打印警告信息

- @debug  👉🏻  调试中打印信息

- @at-root  👉🏻  将样式放置于样式的跟目录中