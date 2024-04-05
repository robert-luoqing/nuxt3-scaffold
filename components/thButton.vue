<template>
  <a-button :html-type="props.type" :loading="loadingFinal" :type="props.pattern || 'default'" @click="onClick"><slot /></a-button>
</template>

<script lang="ts">
export interface ThButtonOptions {
  tag: any;
  disableLoading: () => void;
}
</script>

<script lang="ts" setup>
const props = defineProps<{
  pattern?: 'default' | 'primary' | 'dashed' | 'text' | 'link';
  loading?: boolean;
  tag?: any;
  type?: 'button' | 'submit';
  loadingWhenClick?: boolean;
}>();

const emits = defineEmits<{
  (e: 'click', options: ThButtonOptions): void;
}>();

const loadingInButton = ref(false);
const loadingFinal = computed(() => {
  const loading1 = props.loading;
  const loading2 = loadingInButton;
  return loading1 || loading2.value;
});

const onClick = () => {
  if (props.loadingWhenClick) {
    loadingInButton.value = true;
  }
  emits('click', {
    tag: props.tag,
    disableLoading: () => {
      loadingInButton.value = false;
    }
  });
};
</script>
