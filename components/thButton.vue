<template>
  <a-button :loading="props.loading" :type="props.pattern || 'default'" @click="emits('click', props.tag)"><slot /></a-button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  pattern?: 'default' | 'primary' | 'dashed' | 'text' | 'link';
  loading?: boolean;
  tag?: any;
}>();

const emits = defineEmits<{
  (e: 'click', tag?: any): void;
}>();
</script>
