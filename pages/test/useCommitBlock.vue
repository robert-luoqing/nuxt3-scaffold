<template>
  <div>
    <div>Test useCommitBlock Hook</div>
    <div class="w-full gap-x-4 text-4xl p-2 mt-4">
      <div>pending: {{ pending }}</div>
      <div>error: {{ error }}</div>
      <div>countries: {{ countries }}</div>
      <div><button @click="onClick">Load Countries</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: countries, pending, error, commit } = useCommitBlock();
const onClick = async () => {
  await commit(async (fetch) => {
    // write other logic code here.....
    const data1 = await fetch('/v3.1/all', { method: 'get' });
    // write other logic code here.....
    const data2 = await fetch('/v3.1/all', { method: 'get' });
    return { data1, data2 };
  });
};
</script>
<style lang="scss" scoped></style>
