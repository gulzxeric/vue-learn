<script setup>
import { ref } from 'vue'
const title = ref('我的第一个Vue应用')
const count = ref(0)
const bgColor = ref('#f0f0f0')

const show = ref(true)
const todos = ref(['吃饭', '睡觉', '学 Vue'])
const activeIndex = ref(-1)

const rating = ref(2)
const max = 5
</script>

<template>
  <div :style="{ background: bgColor, padding: '40px', textAlign: 'center' }">
    <h1>{{ title }}</h1>
    <input v-model="title">
    <p>计数：{{ count }}</p>
    <button @click="count++">+1</button>
    <button @click="count--">-1</button>
    <button @click="count = 0">Reset</button>
    <hr>
    <button @click="bgColor = bgColor === '#f0f0f0' ? '#ffeaa7' : '#f0f0f0'">
      切换背景
    </button>
  </div>
  <hr>
  <hr>
  <button @click="show = !show">切换</button>
  <p v-if="show">我显示了</p>
  <p v-else>我隐藏了</p>
  <ul v-if="todos.length > 0">
    <li v-for="(item, index) in todos" :key="index" :style="{ background: activeIndex === index ? 'red' : 'transparent', cursor: 'pointer'}"
      @click="activeIndex = index">
      {{ index }}.{{ item }}
    </li>
  </ul>
  <p v-else>暂无待办事项</p>
  <div>
    <span v-for="star in max"
    :key="star"
    @click="rating=star"
    :style="{cursor: 'pointer', color: star <=rating ? 'gold' : '#ccc', fontSize:'30px'}">
       ★
    </span>
  </div>
</template>
<!-- 
<script setup>
import { ref } from 'vue'
const items = ref([
  { id: 1, text: '苹果' },
  { id: 2, text: '香蕉' },
  { id: 3, text: '橘子' },
])
</script>

<template>
  <button @click="items.unshift({ id: Date.now(), text: '新水果' })">在前面加一项</button>
  <div v-for="item in items">
    <input v-model="item.text">
  </div>
</template> -->