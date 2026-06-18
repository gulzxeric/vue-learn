import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const ids = ref([])

  function toggle(id) {
    if (ids.value.includes(id)) {
      ids.value = ids.value.filter(i => i !== id)
    } else {
      ids.value.push(id)
    }
  }

  function isFav(id) {
    return ids.value.includes(id)
  }

  return { ids, toggle, isFav }
})