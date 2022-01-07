

vue ui分析

执行vue ui，映射路径如下：

/Users/hujiang/Desktop/otherGithub/vue-cli/packages/@vue/cli/bin/vue.js

该文件包含除--help外的13种命令格式

  + `create <app-name>`
  + `add <plugin> [pluginOptions]`
  + `invoke <plugin> [pluginOptions]`
  + `inspect [paths...]`
  + `serve`
  + `build`
  + `ui`
  + `init <template> <app-name>`
  + `config [value]`
  + `outdated`
  + `upgrade [plugin-name]`
  + `migrate [plugin-name]`
  + `info`
  
本次咱们只对ui命令进行解析

vue ui命令对应的解析路径：/Users/hujiang/Desktop/otherGithub/vue-cli/packages/@vue/cli/lib/ui.js



