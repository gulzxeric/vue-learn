<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog'

const route = useRoute()
const blog = useBlogStore()

onMounted(() => {
  blog.fetchPostById(route.params.id)
  blog.fetchComments(route.params.id)
})
</script>

<template>
  <router-link to="/blog">← 返回列表</router-link>

  <p v-if="blog.loading">⏳ 加载中...</p>
  <p v-else-if="blog.error">❌ {{ blog.error }}</p>
  <article v-else-if="blog.currentPost">
    <h1>{{ blog.currentPost.title }}</h1>
    <p>{{ blog.currentPost.body }}</p>
  </article>
  <h2>💬 评论</h2>
  <p v-if="blog.loadingComments">加载中...</p>
  <ul v-else>
    <li v-for="c in blog.comments" :key="c.id">
      <strong>{{ c.name }}</strong><br>
      {{ c.body }}
    </li>
  </ul>
</template>