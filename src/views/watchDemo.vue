<script setup>
import { ref, watch, watchEffect } from 'vue'
import { useDocumentTitle } from '@/composables/useDocumentTitle';

useDocumentTitle('Watch Demo')

const name = ref('')
const email = ref('')
const saveHint = ref('')

watch(name, (newVal, oldVal) => {
  console.log('watchName')
  saveHint.value = `姓名从 "${oldVal}" 改为 "${newVal}"，未保存`
}, {immediate: true})

watch(email, (newVal, oldVal) => {
  console.log('watchemail')
  saveHint.value = `邮箱从 "${oldVal}" 改为 "${newVal}"，未保存`
})

watchEffect(() => {
  console.log('watchEffect')
  if (name.value || email.value) {
    console.log(`watchEffect triggered, now value is ${name.value} and ${email.value}`)
  }
})

function save() {
  saveHint.value = '✅ 已保存'
}
</script>

<template>
  <h1>👀 watch 演示</h1>

  <input v-model="name" placeholder="姓名">
  <input v-model="email" placeholder="邮箱">
  <button @click="save">保存</button>

  <p style="color: orange" v-if="saveHint">{{ saveHint }}</p>
</template>