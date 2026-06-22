import TodoList from "@/components/TodoList.vue";
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'

test('显示待办数量', () => {
  const wrapper = mount(TodoList, {
    props: {
      todos: [
        { text: '学 Vue', done: false },
        { text: '练测试', done: true },
        { text: '找工作', done: false },
      ],
      doneCount: 1,
    }
  })

  expect(wrapper.text()).toContain('Done: 1 / 3')
})

test('勾选待办触发 toggle-todo', async () => {
  const wrapper = mount(TodoList, {
    props: {
      todos: [
        { text: '学 Vue', done: true },
        { text: '练测试', done: true },
        { text: '找工作', done: false },
      ],
      doneCount: 1,
    }
  })

  const checkbox = wrapper.findAll('input[type="checkbox"]').at(2)
  // const checkbox = wrapper.find('input[type="checkbox"]')
  await checkbox.trigger('change')

  expect(wrapper.emitted('toggle-todo')).toBeTruthy()
  console.log(wrapper.emitted('toggle-todo'),1111)
  expect(wrapper.emitted('toggle-todo')[0]).toEqual([2])
  // expect(wrapper.emitted('toggle-todo')[0]).toEqual([0])
})

test('已完成的待办显示删除线', () => {
  const wrapper = mount(TodoList, {
    props: {
      todos: [
        { text: '已完成', done: true },
        { text: '未完成', done: false },
      ],
      doneCount: 1,
    }
  })

  const spans = wrapper.findAll('span')
  expect(spans[0].attributes('style')).toContain('line-through')
  expect(spans[1].attributes('style')).toContain('none')
})

test('空列表显示 0 / 0', () => {
  const wrapper = mount(TodoList, {
    props: {
      todos: [],
      doneCount: 0,
    }
  })

  expect(wrapper.text()).toContain('Done: 0 / 0')
})