<script setup lang="ts">
const error = useError();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <button @click="handleError">Jump to home page</button>
  </div>
</template>
