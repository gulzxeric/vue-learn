<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import { useFetch } from '@/composables/useFetch'
import { useFavoritesStore } from '@/stores/favorites'
const fav = useFavoritesStore()

const route = useRoute()
const blog = useBlogStore()

const comments = useFetch(`/posts/${route.params.id}/comments`)

watch(() => blog.currentPost, (post) => {
  if (post) document.title = post.title + ' - Vue Learn'
})

onMounted(() => {
  blog.fetchPostById(route.params.id)
  comments.execute()   // ← composable 版
  // blog.fetchComments(route.params.id)  // ← Store 版（留着对比）
})
</script>
<template>
  <router-link to="/blog">← 返回列表</router-link>

  <p v-if="blog.loading">⏳ 加载中...</p>
  <p v-else-if="blog.error">❌ {{ blog.error }}</p>
  <article v-else-if="blog.currentPost">
    <h1>{{ blog.currentPost.title }}</h1>
    <button @click="fav.toggle(blog.currentPost.id)">
      {{ fav.isFav(blog.currentPost.id) ? '⭐' : '☆' }}
    </button>
    <p>{{ blog.currentPost.body }}</p>
  </article>
  <h2>💬 评论</h2>
  <p v-if="comments.loading.value">加载中...</p>
  <ul v-else>
    <li v-for="c in comments.data.value" :key="c.id">
      <strong>{{ c.name }}</strong><br>
      {{ c.body }}
    </li>
  </ul>
</template>