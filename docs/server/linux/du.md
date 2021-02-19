

# du命令

## du 命令详解

| 参数 | 说明 |
|:-:|-|
| -a | 显示所有目录或文件的大小 |
| -b | 以byte为单位，显示目录或文件的大小 |
| -c | 显示目录或文件的总和 |
| -k | 以KB为单位输出 |
| -m | 以MB为单位输出 |
| -s | 仅显示目录或文件的总计数值 |
| -h | 以K,M,G为单位，提高信息可读性 |
| -x | 跳过不同的文件系统目录 |
| -S | 显示目录的大小，但不含子目录大小 |
| -D | 显示指定符号链接的源文件大小 |

## 举例

- 查看当前路径下dist目录大小

```bash
du -sh dist
```
<img src="./static/screenshot/WX20200506-193045@2x.png" alt="" style="width: 600px;">

- 查看目录下各个目录大小

```bash
du -h

```
<img src="./static/screenshot/WX20200506-171815@2x.png" alt="" style="width: 600px;">

- 按从大到小顺序查看文件或者目录大小

```bash
du -h ./assets|sort -nr
```

<img src="./static/screenshot/WX20200506-174029@2x.png" alt="" style="width: 600px">

