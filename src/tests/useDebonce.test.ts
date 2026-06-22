import { test, expect } from 'vitest'
import { ref } from 'vue'
import { useDebounce } from '@/composables/useDebounce'

// 提示：useDebounce 接收一个 ref 和 delay，返回一个 ref
// 需要用 vi.useFakeTimers() 来控制时间

test('初始值等于 source', () => {
  const source = ref('hello')
  const debounced = useDebounce(source, 300)

  expect(debounced.value).toBe('hello')
})

test('300ms 后更新', async () => {
  const source = ref('hello')
  const debounced = useDebounce(source, 300)

  source.value = 'world'

  // 还没到时间，值不变
  expect(debounced.value).toBe('hello')

  // 等 300ms
  await new Promise(r => setTimeout(r, 350))

  expect(debounced.value).toBe('world')
})