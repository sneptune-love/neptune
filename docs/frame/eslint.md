
[官网查询](https://cn.eslint.org/docs/rules/)


行内标准参考：

1、[eslint-config-standard](https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json)

2、[eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md)

中英文文档

使用recommend规则，点击查看[自动配置规则](https://cn.eslint.org/docs/rules/)

## 项目开启eslint检测


配置文件.eslintrc.json如下：


```json
{
  // 指定当前目录为根目录，不会再往目录上层寻找eslint配置文件
  "root": true，
  // 指定Esprima作为解析器，默认使用Espree
  "parser": "esprima",
  "parserOptions": {
    // 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
    "ecmaVersion": 6,
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    "sourceType": "module",
    // 这是个对象，表示你想使用的额外的语言特性
    "ecmaFeatures": {
      // 允许在全局作用域下使用 return 语句
      "globalReturn": true,
      // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      "impliedStrict": true,
      // 启用 JSX
      "jsx": true,
      // 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
      "experimentalObjectRestSpread": true
    }
  },
  // 启用的规则及其各自的错误级别
  "rules": {
    // 缩进4个空格，错误类型error
    "indent": ["error", 4],
    // 使用双引号，错误类型error
    "quotes": ["error", "double"],
    // 使用分号，错误类型error
    "semi": ["error", "always"],
    // off -- 可以使用console
    "no-console": "off",
  },
  "overrides": {
    // 针对files中的文件，指定特殊的rules
    "files": ["*-test.js","*.spec.js"],
    "rules": {
      ...
    }
  }
}

```

## 为特定的文件指定处理器

例如，下面对 *.md 文件使用处理器 a-plugin/markdown

```json
{
  // 如果是eslint-plugin-a，则下面数组中可以直接写a
  "plugins": ["a-plugin"],
  "overrides": [
    {
      "files": ["*.md"],
      "processor": "a-plugin/markdown"
    }
  ]
}

```

## 环境指定

```json
// 在eslint配置文件中
{
  "env": {
    "browser": true,
    "node": true
  }
}

// 或者在package.json文件中
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
    "env": {
      "browser": true,
      "node": true
    }
  }
}

// 在YML文件中

---
  env:
    browser: true
    node: true

```

## 在文件中关闭eslint警告

```js
// 1、代码块注释 -- 关闭...内容区域的eslint检测警告
/* eslint-disable */
...
/* eslint-disable */
// 2、文件注释  -- 如果在整个文件范围内禁止规则出现警告，将 /* eslint-disable */ 块注释放在文件顶部：
// 3、行注释
alert('foo'); // eslint-disable-line
// 4、下一行注释
// eslint-disable-next-line
alert('foo');
```


## 忽略指定文件

创建.eslintignore文件

```js
**/*.js

```
