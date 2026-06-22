import { useCounterStore } from '@/stores/counter'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, test, expect } from 'vitest'

beforeEach(() => {
  setActivePinia(createPinia())
})

test('初始值是 0', () => {
  const store = useCounterStore()
  expect(store.count).toBe(0)
})

test('increment +1', () => {
  const store = useCounterStore()
  store.increment()
  expect(store.count).toBe(1)
})