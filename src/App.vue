<script setup>
import { ref, provide, computed } from 'vue'
import ThemeBadge from './components/ThemeBadge.vue';
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
const doneCount = computed(() => todos.value.filter(t => t.done).length)

function onToggleTodo(index) { todos.value[index].done = !todos.value[index].done }
function onUpdateRating(val) { rating.value = val }
function onToggleFriends(id) {
  const user = users.value.find(u => u.id === id)
  if (user) user.faved = !user.faved
}

const theme = ref('light')
provide('theme', theme)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

function setTitle(title) {
  document.title = title + ' - Vue Learn'
}

provide('setTitle', setTitle)
</script>
<template>
  <button @click="toggleTheme">切换主题</button>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/user/1">user1</router-link>
    <router-link to="/user/2">user2</router-link>
    <router-link to="/user/3">user3</router-link>
    <router-link to="/secret">secret</router-link>
    <router-link :to="{ path: '/search', query: { q: 'vue' } }">search vue</router-link>
    <router-link :to="{ path: '/search', query: { q: 'router' } }">search router</router-link>
    <router-link to="/counter">Counter</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/ref-reactive">RefVsReactive</router-link>
    <router-link to="/watch">WatchDemo</router-link>
    <router-link to="/favorites">收藏</router-link>
  </nav>
  <hr>
  <router-view />
  <theme-badge />
  <hr>
  <hr>
  <Card title="待办列表">
    <template #header>优先级高</template>
    <count :todos="todos" :done-count="doneCount" @toggle-todo="onToggleTodo" />
    <template #footer>共 {{ todos.length }}</template>
  </Card>
  <Card title="星星评价">
    <template #header>餐厅</template>
    <starRating :rating="rating" :max="5" @update-rating="onUpdateRating" />
    <template #footer>{{ rating }} stars</template>
  </Card>
  <Card title="用户卡片">
    <template #header>Friends</template>
    <usersControl :users="users" :userMax="userMax" @toggle-friends="onToggleFriends" />
    <template #footer>{{ users.length }} friends</template>
  </Card>
  <Card title="Empty Card"></Card>
</template>
<style>
nav {
  padding: 0 100px;
  display: flex;
  justify-content: space-around
}

nav a {
  color: #000;
}

/* 自定义激活状态的样式 */
.router-link-active {
  color: red;
  /* 激活时变红 */
  font-weight: bold;
  /* 激活时加粗 */
  text-decoration: underline;
}
</style>