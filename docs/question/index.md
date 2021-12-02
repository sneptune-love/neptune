

# 每日一问

## 多个项目多个git账号如何进行管理？

> 示例：我有两个项目A、B，A的git账号是gitA，B的git账号是gitB，怎么对这两个项目进行管理？

首先我们先分析一下项目的git地址是`ssh协议`还是`https协议`，如果是ssh协议，从公钥方面考虑；如果是https的，从用户名和密码方面来考虑。

---

<p class="bold">🚀 下面先从https方面分析：</p>

首先先了解git配置相关信息：

git读取配置文件有三个层级（针对Mac）：

  1. 全局配置 /etc/gitconifg  
  
  2. 用户配置 ~/.gitconfig或者~/.config/git/config
  
  3. 项目配置 ~/projectA/.git/config
  
  
根据配置文件层级，可以想到其中的两种方案

1、每个项目根目录下配置相关的git账号信息

`.git/config`

```config
[user]
  name = xxx
  email = xxx@139.com
```

2、在用户配置或者全局配置中，根据仓库地址配置指定的git账号信息

`/etc/gitconifg` 或者 `~/.gitconfig`

```config
# 示例：针对指定的仓库存储指定的用户信息
[credential "https://example.com"]
  username = foo
  email = xxx@139.com

```