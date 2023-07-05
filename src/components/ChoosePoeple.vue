<template>
    <div class="grid grid-cols-3 gap-2 w-full">
        <p class="col-span-2 text-xl font-bold mt-7">用餐人數</p>
        <p class="text-xl font-bold mt-7">訂位人姓名</p>
        <select name="aldult" v-model="aldult" class="text-center rounded-sm border-2">
            <option selected :value=0>請選擇用餐人數</option>
            <option v-for="i in 30" :value=i>{{i}}位大人</option>
        </select>
        <select name="child" v-model="child" class="text-center rounded-sm border-2">
            <option selected :value=0>0位孩童</option>
            <option v-for="i in 15" :value=i>{{i}}位孩童</option>
        </select>
        <input type="text" class="rounded-md border-2 h-10" v-model="name"/>
    </div>
</template>

<script setup lang="ts">
// Import package
import {ref} from "vue"

let aldult = ref<number>(0)
let child = ref<number>(0)
const name = ref<String>('')

defineExpose({
    "aldult":aldult,
    "child":child,
    "name": name
})
</script>