# ApiSelect
常用在SearchFrom中, 支持配置化和远程加载

## 基础用法
`v-model`、`api`必传
:::demo 

```vue
<template>
 <div style="width:200px">
  <api-select v-model="value" :api="getApi"></api-select>
 </div>
</template>
<script lang="ts" setup>
const value = ''
// 此处使用axios的api
const getApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                "value": 1,
                "label": "选项1"
            },
            {
                "value": 2,
                "label": "选项2",
                "disabled": true
            }
        ]), 1000);
    });
}
</script>
```
:::

## 进阶
|     属性     |                                 类型                                  |  默认值  |                    说明                     |
| :----------: | :-------------------------------------------------------------------: | :------: | :-----------------------------------------: |
|  valueType   |                          `object \| string`                           | `string` |                     是                      |
|     api      |               `(params?: any) => Promise<OptionItem[]>`               |    -     |                 `axios`请求                 |
|   multiple   |                               `boolean`                               | `false`  |                  是否多选                   |
| allowSearch? |                               `boolean`                               | `false`  |                是否可以搜索                 |
| modelValue?  | `string\|number \| OptionItem \| (string \| number \| OptionItem)[];` |    -     |              组件绑定的v-model              |
| labelField?  |                               `string`                                |  label   |        label的key，与arco-select一致        |
| valueField?  |                               `string`                                |  value   |        value的key，与arco-select一致        |
| resultField? |                               `string`                                |    -     |         api请求response下data的key          |
|  isSearch?   |                               `boolean`                               | `false`  | 是否搜索后加载数据，allowSearch需设置为true |

### 远程搜索
使用`allowSearch`、`isSearch`属性来实现远程搜索

:::demo 

```vue
<template>
 <div style="width:200px">
  <api-select v-model="value" :api="getApi" allowSearch isSearch></api-select>
 </div>
</template>
<script lang="ts" setup>
const value = ''
// 此处使用axios的api
const getApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                "value": 1,
                "label": "选项1"
            },
            {
                "value": 2,
                "label": "选项2",
                "disabled": true
            }
        ]), 1000);
    });
}
</script>
```
:::

## 配合SearchForm
