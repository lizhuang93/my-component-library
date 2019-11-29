最新版本请查看：[https://github.com/bitmain-frontend/huge-tree](https://github.com/bitmain-frontend/huge-tree), 这里使用了 @bitmain/components-tree 包。

## demo code

请查看 demo 源码: hugeTree/demo/index.vue

## node 节点样例

```
{
  id: 0,
  label: '全部',
  parentId: null, // 根节点的 parentId 必须为 null
  disabled: false, // 可选
  children: [
    {
      id: 1,
      label: '全部',
      parentId: null, // 根节点的 parentId 必须为 null
      disabled: false, // 可选
      children: null
    }
  ]
},
```

## Attributes

| 参数                 | 说明                                                           | 类型           | 可选值                                                  | 默认值               |
| -------------------- | -------------------------------------------------------------- | -------------- | ------------------------------------------------------- | -------------------- |
| data                 | tree                                                           | Array          | --                                                      | []                   |
| hasInput             | 是否含有过滤输入框                                             | Boolean        | --                                                      | false                |
| placeholder          | 过滤输入框的 placeholder，配合 hasInput 使用                   | String         | --                                                      | 请输入关键字进行查找 |
| indent               | 缩进                                                           | String, Number | --                                                      | 15                   |
| height               | 容器高度                                                       | String, Number | --                                                      | 600                  |
| expandLevel          | 展开程度                                                       | String, Number | 'all',1,2,3,,,                                          | 'all'                |
| isLoading            | 是否展示加载中                                                 | Boolean        | --                                                      | false                |
| checkedAction        | 操作 label 执行选中                                            | String         | 'none': 不选中；'click': 单击选中；'dblclick': 双击选中 | 'none'               |
| emptyText            | 内容为空展示的文本                                             | String         | --                                                      | '暂无数据'           |
| showCheckbox         | 是否展示 checkbox                                              | Boolean        | --                                                      | false                |
| showCheckboxLeafOnly | 是否仅叶子节点展示 checkbox, 配合 showCheckbox = true 才有效。 | Boolean        | --                                                      | false                |
| defaultCheckedKeys   | 默认选中                                                       | Array          | --                                                      | []                   |

## 方法

| 事件名称        | 说明                     | 参数                |
| --------------- | ------------------------ | ------------------- |
| setCheckedKeys  | 回显选中状态             | id 组成的数组       |
| setCheckedNodes | 回显选中状态             | node 节点组成的数组 |
| getCheckedKeys  | 返回 id 组成的数组       | --                  |
| getCheckedNodes | 返回 node 节点组成的数组 | --                  |
| clearChecked    | 清空所有选中             | --                  |

## Events

| 事件名称        | 说明                                   | 回调参数                         |
| --------------- | -------------------------------------- | -------------------------------- |
| onChange        | 选中状态变化触发                       | （{ checkedKeys, checkedNodes }) |
| onClickLabel    | 点击 label 触发                        | node                             |
| onClickCheckbox | 点击 checkbox 触发, 获取当前点击的节点 | node                             |

## Scoped Slot

| name    | 说明                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------- |
| default | label 的 slot， eg： `<span slot-scope="{ slotScope }"><i>&#9733;</i> {{ slotScope.label }}</span>` |
