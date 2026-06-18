<script setup>
import { onMounted } from 'vue'
import { useBlogStore } from '@/stores/blog'
import { useDocumentTitle } from '@/composables/useDocumentTitle';
import { ref, computed } from 'vue'
import { useDebounce } from '@/composables/useDebounce';

const searchQuery = ref('')
const debouncedQuery = useDebounce(searchQuery, 300)

const filteredPosts = computed(() => {
  if (!debouncedQuery.value) return blog.posts
  const q = debouncedQuery.value.toLowerCase()
  return blog.posts.filter(p => p.title.toLowerCase().includes(q))
})

useDocumentTitle('BlogList')
const blog = useBlogStore()
onMounted(() => blog.fetchPosts())
</script>

<template>
  <h1>📝 文章列表</h1>
  <input v-model="searchQuery" placeholder="搜索文章标题..." />
  <p v-if="blog.loading">⏳ 加载中...</p>
  <p v-else-if="blog.error">❌ {{ blog.error }}</p>
  <ul v-else>
    <li v-for="post in filteredPosts" :key="post.id">
      <router-link :to="`/blog/${post.id}`">
        {{ post.id }}. {{ post.title }}
      </router-link>
    </li>
  </ul>
</template>