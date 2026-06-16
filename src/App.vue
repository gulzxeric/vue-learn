<script setup>
import { onMounted, ref } from 'vue'
import Clock from './components/clock.vue'

const showClock = ref(true)

/* const msg = ref('还没挂载')

onMounted(() => {
  setTimeout(() => {
    msg.value = '已经挂载'
  }, 3000)
}) */
</script>
<template>
  <button @click="showClock = !showClock">
    {{ showClock ? '隐藏' : '显示' }}时钟
  </button>
  <Clock v-if="showClock" />

</template>