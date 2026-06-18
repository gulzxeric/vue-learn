import { ref } from 'vue'
import api from '@/api'

export function useFetch(url) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function execute() {
    loading.value = true
    error.value = null
    try {
      const res = await api.get(url)
      data.value = res.data
    } catch (e) {
      error.value = e.message || '请求失败'
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, execute }
}
