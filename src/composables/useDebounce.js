import { ref, watch } from 'vue'

export function useDebounce(source, delay = 300) {
  const debouncedValue = ref(source.value)
  let timer = null

  watch(source, (val) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      debouncedValue.value = val
    }, delay)
  })

  return debouncedValue
}