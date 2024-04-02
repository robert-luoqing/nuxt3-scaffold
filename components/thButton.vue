<template>
  <a-button :html-type="props.type" :loading="props.loading" :type="props.pattern || 'default'" @click="emits('click', props.tag)"><slot /></a-button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  pattern?: 'default' | 'primary' | 'dashed' | 'text' | 'link';
  loading?: boolean;
  tag?: any;
  type?: 'button' | 'submit';
}>();

const emits = defineEmits<{
  (e: 'click', tag?: any): void;
}>();
</script>
