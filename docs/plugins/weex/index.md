

# weex


## Android环境构建

**前期准备**

- 安装JDK（version >= 1.7）并配置环境变量（JAVA_HOME）

- 安装Android SDK 并配置环境变量(ANDROID_HOME)
 
- Android SDK version 23 (compileSdkVersion in build.gradle)
 
- SDK build tools version 23.0.1 (buildToolsVersion in build.gradle)
 
- Android Support Repository >= 17 (for Android Support Library)

JDK下载地址：
> http://www.oracle.com/technetwork/java/javase/downloads/index.html

Android Studio下载地址：
> https://developer.android.com/studio/install.html

环境变量配置：

    1. JAVA环境变量设置：
    
	// Jdk 是java development kit，是java的开发工具包
	
	新建系统变量JAVA_HOME：C:\Program Files(x86)\Java\jdk1.8.0_144

	// Jre 是java runtime environment, 是java程序的运行环境
	
	新建JRE_HOME系统变量：C:\Program Files (x86)\Java\jre1.8.0_144

	// 指定类搜索路径
	
	新建CLASSPATH系统变量：.;%JAVA_HOME%\lib;%JRE_HOME%\lib
	
	PATH系统变量里添加：.;%JAVA_HOME%\bin;%JRE_HOME%\bin
	
	2. Android环境变量配置
	
    新建系统变量ANDROID_HOME -> D:\Android-sdk\

	PATH系统变量里添加：D:\Android-sdk\platforms;D:\Android-sdk\platform-tools


## weex简介

>  Weex 是一个使用 Web 开发体验来开发高性能原生应用的框架。

## Weex优点

1. 在Ios和Android上都实现了一个渲染引擎，并提供了一套基础的内置组件，渲染出来的都是原生组件
2. 提供了一套基础的内置模块，可以通过这些模块来调用一些原生方法
3. 编写一次代码，三端共用（Web, Android, Ios）
4. Weex将Vue, Rax作为其内置的前段框架（Vue.js, Rax都已经集成了Weex SDK, 你不需要再额外引用）

## Weex使用

1. 安装全局的weex-toolkit, 这条命令会在命令行环境中注册一个weex命令或者安装全局的weexpack
    
```
npm install weex-toolkit -g || npm install weexpack -g
```
2. 使用weex或者weexpack命令创建一个模板项目

```
weex create template-app || weexpack create template-app
```
3. 添加特定平台, Android 或者 Ios

```
weex platform add ios || weex platform add android
	
weexpack platform add ios || weexpack platform add android
```
4. 在虚拟机上或者真机上调试项目

```
weex run ios || weex run android || weex run web

weexpack run ios || weexpack run android || weexpack run web
```
5. 打包Apk文件

```
weex build android || weex build ios

weexpack build android || weexpack build ios
```

## Weex使用问题

##### 一、样式问题

```
1. 不支持简写，类似margin: 1px 1px 1px 1px; 是不支持的

2. Android下的view标签是有白色默认颜色的, Ios则无

3. weex使用750 * 1334 作为适配尺寸, 实际渲染时由于浮点数的误差可能会存在几个px的误差，出现细线等样式问题，可通过加减几个px来解决

4. css嵌套的写法会导致样式失效，即使使用了预处理器

5. box-shadow仅支持ios

6. 只支持px写法

7. 在weex中，flexbox是唯一的布局模式，所以你不需要手动添加display: flex

8. weex不支持z-index设置元素层级关系，但靠后的元素层级更高

9. 不支持percentage单位，如50%
```
##### 二、本地开发问题

```
1. 快速启动项目后，会自动在浏览器上打开项目地址，但是windows用户可能无法自动打开，究其原因是链接地址后面有一个字符'|'，使得open插件执行异常；
		
解决办法：手动打开地址或者将'|'更改为运行系统能识别的字符，例如'%'等等

```
##### 三、虚拟机问题

```
1. Android虚拟机安装完成后无法打开，问题可能是你电脑BIOS设置中的Inter Virtual Technology 没有打开，进入BIOS中将其打开即可

```

##### 四、打包APK文件问题

```
前提：升级到 Android Gradle-Plugin 3.0 + Gradle 4.0 

1. Warning:Configuration 'compile' is obsolete and has been replaced with 'implementation' and 'api'

    app -> build -> build.gradle ->将compile替换为api即可，换成api后记得加入javaCompileOptions配置，否则就会出现2中所示问题

2. Annotation processors must be explicitly declared now

    app -> build -> build.gradle -> defaultConifg中加入 javaCompileOptions { annotationProcessorOptions { includeCompileClasspath = true } }

3. Cannot set the value of read-only property 'outputFile' for ApkVariantOutputImpl_Decorated{apkData=Main{type=MAIN, fullName=debug, filters=[]}} of type com.android.build.gradle.internal.api.ApkVariantOutputImpl.

    原来用来重命名打包后的apk方法不能用了，使用如下方法即可

	app -> build -> build.gradle -> 
	
	 applicationVariants.all { variant ->
        variant.outputs.all {
            outputFileName = "weex-test.apk"
        }
    }

```

**建议：如果使用weex打包出现问题，找不到原因，可以使用android studio进行打包。错误直接可以定位到具体的文件，并且易排查！**