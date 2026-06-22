<script setup>
import { computed } from 'vue'
import { useBlogStore } from '@/stores/blog'
import { useFavoritesStore } from '@/stores/favorites'

const blog = useBlogStore()
const fav = useFavoritesStore()

const favoritePosts = computed(() =>
  blog.posts.filter(p => fav.ids.includes(p.id))
)
</script>

<template>
  <h1>⭐ 收藏文章</h1>
  <p v-if="favoritePosts.length === 0">暂无收藏</p>
  <ul v-else>
    <li v-for="post in favoritePosts" :key="post.id">
      <router-link :to="`/blog/${post.id}`">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
</template>