<template>
  <nuxt-icon :name="props.name" filled v-bind="$attrs" width="250px" height="33px" class="w-[250px] h-[33px]" />
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
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
