

`正则语法介绍`

## 特殊字符

| 特殊字符| 释义 |
| :--: | :-- |
| \ | b是非特殊字符<br><br>\b用于标记b是特殊字符，表示字符边界<br><br>b匹配小写字母b，字面量意思 <br><br>特殊字符前面加\，表示该字符无特殊作用 |
| ^ | 匹配输入的开始 |
| $ | 匹配输入的结束 |
| * | 匹配前一个表达式0次或者多次 |
| + | 匹配前一个表达式1次或者多次 |
| ? | 匹配前面一个表达式0次或者1次 <br><br> 如果紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪（匹配尽量少的字符），和缺省使用的贪婪模式（匹配尽可能多的字符）正好相反|
| . | 匹配除换行符之外的任意单一字符 |
| (x) | 捕获括号，匹配x并记住匹配项 |
| (?:x) | 匹配x，但不记住匹配项 |
| x(?=y) | （先行断言）匹配x，并且仅当x后面是y的时候，匹配生效，y不是匹配结果 |
| (?<=y)x | （后行断言）匹配x，并且仅当x前面是y的时候，匹配生效，y不是匹配结果 |
| x(?!y) | （正向否定查找）匹配x，并且仅当x后面不是y的时候，匹配生效，y不是匹配结果 |
| (?<!y)x | （反向否定查找）匹配x，并且仅当x前面不是y的时候，匹配生效，y不是匹配结果 |
| x|y | 匹配x或者y |
| x{n} | 匹配x连续出现n次 |
| x{n,} | 匹配x连续出现至少n次 |
| x{n, m} | 匹配x连续出现至少n次，至多m次 |
| [xyz] | 字符集合，匹配集合内的任意字符 |
| [^xyz] | 反向字符集合，匹配任意不在集合内的字符 |
| [\b] | 匹配一个退格 |
| \b | 匹配字符边界 |
| \B | 匹配非字符边界 |
| \d | 匹配数字，等价于[0-9] |
| \D | 匹配非数字字符，等价于[^0-9] |
| \f | 匹配换页符 |
| \n | 匹配换行符 |
| \r | 匹配回车符 |
| \s | 匹配一个空白字符，比如换行符，换页符，空格，制表符 |
| \S | 匹配一个非空白字符 |
| \t | 匹配水平制表符 |
| \v | 匹配垂直制表符 |
| \w | 匹配一个单字字符（字母，数字和下划线），等价于[A-Za-z0-9_] |
| \W | 匹配一个非单字字符，等价于[^A-Za-z0-9_] |
| \n | 返回第n个捕获的内容 |
| \0 | 匹配NULL字符 |

## 标志

| 标志位 | 释义 |
| -- | -- |
| g | 全局搜索 |
| i | 不区分大小写搜索 |
| m | 多行搜索 |
| s | 允许.匹配换行符 |
| u | 使用unicode码的模式搜索 |
| y | 执行粘性(strick)搜索，匹配从目标字符串的位置开始 |

## 基础方法

### 正则方法

- exec

一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）

- test

一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false

### 字符串方法

- match

一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null

- matchAll

一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）

- search

一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1

- replace

一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串

- split

一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法

### 参考文档

[MDN-RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)