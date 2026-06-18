<script setup>
import { inject } from 'vue'
const theme = inject('theme')
</script>
<template>
  <span :style="{ background: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000' }">
    当前主题：{{ theme }}
  </span>
</template>