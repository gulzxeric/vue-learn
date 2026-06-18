import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('users', () => {
  const users = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchUsers() {
    loading.value = true
    error.value = null
    try {
      await new Promise(r => setTimeout(r, 1500))
      users.value = [
        { id: 1, name: 'eric' },
        { id: 2, name: 'miao' },
        { id: 3, name: 'chloe' },
      ]
    } catch (e) {
      error.value = 'loading failed'
    } finally {
      loading.value = false
    }
  }
  return { users, loading, error, fetchUsers }
})