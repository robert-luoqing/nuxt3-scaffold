<template>
  <header class="flex flex-row items-center py-8">
    <div class="flex-1">
      <th-svg-icon name="company-icon"></th-svg-icon>
    </div>
    <div class="flex flex-row">
      <a-space>
        <NuxtLink to="/test/test2"> Features </NuxtLink>
        <NuxtLink to="/test/test2"> Contact </NuxtLink>
        <NuxtLink to="/test/test"> {{ $t('common.login') }} </NuxtLink>
      </a-space>
    </div>
  </header>
</template>
<script lang="ts" setup></script>
