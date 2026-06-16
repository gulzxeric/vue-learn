<script setup>
import { ref, computed } from 'vue'

// Props — 父组件传进来的数据
const props = defineProps({
  rating: Number,
  max: Number,
})

// emit — 通知父组件
const emit = defineEmits(['update-rating'])

const level = computed(() => {
  if (props.rating <= 2) return '很差'
  if (props.rating <= 4) return '一般'
  return '很好'
})

function setRating(star) {
  emit('update-rating', star)
}
</script>
<template>
  <div>
    <span v-for="star in max" :key="star" @click="setRating(star)" :style="{
      cursor: 'pointer',
      color: star <= rating ? 'gold' : '#ccc', fontSize: '30px'
    }">
      ★
    </span>
    <span>{{ level }}</span>
  </div>
</template>