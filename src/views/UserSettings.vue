<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { useDocumentTitle } from '@/composables/useDocumentTitle';

useDocumentTitle('User Setting')

const route = useRoute()
const userId = computed(() => route.params.id)
</script>
<template>
  <h1>🏠 setting</h1>
  <p>welcome to setting! User {{ userId }}</p>
</template>