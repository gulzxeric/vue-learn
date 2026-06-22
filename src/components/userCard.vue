<script setup lang="ts">
interface User {
  id: number
  avatar: string
  name: string
  faved: boolean
  email: string
}
const props = defineProps<{
  users: User[],
  userMax: number,
}>()

const emit = defineEmits<{'toggle-friends': [id: number]}>()

function setStar(id:number) {
  emit('toggle-friends', id)
}

</script>
<template>
  <p>
    <span>Friends: </span>
    <span>{{ users.length }} / {{ userMax }}</span>
  </p>
  <ul :style="{ listStyleType: 'none' }">
    <li v-for="(item, index) in users" :key="item.id">
      <span>{{ item.avatar }}</span>
      <span>{{ item.name }}</span>
      <span @click="setStar(item.id)" :style="{
        cursor: 'pointer',
        color: item.faved ? 'gold' : '#ccc', fontSize: '30px'
      }">
        ★
      </span>
      <span>{{ item.email }}</span>
    </li>
  </ul>
  <span v-show="users.length < userMax">There's no more users</span><br>
</template>