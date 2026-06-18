<script setup>
import { onMounted } from 'vue'
import { useBlogStore } from '@/stores/blog'

const blog = useBlogStore()
onMounted(() => blog.fetchPosts())
</script>

<template>
  <h1>📝 文章列表</h1>

  <p v-if="blog.loading">⏳ 加载中...</p>
  <p v-else-if="blog.error">❌ {{ blog.error }}</p>
  <ul v-else>
    <li v-for="post in blog.posts" :key="post.id">
      <router-link :to="`/blog/${post.id}`">
        {{ post.id }}. {{ post.title }}
      </router-link>
    </li>
  </ul>
</template>