import { defineStore } from "pinia";
import { ref,computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increment() { count.value++ }
  function decrement() { count.value-- }

  const doubleCount = computed(() => count.value * 2)

  return { count, increment, decrement, doubleCount }
})