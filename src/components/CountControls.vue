<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>
<template>
  <button @click="counter.decrement()">−1</button>
  <button @click="counter.increment()">+1</button>
</template>