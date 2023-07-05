<template>
    <div class="border-2 rounded-xl">
        <form class="h-full w-full m-6 grid grid-cols-12 grid-rows-6 justify-center items-center">
            <p class="text-lg col-span-12">訂位人姓名</p>
            <input type="text" class="mr-2 pl-2 rounded-md border-2 h-10 col-span-4" v-model="name"/>
            <div class="col-span-2">
                <input type="radio" class="w-1/3" :value=0 v-model="gender">
                <label>小姐</label>
            </div>
            <div class="col-span-2">
                <input type="radio" class="w-1/3" :value=1 v-model="gender">
                <label>先生</label>
            </div>
            <div class="col-span-2">
                <input type="radio" class="w-1/3" :value=2 v-model="gender">
                <label>其他</label>
            </div>
            <p class="text-lg col-span-12">訂位人手機號碼</p>
            <input type="text" class="mr-2 pl-2 text-justify rounded-md border-2 h-10 col-span-10" v-model="phone"/>
            <button class="col-span-12 rounded-md w-1/6 bg-cyan-100 place-self-center" @click="submit($event)">確認</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { OrderData } from '@/store';
import axios from 'axios';
import {router} from '@/router'

const gender = ref<number>()
const name = ref<string>()
const phone = ref<string>()

async function submit(event : any) {
    event.preventDefault()
    const data = await axios.post("/api/order/seat",{
            Name: name.value,
            Gender: gender.value,
            Phone: phone.value,
            Table: OrderData.table,
            Aldult: OrderData.aldult,
            Child: OrderData.children,
            Date: OrderData.date,
            Time: OrderData.time,
            Remark: ""
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })

    if( data != undefined ) {
        alert("訂位成功！")
        router.push('/')
    }
}

</script>