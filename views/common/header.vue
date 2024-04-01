<template>
  <div class="flex flex-row items-center py-8">
    <div class="flex-1">
      <th-svg-icon name="company-icon"></th-svg-icon>
    </div>
    <div class="flex flex-row">
      <a-space>
        <NuxtLink to="/features"> Features </NuxtLink>
        <NuxtLink to="/contact"> Contact </NuxtLink>
        <NuxtLink to="/login"> {{ $t('common.login') }} </NuxtLink>
      </a-space>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
