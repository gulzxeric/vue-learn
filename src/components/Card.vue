<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="card-box">
    <slot name="header" />
    <h3>{{ title }}</h3>
    <slot>There is no things at now</slot>
    <slot name="footer" />
  </div>
</template>

<style scoped>
.card-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
}

.card-box h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
}
</style>