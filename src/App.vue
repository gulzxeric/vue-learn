<script setup>
</script>
<template>
  <nav>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/1">user1</router-link>
    <router-link to="/user/2">user2</router-link>
    <router-link to="/user/3">user3</router-link>
    <router-link to="/secret">secret</router-link>
    <router-link :to="{path: '/search', query: {q: 'vue'}}">search vue</router-link>
    <router-link :to="{path: '/search', query: {q: 'router'}}">search router</router-link>
  </nav>
  <hr>
  <router-view />
</template>