
更新时间：{docsify-updated}

<a href="https://github.com/sneptune-love" style="text-decoration: none; margin-right: 4px;" target="_blank_">
  <img alt="GitHub followers" src="https://img.shields.io/github/followers/sneptune-love?style=social">
</a>

<a href="https://github.com/sneptune-love/neptune" style="text-decoration: none; margin-right: 4px;" target="_blank_">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/sneptune-love/neptune?style=social">
</a>

<a href="https://github.com/sneptune-love/neptune" style="text-decoration: none; margin-right: 4px;" target="_blank_">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/sneptune-love/neptune?style=social">
</a>

<a href="https://github.com/sneptune-love/neptune" style="text-decoration: none; margin-right: 4px;" target="_blank_">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/sneptune-love/neptune?style=social">
</a>

----------

<img src="https://pic2.zhimg.com/v2-848abbfdb86197eadbaa5286ddd351d1_r.jpg" alt="" style="width: 600px;">

愿你的奋斗迎着清晨的第一缕朝阳

愿你熟睡的背景能相拥静溢的月光



## 反馈

建议和反馈可以发送到邮件到这个邮箱： 17600112740@163.com


## 主题切换

<div class="demo-theme-preview">
  <a data-theme="vue">vue.css</a>
  <a data-theme="buble">buble.css</a>
  <a data-theme="dark">dark.css</a>
  <a data-theme="pure">pure.css</a>
  <a data-theme="dolphin">dolphin.css</a>
</div>

<style> .demo-theme-preview a { padding-right: 10px; } .demo-theme-preview a:hover { cursor: pointer; text-decoration: underline; } </style> 
<script> 
  var preview = Docsify.dom.find('.demo-theme-preview'); 
  var themes = Docsify.dom.findAll('[data-type="theme"]'); 
  preview.onclick = function (e) {
    var title = e.target.getAttribute('data-theme');
    themes.forEach(function (theme) {
      theme.disabled = theme.title !== title;
    }); 
  }; 
</script>