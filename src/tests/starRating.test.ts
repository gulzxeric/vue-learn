import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import StarRating from '@/components/starRating.vue'

test('点击第3颗星，emit update-rating 传值 3', async () => {
  const wrapper = mount(StarRating, {
    props: { rating: 2, max: 5 }
  })

  const stars = wrapper.findAll('span')
  await stars[2].trigger('click')

  expect(wrapper.emitted('update-rating')).toBeTruthy()
  expect(wrapper.emitted('update-rating')[0]).toEqual([3])
})