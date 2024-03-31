<template>
  <div>
    <a-space>
      <th-button @click="onClick">nav to test</th-button>
      <input />
      <th-button @click="onShowError"> show error </th-button>
      <th-input />
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onClick = () => {
  router.push('/test/test');
};
const { showError } = useToast();
const onShowError = () => {
  showError('Error information');
};
</script>
<style lang="scss" scoped></style>
