<script setup>
import { ref } from 'vue'
const title = ref('我的第一个Vue应用')
const count = ref(0)
const bgColor = ref('#f0f0f0')
</script>

<template>
    <div :style="{ background: bgColor, padding: '40px', textAlign: 'center' }">
    <h1>{{ title }}</h1>
    <input v-model="title">
    <p>计数：{{ count }}</p>
    <button @click="count++">+1</button>
    <button @click="count--">-1</button>
    <button @click="count=0">Reset</button>
    <hr>
    <button @click="bgColor = bgColor === '#f0f0f0' ? '#ffeaa7' : '#f0f0f0'">
      切换背景
    </button>
  </div>
</template>