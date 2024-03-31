<template>
  <div>
    <div class="w-full gap-x-4 text-4xl p-2 mt-4">
      <div><th-button @click="onClick">Next</th-button></div>
      <div>pending: {{ pending }}</div>
      <div>error: {{ error }}</div>
      <div>countries: {{ countries }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: countries, pending, error, executeWithUrl } = await useHttpQuery('/v3.1/name/deutschland', { method: 'get' });
const onClick = async () => {
  executeWithUrl('/v3.1/name/eesti', {
    method: 'get'
  });
};
</script>
