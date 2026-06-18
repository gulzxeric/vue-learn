<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useDocumentTitle } from '@/composables/useDocumentTitle';

useDocumentTitle('Search')

const route = useRoute()
const keyword = computed(() => route.query.q || '未输入搜索词')
</script>

<template>
  <h1>🔍 搜索</h1>
  <p>搜索词：{{ keyword }}</p>
</template>