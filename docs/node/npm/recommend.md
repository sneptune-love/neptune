

## 推荐npm包

### patch-package

[传送门](https://www.npmjs.com/package/patch-package)

> 针对于修改后的依赖包，进行补丁，并在根目录下生成patch目录，下次重新安装时，直接安装补丁包


`安装方式`

```js

// npm 安装方式
npm i patch-package
// yarn 安装方式，安装postinstall-postinstall 的目的是确保yarn在remove后执行补丁操作
yarn add patch-package postinstall-postinstall

```

`package.json文件增加脚本`

```json
 "scripts": {
    "postinstall": "patch-package"
 }
```

`使用`

```js
npm patch-package package-name
npx patch-package package-name  (npm > 5.2)
yarn patch-package package-name

```
