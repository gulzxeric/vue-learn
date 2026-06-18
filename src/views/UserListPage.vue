<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/users'
import { useDocumentTitle } from '@/composables/useDocumentTitle';

useDocumentTitle('UserList')
const userStore = useUserStore()
onMounted(() => { userStore.fetchUsers() })
</script>

<template>
  <h1>👥 用户列表</h1>
  <p v-if="userStore.loading">⏳ 加载中...</p>
  <p v-else-if="userStore.error">❌ {{ userStore.error }}</p>
  <ul v-else>
    <li v-for="u in userStore.users" :key="u.id">{{ u.name }}</li>
  </ul>
</template>