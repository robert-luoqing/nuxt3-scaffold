<template>
  <div>
    <div class="w-full gap-x-4 text-4xl p-2 mt-4">
      <div><th-button @click="onClick">Refresh</th-button></div>
      <div>pending: {{ pending }}</div>
      <div>error: {{ error }}</div>
      <div>countries: {{ countries }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: countries, pending, error, refresh } = await useHttpQueryDirectly('/v3.1/name/deutschland', { showErrorToast: true });

const onClick = async () => {
  refresh();
};
</script>
