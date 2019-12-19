### 协议

协议标识符： ws，如果加密，则为 wss(类比 http、https)

### 通信规则

约定： 前后端 message 格式约定(需要序列化一下发送)：

```
{ action: 'newMsg', params: { data: {id: 123456, deviceType: 'x86', description: '服务器过热'} } }
```

### Props

| 参数         | 说明                               | 类型          | 可选值 | 默认值                   |
| ------------ | ---------------------------------- | ------------- | ------ | ------------------------ |
| url          | 协议链接                           | String        | --     | ''                       |
| delay        | 单位(ms)，心跳检测间隔             | Number        | --     | 3000                     |
| maxCount     | 心跳检测 maxCount 次无响应，则重连 | Number        | --     | 3                        |
| heartMsg     | 心跳检测发送的消息                 | Object,String | --     | { action: 'heartCheck' } |
| autoReconect | 发生错误自动重连                   | Boolean       | --     | true                     |

### 方法

| name  | 说明     | 参数    |
| ----- | -------- | ------- |
| send  | 发送消息 | message |
| close | 关闭会话 | --      |

### 事件

| 事件名称  | 说明                   | 回调参数 |
| --------- | ---------------------- | -------- |
| onOpen    | 连接建立成功时回调     | evt      |
| onMessage | 接收到后端的消息时回调 | message  |
| onClose   | 连接关闭时回调         | evt      |
| onError   | 发生错误时回调         | evt      |
