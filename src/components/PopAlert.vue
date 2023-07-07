<template>
    <div v-if="props.isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded flex flex-col">
            <h2 class="text-xl font-bold mb-2">{{ props.title }}</h2>
            <p class="mb-4">{{ props.message }}</p>
            <button @click="$emit('close')" class="bg-blue-500 text-white px-4 py-2 rounded mt-auto">關閉</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    }
})

</script>