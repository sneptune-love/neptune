更新时间：{docsify-updated}

## Video


其属性如下：

- width, height

  你可以用属性控制视频的尺寸，也可以用 CSS 来控制视频尺寸。 无论使用哪种方式，视频都会保持它原始的长宽比 — 也叫做纵横比。如果你设置的尺寸没有保持视频原始长宽比，那么视频边框将会拉伸，而未被视频内容填充的部分，将会显示默认的背景颜色

- autoplay

  这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。建议不要应用这个属性在你的网站上，因为用户们会比较反感自动播放的媒体文件。

- loop

  这个属性可以让音频或者视频文件循环播放。同样不建议使用，除非有必要。

- muted

  这个属性会导致媒体播放时，默认关闭声音。

- poster

  这个属性指向了一个图像的URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。

- preload

  这个属性被用来缓冲较大的文件，有3个值可选：

    - none: 不缓冲
  
    - auto: 页面加载后缓存媒体文件
  
    - metadata: 仅缓冲文件的元数据
  
- buffered

  这个属性可以读取到哪段时间范围内的媒体被缓存了。该属性包含了一个 TimeRanges 对象。

- controls

  加上这个属性，Gecko 会提供用户控制，允许用户控制视频的播放，包括音量，跨帧，暂停/恢复播放。

- crossorigin

  该枚举属性指明抓取相关图片是否必须用到CORS（跨域资源共享）。 支持CORS的资源 可在 \<canvas> 元素中被重用，而不会被污染。允许的值如下：

    - anonymous
      
      跨域请求（即，使用 Origin: 的HTTP头）会被执行。但是不发送凭证（即，不发送cookie， X.509 证书或者 HTTP Basic 授权）。如果服务器不提供证书给源站点 (不设置 Access-Control-Allow-Origin: HTTP头)，图片会被 污染 并且它的使用会受限。
      
    - use-credentials
  
      跨域请求A cross-origin request (i.e. with Origin: HTTP header) 会被执行，且凭证会被发送 (即， 发送一个 cookie, 一个证书和HTTP Basic授权会被执行)。如果服务器不提供证书给源站点 (通过Access-Control-Allow-Credentials: HTTP 头)，图像会被 污染 且它的使用会受限。
    
  不加这个属性时，抓取资源不会走CORS请求(即，不会发送 Origin: HTTP 头)，保证其在 \<canvas> 元素中使用时不会被污染。如果指定非法值，会被当作指定了枚举关键字 anonymous 一样使用。 查看 CORS 设置属性 (en-US) 获取更多信息。
  
- volume

  表示音频的音量。值从0.0（静音）到1.0（最大音量）。
  
### 音轨增删

你可以监控媒体元素中的音频轨道，当音轨被添加或删除时，你可以通过监听相关事件来侦测到。具体来说，通过监听 AudioTrackList (en-US) 对象的 addtrack 事件（即 HTMLMediaElement.audioTracks 对象），你可以及时对音轨的增加做出响应。

```js
const mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function(event) {
  audioTrackAdded(event.track);
}
```

### 显示音轨文本

WebVTT 是一个格式，用来编写文本文件，这个文本文件包含了众多的字符串，这些字符串会带有一些元数据，它们可以用来描述这个字符串将会在视频中显示的时间，甚至可以用来描述这些字符串的样式以及定位信息。这些字符串叫做 cues ，你可以根据不同的需求来显示不同的样式，最常见的如下：

- subtitles

  通过添加翻译字幕，来帮助那些听不懂外国语言的人们理解音频当中的内容。

- captions

  同步翻译对白，或是描述一些有重要信息的声音，来帮助那些不能听音频的人们理解音频中的内容。

- timed descriptions

  将文字转换为音频，用于服务那些有视觉障碍的人。

```js
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>

```

一个典型的 WebVTT(subtitles_en.vtt) 文件如下：

```txt
WEBVTT

1
00:00:22.230 --> 00:00:24.606
第一段字幕

2
00:00:30.739 --> 00:00:34.074
第二段

  ...
```


  

## audio

audio标签不支持width, height, poster，Video其它的属性都支持

```js
const mediaElem = document.getElementById("my-media-element");
```

- mediaElem.load()

  重新加载媒体
  
### audio常用方法记录

```js
var url = 'xxx.mp3';
// 返回一个HTMLAudioElement，其preload属性被设置为auto，浏览器
var audioObj = new Audio(url)
// 当前播放时间
audioObj.currentTime;
// （只读）音频时长
audioObj.duration;
// （只读）音频是播放完毕状态
audioObj.ended;
// 音频是循环播放状态，true-循环播放，false-不循环播放
audioObj.loop;
// 音频静音状态，true-静音，false-不静音
audioObj.muted;
// （只读）音频暂停状态， true-暂停，false-播放
audioObj.paused;
// 音频音量 - 值从0.0（静音）到1.0（最大音量）
audioObj.volume;

// 播放
audioObj.play(); //
// 暂停
audioObj.pause();
// 重新加载
audioObj.load();

// 音频未完全加载时触发
audioObj.addEventListener("abort", function() {
  
})
// 音频可以播放的时候触发，但是未加载完所有数据
audioObj.addEventListener("canplay", function() {
  
})
// 音频可以播放的时候触发，已加载完所有数据
audioObj.addEventListener("canplaythrough", function() {
  
})
// 当音频时长属性更新时触发
audioObj.addEventListener("durationchange", function() {
  
})
// 音频播放结束时触发
audioObj.addEventListener("ended", function() {
  
})
// 音频加载失败时触发
audioObj.addEventListener("error", function() {
  
})
// 当音频第一帧加载完成后触发
audioObj.addEventListener("loadeddata", function() {
  
})
// 加载元数据的时候触发
audioObj.addEventListener("loadedmetadata", function() {
  
})
// 浏览器开始加载资源的时候触发
audioObj.addEventListener("loadstart", function() {
  
})
// 音频状态由播放状态变为暂停状态时触发
audioObj.addEventListener("pause", function() {
  
})
// 音频状态由暂停状态改为播放状态时触发
audioObj.addEventListener("play", function() {
  
})
// 由于缺乏数据而暂停或延迟后，当回放准备开始时触发
audioObj.addEventListener("playing", function() {
  
})
// 在浏览器周期性的加载资源时触发
audioObj.addEventListener("process", function() {
  
})
// 在播放速率发生改变时触发
audioObj.addEventListener('ratechange', function() {
  
})
// 播放当前时间改变时触发
audioObj.addEventListener('timeUpdate', function() {
  
})
// 音量发生改变时触发
audioObj.addEventListener('volumechange', function() {
  
})
// 缓冲数据时触发
audioObj.addEventListener('waiting', function() {
  
})
```


