<template>
  <div>
    <th-button @click="onClose">close</th-button>
  </div>
</template>
<script lang="ts" setup>
import type { ModalParam } from '~/components/thModels.vue';

const props = defineProps<ModalParam>();
const onClose = () => {
  props.close();
};
</script>
