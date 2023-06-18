<template>
    <div class="w-full grid grid-cols-11 grid-rows-7 ">
        <!-- Row 1 -->
        <img src="@/assets/user.svg" class=""/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <!-- Row 2 -->
        <button class="col-span-2 border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(1)" :disabled="seatStat.get(1)">1</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(2)" :disabled="seatStat.get(2)">2</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(3)" :disabled="seatStat.get(3)">3</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <button class="row-span-2 border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(4)" :disabled="seatStat.get(4)">4</button>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <!-- Row 3 -->
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg"  class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <!-- Row 4 -->
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <!-- Row 5 -->
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <!-- Row 6 -->
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="col-span-2 border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(5)" :disabled="seatStat.get(5)">5</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(6)" :disabled="seatStat.get(6)">6</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(7)" :disabled="seatStat.get(7)">7</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <button class="row-span-2 border-2 bg-sky-100 hover:bg-sky-300 focus:bg-sky-500" @click="checkTable(8)" :disabled="seatStat.get(8)">8</button>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <!-- Row 7 -->
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg"/>
        <img src="@/assets/user.svg" class="opacity-0"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

var seatStat = new Map([
        [1,false], [2,false], [3,false], [4,false],
        [5,false], [6,false], [7,false], [8,false]
])

const seat = ref<Number[]>([])

function checkTable(table : Number) {
    var location = seat.value.indexOf(table)
    
    if(location === -1) {
        seat.value.push(table)
    }
    else {
        seat.value.splice(location,1)
    }
}

defineExpose({seat})

</script>