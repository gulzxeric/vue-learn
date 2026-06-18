<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>
<template>
  <p>当前计数：<strong>{{ counter.count }}</strong></p>
  <p>原始值：{{ counter.count }}</p>
  <p>翻倍值：{{ counter.doubleCount }}</p>
</template>