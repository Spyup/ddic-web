<template>
    <div>
        <button class="w-28 h-10 m-2 rounded-lg shadow-lg bg-sky-100 hover:bg-sky-300" v-for="key in timeButton" :disable="!key[1]">{{key[0]}}</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';

let timeButton = new Map([
        ["09:00",false], ["09:15",false], ["09:30",false], ["09:45",false],
		["10:00",false], ["10:15",false], ["10:30",false], ["10:45",false],	
        ["11:00",false], ["11:15",false], ["11:30",false], ["11:45",false],
        ["12:00",false], ["12:15",false], ["12:30",false], ["12:45",false],	
        ["13:00",false], ["13:15",false], ["13:30",false], ["13:45",false],	
        ["14:00",false], ["14:15",false], ["14:30",false], ["14:45",false],	
        ["15:00",false], ["15:15",false], ["15:30",false], ["15:45",false],
        ["16:00",false], ["16:15",false], ["16:30",false], ["16:45",false],
        ["17:00",false], ["17:15",false], ["17:30",false], ["17:45",false],
        ["18:00",false], ["18:15",false], ["18:30",false], ["18:45",false],
        ["19:00",false], ["19:15",false], ["19:30",false], ["19:45",false],
        ["20:00",false], ["20:15",false], ["20:30",false], ["20:45",false],
        ["21:00",false], ["21:15",false], ["21:30",false], ["21:45",false]
])


onMounted(() => {
    axios.get("/api/order/empty",{
        params: {
            date: "2023-06-16",
            NumberOfPeople: 2
        }
    }).then((response) => {
        const emptySeat = response.data['Empty']
        for(var i=0; i<emptySeat.length; i++) {
            if (!timeButton.get(emptySeat[i])) {
                timeButton.set(emptySeat[i],true)
            }
        }
        const timeButtonKey = timeButton.keys()
        const timeButtonValue = timeButton.values()
    }).catch(error => {
        console.log(error)
    })
})
</script>

<style>
</style>