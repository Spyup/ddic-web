<template>
    <div class="grid grid-cols-3 gap-3">
        <p class="col-span-2 text-xl font-bold mt-7">用餐人數</p>
        <p class="text-xl font-bold mt-7">訂位日期</p>
        <select name="aldult" v-model="aldult" class="text-center rounded-sm border-2">
            <option selected :value=0>請選擇用餐人數</option>
            <option v-for="i in 30" :value=i>{{i}}位大人</option>
        </select>
        <select name="child" v-model="child" class="text-center rounded-sm border-2">
            <option selected :value=0>0位孩童</option>
            <option v-for="i in 15" :value=i>{{i}}位孩童</option>
        </select>
        <VueCtkTimeDatePicker v-model="date" :min-date="minDate" :max-date="maxDate" :format="DateFormat" :formatted="DateFormat" :noLabel="YesBoolean" :no-button-now="YesBoolean" :noClearButton="YesBoolean" :no-keyboard="YesBoolean" :only-date="YesBoolean"> </VueCtkTimeDatePicker>
    </div>
</template>

<script setup lang="ts">
// Import package
import {ref} from "vue"
import VueCtkTimeDatePicker from "vue-ctk-date-time-picker"
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// Set parameter of VueCtkTimeDatePicker 
const YesBoolean = ref(true)
const DateFormat = ref("YYYY-MM-DD")

// Set minDate and MaxDate
const currentDate = new Date()
const minDate = currentDate.toISOString().split('T')[0]
currentDate.setDate(currentDate.getDate()+29)
const maxDate = currentDate.toISOString().split('T')[0]

let date = ref<string>()
let aldult = ref<number>(0)
let child = ref<number>(0)

defineExpose({
    "date":date,
    "aldult":aldult,
    "child":child
})

</script>
