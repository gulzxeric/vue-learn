<script setup lang="ts">
interface Todo {
  text: string
  done: boolean
}

const props = defineProps<{
    todos: Todo[],
    doneCount: number,
}>()

const emit = defineEmits<{'toggle-todo':[value: number]}>()

function toggle(index: number) {
    emit('toggle-todo', index)
}


</script>
<template>
    <p>Done: {{ doneCount }} / {{ todos.length }}</p>
    <ul>
        <li v-for="(item, index) in todos" :key="index">
            <input type="checkbox" :checked="item.done" @change="toggle(index)">
            <span :style="{ textDecoration: item.done ? 'line-through' : 'none' }">
                {{ item.text }}
            </span>
        </li>
    </ul>
</template>