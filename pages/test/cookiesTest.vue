<template>
  <div></div>
</template>
<script lang="ts" setup>
const test = useCookie('test');
test.value = 'Hello, write cookes';
</script>
