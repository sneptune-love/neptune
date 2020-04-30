

更新时间：{docsify-updated}

# commit规范

commit是其实是一种记录改动的过程，不同的项目不同的团队，都会有不同的记录规范，但最终它们的目的都是为了使这一记录清晰明了；

## commit的优点

<b>(1) 在查看历史信息的时候，能够一目了然，以vue为例</b>

<img src="https://powercandy.github.io/neptune/static/screenshot/WechatIMG212.png" alt="" style="width: 600px;">

<b>(2) 在查看历史信息时，可以查看指定类型的信息</b>

比如我在vue项目下输入如下命令：

```bash
git log HEAD --grep feat
```

<img src="https://powercandy.github.io/neptune/static/screenshot/WX20200429-200126@2x.png" alt="" style="width: 600px;">


<b>(3) 规范的commit信息，在生成change log时会更加优雅</b>

<img src="https://powercandy.github.io/neptune/static/screenshot/WX20200429-202718@2x.png" alt="" style="width: 600px;">



下面介绍一下我自己觉得比较合适的一套规范

## Commit Message的格式

commit message规范信息包含header, body, footer三个部分

```
<type>(<scope>): <subject>
空行
<body>
空行
<footer>
```
其中header是必须的，body, footer可以省略。（PS：重要的改动信息建议把body, footer补上，一般的改动，header即可）

### header

header部分包含三个内容：type(必须), scope(可选), subject(必须)，为了避免换行，建议不要超过72个字符或者100个字符


#### type

commit提交的类型，有以下多种形式：

- feat: 新功能

- fix: 修复bug

- docs: 文档修改

- style: 格式变化，不影响正常逻辑

- refactor: 重构

- test: 测试用例修改

- chore: 构建过程或者工具配置调整

- revert: 用于撤销上之前的commit信息

- misc: 不知道归到哪种类型，可以使用这个（PS：不要滥用哦😀）

#### scope

scope用于说明commit影响的范围, 比如说你改动的是eslint规则，那么你可以这样写 chore: (eslint) change eslint rules。

#### subject

对commit提交的简短描述，不超过50个字符（PS：写多了，看的累🤩，而且不优雅）。


### body

body信息是对commit的详细描述，可以分成多行；如果有哪些记录需要你重点关注的，你可以多写点。

### footer

结束语，大多用于关闭issues

## 如何强制校验commit信息

> 推荐一个插件[commitlint](https://github.com/conventional-changelog/commitlint#readme)

安装依赖，生成commitlint全局命令
```bash
sudo npm i @commitlint/config-conventional @commitlint/cli -g
```

配置config文件，项目根目录下创建commitlint.config.js，内容如下

```js
module.exports = {extends: ['@commitlint/config-conventional']}
```

其配置文件如下：

```js
module.exports = {
	parserPreset: 'conventional-changelog-conventionalcommits',
	rules: {
		'body-leading-blank': [1, 'always'],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [2, 'always', 72],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'improvement',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			]
		]
	}
};
```

当然你也可以自己配置type类型和校验规则，只需在commitlint.config.js文件中配置即可

测试commitlint命令

```bash
echo 'a' | commitlint  // 会有错误抛出
```

package.json中增加husky，与dep同级

```json
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
```

> 安装[husky](https://github.com/typicode/husky#readme)

```
npm i husky --save-dev 
```

注意：作者下载的是4.2.5版本husky，需要node版本大于10，git版本大于2.13.0；检查.git目录下hooks中是否生成了不带.sample文件后缀的文件，如果有则代表安装成功，否则安装失败





## 如何生成change log文件

change log是每一个版本出现时，和上个版本比较的差异，其中包含的内容如下：

 - type类型为fix和feat，其它类型则根据作者来决定是否生成在该文件中

> 推荐一个插件[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#readme)

```
$ npm install -g conventional-changelog-cli
$ cd my-project
$ conventional-changelog -p angular -i CHANGELOG.md -s
```
CHANGELOG.md文件预览


<img src="https://powercandy.github.io/neptune/static/screenshot/WX20200429-203209@2x.png" alt="" style="width: 600px;">