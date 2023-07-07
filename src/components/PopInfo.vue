<template>
    <div v-if="props.isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white w-80 p-4 rounded flex flex-col">
            <h2 class="text-xl font-bold mb-2">定位資訊</h2>
            <p class="mb-4">姓名：{{ props.name }}</p>
            <p class="mb-4">電話號碼：{{ props.phone }}</p>
            <p v-if="props.gender==0" class="mb-4">性別：小姐</p>
            <p v-if="props.gender==1" class="mb-4">性別：先生</p>
            <p v-if="props.gender==2" class="mb-4">性別：order</p>
            <p class="mb-4">日期：{{ props.date }}</p>
            <p class="mb-4">時間：{{ props.time }}</p>
            <p class="mb-4">成人：{{ props.aldult }}</p>
            <p class="mb-4">小孩：{{ props.children }}</p>
            <p class="mb-4">桌號：{{ props.table.sort().toString() }}</p>
            <button @click="$emit('close')" class="bg-white-500 px-4 py-2 border-2 border-slate-500 rounded mt-auto">關閉</button>
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
    name: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        default: ''
    },
    date: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    },
    aldult: {
        type: Number,
        default: ''
    },
    children: {
        type: Number,
        default: 0
    },
    table: {
        type: Array<number>,
        default: []
    }
})

</script>