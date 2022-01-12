
# 问题汇总

---

## 问题: Mac系统升级导致vscode扩展git功能无法使用

时间：`2021/02/18`

机型: `MacBook Pro (13-inch, 2017, Two Thunderbolt 3 ports)`

升级版本: `MacOS Big Sur 11.2.1`

解决方案: 

    # 终端内输入以下命令
    
    xcode-select --install   （安装包130M大小）
    
    xcode-select --reset
    
参考文章: https://stackoverflow.com/questions/52522565/git-is-not-working-after-macos-update-xcrun-error-invalid-active-developer-pa

