
更新时间：{docsify-updated}



# CSS

## 盒模型

| 标准盒模型 | 怪异盒模型 |
| -- | -- |
| box-sizing: content-box | box-sizing: border-box |
| width, height只计算content, 不计算padding, border | width, height 计算content, border, padding |

## 选择器

| 序号 | 名称 | 示例 |
| :--: | :--: | :--: |
| 1 | ID选择器 | #demo |
| 2 | Class选择器 | .demo |
| 3 | 标签选择器 | div |
| 4 | 后代选择器 | div  p |
| 5 | 相邻后代选择器 | ul>li |
| 6 | 兄弟选择器 | li~a |
| 7 | 相邻兄弟选择器 | li+a |
| 8 | 属性选择器 | input[type="number"] |
| 9 | 伪类选择器 | :active |
| 10 | 伪元素选择器 | ::after or ::before |
| 11 | 通配符选择器 | * |

其中伪类选择器包含以下格式：
- a:active
- a:link
- a:visited
- elem:hover
- elem:first-child
- elem:last-child
- elem:nth-of-type(n)
- elem:nth-child(n)
- elem:nth-last-child(n)
- elem:only-child
- elem:empty
- :not(elem)

## 伪类和伪元素的区别

伪类：已有元素处于Dom树无法描述的状态时，该元素称之为伪类。例如a:active，a:hover

伪元素：创建不存在于Dom树中的元素

## 属性继承

| 序号 | 属性分类 | 示例 |
| :--: | :--: | -- |
| 1 | 字体属性 | font |
| 2 | 文本属性 | text,line-height,word-spacing,letter-spacing,color |
| 3 | 表格属性 | -- |
| 4 | 列表属性 | list-style |
| 5 | 光标属性 | cursor |
| 6 | 元素可见性 | visibility |

## 自定义属性 Custom properties

```css
:root {
  --first-color: #fff;
  --second-color: #ddd;
}

.demo {
  color: var(--first-color);
}
.demo2 {
  color: var(--second-color);
}

```