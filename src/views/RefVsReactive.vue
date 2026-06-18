<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  age: '',
})

const name = ref('')
const email = ref('')
const age = ref('')
</script>
<template>
  <h1>🔁 ref vs reactive</h1>

  <h2>reactive 版</h2>
  <input v-model="form.name" placeholder="姓名">
  <input v-model="form.email" placeholder="邮箱">
  <input v-model="form.age" placeholder="年龄">
  <p>{{ form.name }} - {{ form.email }} - {{ form.age }}</p>

  <hr>

  <h2>ref 版</h2>
  <input v-model="name" placeholder="姓名">
  <input v-model="email" placeholder="邮箱">
  <input v-model="age" placeholder="年龄">
  <p>{{ name }} - {{ email }} - {{ age }}</p>
</template>