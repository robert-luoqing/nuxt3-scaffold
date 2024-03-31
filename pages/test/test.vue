<template>
  <div>
    <div>Hello Test</div>
    <div class="w-full gap-x-4 text-4xl p-2 mt-4">
      <div class="i-material-symbols:3p-outline" />
      <div class="text-red text-[18px]">Color</div>
      <div class="text-[20px] text-green">计数器: {{ counter }}</div>
      <div class="text-[20px] text-green">计数器2: {{ counter2 }}</div>
      <div>User Id: {{ authStore.userId }}</div>
      <div>ApiHost: {{ runtimeConfig.public.apiHost }}</div>
      <div>pending: {{ pending }}</div>
      <div>error: {{ error }}</div>
      <div>countries: {{ countries }}</div>
      <div><button @click="onClick">Load Countries</button></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const runtimeConfig = useRuntimeConfig();
console.log('runtimeConfig', runtimeConfig.apiHost);

definePageMeta({
  layout: 'empty'
});

const counter = useState('counter', () => Math.round(Math.random() * 1000));
const counter2 = ref(0);
const authStore = useAuthStore();

const { data: countries, pending, error, commit } = useCommit();
const onClick = async () => {
  const data = await commit('/cms/front/area/influencer/countries', { method: 'get' });
  console.log('countries', data);
};
</script>
<style lang="scss" scoped></style>
