<script setup>
import { ref, computed, onMounted } from 'vue'
import starRating from './components/starRating.vue'
import count from './components/TodoList.vue'
import usersControl from './components/UserCard.vue'
import Card from './components/Card.vue'

const userMax = ref(5)
const rating = ref(2)

const todos = ref([
  { text: '学 Vue', done: false },
  { text: '练 computed', done: true },
  { text: '找工作', done: false },
  { text: 'aaa', done: false },
  { text: 'bbb', done: false },
])

const users = ref([
  { id: 1, name: '张三', email: 'zs@mail.com', avatar: '😀', faved: true },
  { id: 2, name: '李四', email: 'ls@mail.com', avatar: '😎', faved: false },
  { id: 3, name: '王五', email: 'ww@mail.com', avatar: '🤓', faved: false },
])

const doneCount = computed(() => {
  return todos.value.filter(t => t.done).length
})

function onToggleTodo(index) {
  todos.value[index].done = !todos.value[index].done
}

function onUpdateRating(val) {
  rating.value = val
}

function onToggleFriends(id) {
  const user = users.value.find(u => u.id === id)
  if (user) user.faved = !user.faved
}
</script>
<template>
  <!-- <count :todos="todos" :done-count="doneCount" @toggle-todo="onToggleTodo" />
  <starRating :rating="rating" :max="5" @update-rating="onUpdateRating" />
  <usersControl :users="users" :userMax="userMax" @toggle-friends="onToggleFriends" /> -->
  <Card title="待办列表">
    <template #header>优先级高</template>
    <count :todos="todos" :done-count="doneCount" @toggle-todo="onToggleTodo" />
    <template #footer>共 {{ todos.length }}</template>
  </Card>

  <Card title="星星评价">
    <template #header>餐厅aaa</template>
    <starRating :rating="rating" :max="5" @update-rating="onUpdateRating" />
    <template #footer>{{ rating }} stars</template>
  </Card>

  <Card title="用户卡片">
    <template #header>Friends</template>
    <usersControl :users="users" :userMax="userMax" @toggle-friends="onToggleFriends" />
    <template #footer>{{users.length}} friends</template>
  </Card>
  <Card title="Empty Card"></Card>
</template>