<template>
  <div>
    <button @click="onClick">nav to test</button>
    <input />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onClick = () => {
  router.push('/test');
};
</script>
<style lang="scss" scoped></style>
