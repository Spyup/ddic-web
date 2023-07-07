<template>
    <div class="w-full mt-6">
        <div class="grid w-full mb-4 sm:grid-cols-4 lg:grid-cols-5 place-items-center">
            <p class="sm:col-span-4 lg:col-span-5 mt-4 justify-self-start font-bold text-xl">中午</p>
            <button class="w-28 h-10 m-2 rounded-lg shadow-lg bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" v-for="key in noonButton" :disable="!key[1]" @click="time = key[0]">{{key[0]}}</button>
        </div>
        <div class="grid w-full mb-4 sm:grid-cols-4 lg:grid-cols-5 place-items-center">
            <p class="sm:col-span-4 lg:col-span-5 mt-4 justify-self-start font-bold text-xl">下午</p>
            <button class="w-28 h-10 m-2 rounded-lg shadow-lg bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" v-for="key in afternoonButton" :disable="!key[1]" @click="time = key[0]">{{key[0]}}</button>
        </div>
        <div class="grid w-full mb-4 sm:grid-cols-4 lg:grid-cols-5 place-items-center">
            <p class="sm:col-span-4 lg:col-span-5 mt-4 justify-self-start font-bold text-xl">晚上</p>
            <button class="w-28 h-10 m-2 rounded-lg shadow-lg bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" v-for="key in nightButton" :disable="!key[1]" @click="time = key[0]">{{key[0]}}</button>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { ref,onUpdated } from 'vue';
import axios from 'axios';

const prop = defineProps({
    date: {
        type: String,
        default: ''
    },
    aldult: {
        type: Number,
        default: 0
    },
    child: {
        type: Number,
        default: 0
    }
})

let time = ref('')

let noonButton = new Map([	
        ["11:00",false], ["11:15",false], ["11:30",false], ["11:45",false],
        ["12:00",false], ["12:15",false], ["12:30",false], ["12:45",false],	
        ["13:00",false], ["13:15",false], ["13:30",false], ["13:45",false]        
])

let afternoonButton = new Map([
        ["14:00",false], ["14:15",false], ["14:30",false], ["14:45",false],	
        ["15:00",false], ["15:15",false], ["15:30",false], ["15:45",false],
        ["16:00",false], ["16:15",false], ["16:30",false], ["16:45",false]
])

let nightButton = new Map([
        ["17:00",false], ["17:15",false], ["17:30",false], ["17:45",false],
        ["18:00",false], ["18:15",false], ["18:30",false], ["18:45",false],
        ["19:00",false], ["19:15",false], ["19:30",false], ["19:45",false],
        ["20:00",false], ["20:15",false], ["20:30",false], ["20:45",false],
        ["21:00",false], ["21:15",false], ["21:30",false], ["21:45",false]
])

onUpdated(() => {
    if(prop.date !== '') {
        axios.get("/api/order/empty",{
            params: {
                date: prop.date,
                aldult: prop.aldult,
                child: prop.child
            }
        }).then((response) => {
            const emptySeat:Array<string> = response.data.Empty
            for(var i=0; i<emptySeat.length; i++) {
                if (noonButton.get(emptySeat[i]) === false) {
                    noonButton.set(emptySeat[i],true)
                }
                else if (afternoonButton.get(emptySeat[i]) === false) {
                    afternoonButton.set(emptySeat[i],true)
                }
                else if (nightButton.get(emptySeat[i]) === false) {
                    nightButton.set(emptySeat[i],true)
                }
            }
        }).catch(error => {
            console.log(error)
        })
    }    
})

defineExpose({time})
</script>
