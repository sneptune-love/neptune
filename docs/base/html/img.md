


> input标签获取图片时间

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="file" name="f" id="f" /> 
  <input type="button" name="aa" id="aa" value="测试" onclick="javascript: _s();" />  
</body>
<script>
  function _s() {  
    var f = document.getElementById("f").files;  
    // File对象
    console.log(f[0]);
    //上次修改时间 -- Mon Dec 13 2021 09:30:51 GMT+0800 (中国标准时间) 
    console.log(f[0].lastModifiedDate);  
    // 上次修改时间 -- 1639359051399
    console.log(f[0].lastModified);
    //名称  
    console.log(f[0].name);  
    //大小 字节  
    console.log(f[0].size);  
    //类型  
    console.log(f[0].type);  
    
    
    // 手机上选择已存在的图片
    // 存在的对象，无法获取
    console.log(f[0].exifdata)
    // 图片创建时间：2021:12:10 11:26:16
    console.log(f[0].exifdata.DateTimeOriginal)
    
  }  
</script>
</html>

```

github仓库：https://github.com/exif-js/exif-js

exifjs 示例网站：http://code.ciaoca.com/javascript/exif-js/demo/upfile


exifjs 文档介绍：http://code.ciaoca.com/javascript/exif-js/