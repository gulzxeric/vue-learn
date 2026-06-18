<script setup>
</script>
<template>
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

  </nav>
  <hr>
  <router-view />
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