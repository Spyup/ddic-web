<template>
    <div class="w-full grid grid-cols-11 grid-rows-7">
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
        <button class="col-span-2 border-2" :class="[seatStat.get(1)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(1)!=-1}]" @click="checkTable(1)" :disabled="seatStat.get(1)">1</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2" :class="[seatStat.get(2)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(2)!=-1}]" @click="checkTable(2)" :disabled="seatStat.get(2)">2</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2" :class="[seatStat.get(3)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(3)!=-1}]" @click="checkTable(3)" :disabled="seatStat.get(3)">3</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <button class="row-span-2 border-2" :class="[seatStat.get(4)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(4)!=-1}]" @click="checkTable(4)" :disabled="seatStat.get(4)">4</button>
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
        <button class="col-span-2 border-2" :class="[seatStat.get(5)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(5)!=-1}]" @click="checkTable(5)" :disabled="seatStat.get(5)">5</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2" :class="[seatStat.get(6)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(6)!=-1}]" @click="checkTable(6)" :disabled="seatStat.get(6)">6</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <button class="border-2" :class="[seatStat.get(7)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(7)!=-1}]" @click="checkTable(7)" :disabled="seatStat.get(7)">7</button>
        <img src="@/assets/user.svg" class="opacity-0"/>
        <img src="@/assets/user.svg"/>
        <button class="row-span-2 border-2" :class="[seatStat.get(8)?disableButton:enableButton,{'bg-sky-500':seat.indexOf(8)!=-1}]" @click="checkTable(8)" :disabled="seatStat.get(8)">8</button>
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
import { ref, watch } from 'vue'

var seatStat = new Map([
        [1,false], [2,false], [3,false], [4,false],
        [5,false], [6,false], [7,false], [8,false]
])

const seat = ref<Number[]>([])

const disableButton = ref("bg-sky-900")
const enableButton = ref("bg-sky-100 hover:bg-sky-300")

const prop = defineProps({
    sumOfPeople: {
        type: Number,
        default: 0
    },
})

function checkTable(table : Number) {
    var location = seat.value.indexOf(table)
    
    if(location === -1) {
        seat.value.push(table)
    }
    else {
        seat.value.splice(location,1)
    }
}

watch(prop,()=> {
    if(prop.sumOfPeople <= 2) {
        seatStat.set(1,true)
        seatStat.set(2,false)
        seatStat.set(3,false)
        seatStat.set(4,true)
        seatStat.set(5,true)
        seatStat.set(6,false)
        seatStat.set(7,false)
        seatStat.set(8,true)        
    }
    else if(prop.sumOfPeople <=4) {
        seatStat.set(1,false)
        seatStat.set(2,false)
        seatStat.set(3,false)
        seatStat.set(4,true)
        seatStat.set(5,false)
        seatStat.set(6,false)
        seatStat.set(7,false)
        seatStat.set(8,true) 
    }else {
        seatStat.set(1,false)
        seatStat.set(2,false)
        seatStat.set(3,false)
        seatStat.set(4,false)
        seatStat.set(5,false)
        seatStat.set(6,false)
        seatStat.set(7,false)
        seatStat.set(8,false) 
    }
})

defineExpose({seat})

</script>