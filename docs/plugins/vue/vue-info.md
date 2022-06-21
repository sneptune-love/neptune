

## Vue的一些使用技巧汇总


### 在vue项目中监听页面隐藏与显示

`本次功能实现借鉴于vue-cli源码`

创建一个PageVisibility.js文件

```js
import vue from 'vue'

const vm = new Vue({
  data: {
    documentVisible: !document.hidden
  }
})

document.addEventListener('visibilitychange', () => {
  vm.documentVisible = !document.hidden
})

export default {
  computed: {
    documentVisible() {
      return vm.documentVisible
    }
  }
}

```


使用的时候直接mixin引入，然后用watch监听即可

```vue

<script>
export default {
  watch: {
    documentVisible(value) {
      if (value) {
        // 页面处于显示状态 -> 执行相关操作
        this.refresh()
      }
    }
  }
}

</script>

```



### 全局注册组件

创建一个register-components.js文件

```js
import vue from 'vue'

const requireComponent = require.context('./components', true, /[a-z0-9]+\.(jsx?|vue)$/i)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .substr(fileName.lastIndexOf('/') + 1)
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})


```