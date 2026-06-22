import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import UserCard from '@/components/UserCard.vue'

test('渲染用户姓名和邮箱', () => {
  const wrapper = mount(UserCard, {
    props: {
      users: [
        { id: 1, name: '张三', email: 'zs@mail.com', avatar: '😀', faved: false },
        { id: 2, name: '李四', email: 'ls@mail.com', avatar: '😎', faved: true },
      ],
      userMax: 5,
    }
  })


  // 测数量：有 2 个 li
  expect(wrapper.findAll('li').length).toBe(2)

  // 测结构：显示正确的计数
  expect(wrapper.text()).toContain('2 / 5')

  // 测行为：已收藏星星是金色
  expect(wrapper.findAll('span')[9].element.style.color).toContain('gold')

  // expect(wrapper.text()).toContain('张三')
  expect(wrapper.text()).toContain('@mail.com')
})