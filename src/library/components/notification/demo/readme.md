## 使用

1. 页面级通知<br>
   a. 页面可见时，调用页面级通知(这里参考了[elementUI](https://element.eleme.io/#/zh-CN/component/notification))。<br>
   b. 浏览器不支持 Notification<br>
   c. 浏览器禁止了 Notification
2. 系统级通知(使用 window.Notification)<br>
   页面不可见(浏览器最小化、浏览器没有最小化，但是当前页面切换成了背景页、浏览器将要卸载（unload）页面、操作系统触发锁屏屏幕。)

```
import notify from './notify.js'

notify({
  title: '12312',
  message: 'fsafsaf',
  onClick: () => {}
  onClose: () => {}
})
```

### 具体文档参考 [elementUI](https://element.eleme.io/#/zh-CN/component/notification)
