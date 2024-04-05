<template>
  <div>
    <th-button @click="onOpenModal">Open modal</th-button>
  </div>
</template>
<script lang="ts" setup>
import { openTHModal } from '@/components/thModels.vue';
import modalComponent from '~/views/test/modalComponent.vue';

const onOpenModal = () => {
  openTHModal({
    component: modalComponent,
    closable: true
  });
};
</script>
