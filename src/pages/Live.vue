<template>
    <div class="flex flex-wrap divide-y justify-center items-center w-full">
        <ChoosePoeple ref="peoplePicker"/>
        <Transition enter-from-class="opacity-0" enter-active-class="transition duration-1000" >
            <ChooseSeat class="w-full transition" ref="seatPicker" v-show="showSeat" :sumOfPeople="totalPeople"/>
        </Transition>
        <Transition  enter-from-class="opacity-0" enter-active-class="transition duration-1000" >
            <CheckOption class="transition" v-show="showCheck" :pages="Live" :aldult="aldultSum" :child="childSum" :seat="seat"/>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, ComputedRef, watch } from 'vue'
import ChoosePoeple from '@/components/ChoosePoeple.vue';
import ChooseSeat from '@/components/ChooseSeat.vue';
import CheckOption from '@/components/CheckOption.vue';

const Live = ref("Live")

const peoplePicker = ref()
const aldultSum : ComputedRef<number> = computed(() => peoplePicker.value?.aldult)
const childSum : ComputedRef<number> = computed(() => peoplePicker.value?.child)
var totalPeople : number

const showSeat = ref(false)

const seatPicker = ref()
const seat : ComputedRef<number[]> = computed(() => seatPicker.value?.seat)
const showCheck = ref(false)

watch(aldultSum,() => {
    totalPeople = aldultSum.value+childSum.value
    if(totalPeople != 0) {
        showSeat.value = false
        showSeat.value = true
    }
})

watch(childSum, ()=> {
    totalPeople = aldultSum.value+childSum.value
    if(totalPeople != 0) {
        showSeat.value = false
        showSeat.value = true
    }
})

watch(seat,() => {
    if( seat.value.length !== 0) {
      showCheck.value = false
      showCheck.value = true
    }
},{
  deep: true
})
</script>