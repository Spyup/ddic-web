<template>
    <div class="w-full my-6 rounded-lg border-2 grid grid-cols-2 font-bold text-lg">
        <p v-if="prop.name != ''" class="col-span-2 mt-6 ml-4">顧客：{{prop.name}}</p>
        <p class="col-span-2 mt-6 ml-4">選擇的人數：</p>
        <p class="ml-4">{{ prop.aldult }}位大人</p>
        <p class="ml-4">{{ prop.child }}位孩童</p>
        <p class="col-span-2 mt-6 ml-4">選擇的座位：</p>
        <p class="col-span-2 ml-4">{{ prop.seat.sort().toString() }}</p>
        <p v-if="prop.date!=''" class="col-span-2 ml-4">選擇的日期：{{ prop.date }}</p>
        <p v-if="prop.time!=''" class="col-span-2 ml-4">選擇的時間：{{ prop.time }}</p>
        <button v-if="prop.pages == 'Order'" @click="changeData()" class="m-4 col-span-2 place-self-center px-10 rounded-lg shadow-lg bg-sky-100 hover:bg-sky-300 focus:bg-sky-500">確認</button>
        <div v-if="prop.pages == 'Live'" class="m-4 col-span-2 place-self-center">
            <button @click="postOrder($event)" class="px-10 rounded-lg shadow-lg bg-sky-100 hover:bg-sky-300 focus:bg-sky-500">確認</button>
        </div>
        <PopAlert v-if="prop.pages == 'Order'" :isOpen="isOpen" :title="modalTitle" :message="modalMessage" @close="isOpen = false"/>
        <PopAlert v-if="prop.pages == 'Live'" :isOpen="isOpen" :title="modalTitle" :message="modalMessage" @close="closeModal"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { OrderData } from '@/store';
import PopAlert from "@/components/PopAlert.vue";
import { router } from "@/router"

const isOpen = ref(false)
const modalTitle = ref('錯誤')
const modalMessage = ref('座位人數與用餐人數不符！！！！')

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
    },
    pages: {
        type: String,
        default: 'Order'
    },
    name: {
        type: String,
        default: ''
    }
})

async function caculatePeople():Promise<boolean> {
    const people = prop.aldult + prop.child
    let tablePeople = 0

    for (let i=0; i<prop.seat.length; i++) {
        if( prop.seat[i] == 2 || prop.seat[i] == 3 || prop.seat[i] == 6 || prop.seat[i] == 7 ) {
            tablePeople += 2
        }
        else {
            tablePeople += 4
        }
    }

    if( (people <= tablePeople) && (tablePeople-people < 2) ) {
        return true
    }
    else return false
}

async function changeData() {
    const check = await caculatePeople()
    if(check) {
        OrderData.aldult = prop.aldult
        OrderData.children = prop.child
        OrderData.date = prop.date
        OrderData.time = prop.time
        OrderData.table = prop.seat.sort()
        router.push('/Order')
    }
    else {
        isOpen.value = true
    }
}
async function postOrder(event : any) {
    event.preventDefault()
    const check = await caculatePeople()

    if(check) {
        const now = new Date()
        const liveDate = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate()
        const liveTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

        const data = await axios.post("/api/order/seat",{
                Name: prop.name,
                Gender: 3,
                Phone: '0900000000',
                Table: OrderData.table,
                Aldult: OrderData.aldult,
                Child: OrderData.children,
                Date: liveDate,
                Time: liveTime,
                Remark: ""
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        if( data != undefined ) {
            modalTitle.value = '成功'
            modalMessage.value = '訂位成功！'
            isOpen.value = true
        }
        if( isOpen.value === false ) {
            router.push('/Live')
        }
    }
    else {
        isOpen.value = true
    }
}

async function closeModal() {
    router.push('/Live')
}


</script>
