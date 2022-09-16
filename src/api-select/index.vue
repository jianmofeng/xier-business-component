<template>
  <span style="width: 100%">
    <Select
      v-bind="$attrs"
      v-model="value"
      :multiple="multiple"
      :allow-search="allowSearch || isSearch"
      :loading="loading"
      @change="onChange"
      @search="onSearch"
    >
      <Option v-for="item of options" :key="item.value" :value="item.value">
        {{ item.label }}
      </Option>
    </Select>
  </span>
</template>

<script lang="ts" setup>
import {
  onMounted,
  ref,
  defineEmits,
  watch,
  defineProps,
  withDefaults,
  defineComponent,
} from 'vue';
import { Select, Option } from '@arco-design/web-vue';

interface Props {
  valueType?: 'object' | 'string';
  api?: (params?: any) => Promise<OptionItem[]>;
  multiple?: boolean;
  allowSearch?: boolean;
  modelValue: string | number | OptionItem | (string | number | OptionItem)[];
  labelField?: string;
  valueField?: string;
  resultField?: string;
  isSearch?: boolean;
}
interface OptionItem {
  value: string | number;
  label: string;
  [key: string]: unknown;
}

const emit = defineEmits(['update:modelValue', 'change']);

const props = withDefaults(defineProps<Props>(), {
  valueType: 'string',
  multiple: false,
  allowSearch: false,
  valueField: 'value',
  labelField: 'label',
  isSearch: false,
});

const value = ref<string | number | undefined | OptionItem | any[]>('');
const options = ref<OptionItem[]>([]);

const getOptions = (params?: any) => {
  const fun = params ? props.api!(params) : props.api!();
  fun
    .then((res: any) => {
      let list = res;
      if (props.resultField) {
        list = res[props.resultField];
      }
      if (list?.length) {
        options.value = list.map((t: any): OptionItem => {
          return {
            ...t,
            value: t[props.valueField],
            label: `${t[props.labelField]}`,
          };
        });
      } else {
        options.value = [];
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const getValue = (newVal: any) => {
  if (props.valueType === 'object') {
    if (!newVal && !props.multiple) return undefined;
    if (!newVal && props.multiple) return [];

    if (
      Object.prototype.toString.call(newVal) !== '[object Object]' &&
      !props.multiple
    ) {
      return {};
    }

    if (
      Object.prototype.toString.call(newVal) !== '[object Array]' &&
      props.multiple
    ) {
      return [];
    }

    if (!props.multiple) {
      return newVal?.value;
    }

    return newVal.map((t: { value: any }) => t.value);
  }
  return newVal;
};

const getObjectResult = (item: any) => {
  return options.value.find((t) => t.value === item);
};

const getResult = () => {
  if (!value.value) return value.value;
  if (props.valueType !== 'object') return value.value;

  if (!props.multiple) return getObjectResult(value.value);

  return (value.value as any[]).map(getObjectResult);
};

watch(
  () => props.modelValue,
  (newVal) => {
    value.value = getValue(newVal);
    const result = getResult();
    emit('change', result);
  },
  { immediate: true }
);

const onChange = () => {
  const result = getResult();

  emit('update:modelValue', result);
  emit('change', result);
};

const loading = ref(false);
const onSearch = async (value: string) => {
  if (value) {
    loading.value = true;
    await getOptions(value);
  } else {
    options.value = [];
  }
};

onMounted(() => {
  if (props.isSearch) {
    return;
  }
  getOptions();
});
</script>

<script lang="ts">
export default defineComponent({
    name: "ApiSelect",
})
</script>