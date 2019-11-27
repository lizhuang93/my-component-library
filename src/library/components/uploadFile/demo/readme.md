## Attributes

| 参数         | 说明     | 类型    | 可选值                | 默认值   |
| ------------ | -------- | ------- | --------------------- | -------- |
| uploadMethod | 上传方式 | String  | formdata、arraybuffer | formdata |
| url          | 上传路径 | String  | --                    | --       |
| multiple     | 批量上传 | Boolean | --                    | true     |

## Events

| 事件名称   | 说明                             | 回调参数              |
| ---------- | -------------------------------- | --------------------- |
| onAdd      | 选择图片时触发，此时并未传递完成 | files，当前选中的图片 |
| onSuccess  | 上传成功触发                     | （{ file, res }）     |
| onFailed   | 上传失败触发                     | file                  |
| onProgress | 上传失败触发                     | ({ file, progress })  |
