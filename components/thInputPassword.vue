<template>
  <a-input-password v-model="model" :disabled="props.disabled" :placeholder="props.placeholder" v-bind="$attrs" @change="onChange" />
</template>

<script lang="ts" setup>
import type { ChangeEvent } from './types/changeEvent';

const props = defineProps<{ disabled?: boolean; placeholder?: string; tag?: any }>();
const model = defineModel<string | null>();
const emits = defineEmits<{
  (e: 'change', param: ChangeEvent, tag?: any): void;
}>();
const onChange = (e: ChangeEvent) => {
  emits('change', e, props.tag);
};
</script>
