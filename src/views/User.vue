<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';

const route = useRoute()
const userId = computed(() => route.params.id)
</script>
<template>
  <h1>👤 用户 {{ userId }}</h1>
  <nav>
    <router-link :to="`/user/${userId}/profile`">资料</router-link>
    <router-link :to="`/user/${userId}/settings`">设置</router-link>
  </nav>
  <router-view />
</template>