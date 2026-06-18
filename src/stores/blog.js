import { defineStore } from "pinia";
import { ref } from "vue";
import api from '@/api'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref([])
  const currentPost = ref(null)
  const loading = ref(false)
  const loadingComments = ref(false)
  const error = ref(null)
  const comments = ref([])

  async function fetchPosts() {
    loading.value = true
    error.value = null
    try {
      const res = await api.get('/posts')
      posts.value = res.data
    } catch (e) {
      error.value = '加载文章列表失败'
    } finally {
      loading.value = false
    }
  }

  async function fetchComments(postId) {
    loadingComments.value = true
    try {
      const res = await api.get(`/posts/${postId}/comments`)
      comments.value = res.data
    } catch (e) {
      error.value = '加载评论失败'
    } finally {
      loadingComments.value = false
    }
  }

  async function fetchPostById(id) {
    loading.value = true
    error.value = null
    currentPost.value = null
    try {
      const res = await api.get(`/posts/${id}`)
      currentPost.value = res.data
    } catch (e) {
      error.value = '加载文章详情失败'
    } finally {
      loading.value = false
      loadingComments.value = false
    }
  }

  return { posts, currentPost, loading, error, comments, loadingComments, fetchPosts, fetchPostById, fetchComments }
})