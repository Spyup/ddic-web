<template>
    <div class="w-full my-6 rounded-lg border-2 grid grid-cols-2 font-bold text-lg">
        <p class="col-span-2 mt-6 ml-4">選擇的人數：</p>
        <p class="ml-4">{{ prop.aldult }}位大人</p>
        <p class="ml-4">{{ prop.child }}位孩童</p>
        <p class="col-span-2 mt-6 ml-4">選擇的座位：</p>
        <p class="col-span-2 ml-4">{{ prop.seat.sort().toString() }}</p>
        <p class="col-span-2 ml-4">選擇的日期：{{ prop.date }}</p>
        <p class="col-span-2 ml-4">選擇的時間：{{ prop.time }}</p>
        <router-link :to="{name:'Order'}" class="m-4 col-span-2 place-self-center">
            <button @click="changeData()" class="px-10 rounded-lg shadow-lg bg-sky-100 hover:bg-sky-300 focus:bg-sky-500">確認</button>
        </router-link>        
    </div>
</template>

<script setup lang="ts">
import { OrderData } from '@/store';

const prop = defineProps({
    aldult: {
        type: Number,
        default: 0
    },
    child: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    },
    seat: {
        type: Array<number>,
        default: () => []
    }
})

function changeData() {
    OrderData.aldult = prop.aldult
    OrderData.children = prop.child
    OrderData.date = prop.date
    OrderData.time = prop.time
    OrderData.table = prop.seat.sort()
}

</script>
