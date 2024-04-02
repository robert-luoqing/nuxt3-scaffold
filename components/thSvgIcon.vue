<template>
  <nuxt-icon :name="props.name" filled v-bind="$attrs" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  color?: string;
}>();
</script>
<style>
.nuxt-icon {
  display: inline-block;
}
.nuxt-icon svg {
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
</style>
