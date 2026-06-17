<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';

const route = useRoute()
const userId = computed(() => route.params.id)
</script>
<template>
  <h1>🏠 profile</h1>
  <p>welcome user {{ userId }}</p>
</template>