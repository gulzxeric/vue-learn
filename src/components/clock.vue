<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const now = ref('loading...')
let timer = null

onMounted(() => {
  now.value = new Date().toLocaleTimeString()
  timer = setInterval(() => {
    now.value = new Date().toLocaleTimeString()
  }, 1000);
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
<template>
  <div style="font-size: 24px; font-family: monospace;">
    ⏰ {{ now }}
  </div>
</template>