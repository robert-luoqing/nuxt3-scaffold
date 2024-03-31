<template>
  <div class="flex justify-center">
    <div class="max-w-[1200px] w-[100%]">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Footer from '~/views/common/footer.vue';
import Header from '~/views/common/header.vue';
</script>
