


### github token 登录问题

2021/12/16日

记录一下github拉取代码碰到的问题

问题：github仓库无法进行更新操作，提示使用token进行认证

解决步骤：

  1、登录github，进入 Settings -> Developer settings -> Personal access tokens
  
  2、生成一个token，选择对应的权限，如果只对仓库进行更新操作，只需要选择repo即可，详细介绍可查看[这里](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps)
  
  3、查看git配置文件中是否有 `credential.helper=osxkeychain` 或者 `credential.helper=store`，如果有，则需要先清理一下之前存储的账户密码信息
  
  清除osxkeychain，需要去系统的钥匙串中搜索github，找到对应账户的密码存储，清除或者更新一下
    
  清除store需要使用如下命令：
  
  ```bash
  # 清除store, 如果是系统配置，则使用--system
  git config --global --unset credential.helper
  # 设置缓存store，设置完成后，重新进行git操作，输入用户名，密码，即可缓存成功
  git config --global credential.helper store
  ```
  
  4、重新进行git操作命令时，提示输入username和password就代表缓存已经清理掉了，输入github账户名，password就是申请的token
  
  okay，至此已完成token登录校验功能，如果需要重新开启store缓存，把上面清除命令中的 `unset` 换成 `set` 即可。
