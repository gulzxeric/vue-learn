<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    todos: Array,
    doneCount: Number,
})

const emit = defineEmits(['toggle-todo'])

function toggle(index) {
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