<template>
    <div class="flex flex-wrap divide-y justify-center items-center w-1/2 m-auto">
      <RestaurantPicture class="w-full"/>
      <DatePicker ref="datePicker" class="w-full"/>
      <Transition enter-from-class="opacity-0" enter-active-class="transition duration-1000" >
        <ChooseTime class="w-full divide-y transition" ref="timePicker" v-show="showTime" :date="date" :aldult="aldultSum" :child="childSum" />
      </Transition>
      <Transition enter-from-class="opacity-0" enter-active-class="transition duration-1000" >
        <ChooseSeat class="w-full transition" ref="seatPicker" v-show="showSeat" :sumOfPeople="totalPeople"/>
      </Transition>
      <Transition  enter-from-class="opacity-0" enter-active-class="transition duration-1000" >
        <CheckOption class="transition" v-show="showCheck" :pages="Order" :aldult="aldultSum" :child="childSum" :date="date" :time="time" :seat="seat"/>
      </Transition>
    </div>
</template>

<script setup lang="ts">
import {ref,computed, watch, ComputedRef} from "vue"
import DatePicker from "@/components/DatePicker.vue"
import RestaurantPicture from "@/components/RestaurantPicture.vue";
import ChooseTime from "@/components/ChooseTime.vue"
import ChooseSeat from "@/components/ChooseSeat.vue";
import CheckOption from "@/components/CheckOption.vue";

const Order = ref("Order")

const datePicker = ref()
const timePicker = ref()
const seatPicker = ref()

const aldultSum : ComputedRef<number> = computed(() => datePicker.value?.aldult)
const childSum : ComputedRef<number> = computed(() => datePicker.value?.child)
var totalPeople : number
const date : ComputedRef<string> = computed(() => datePicker.value?.date)
const showTime = ref(false)

const time = computed(() => timePicker.value?.time)
const showSeat = ref(false)

const seat : ComputedRef<number[]> = computed(() => seatPicker.value?.seat)
const showCheck = ref(false)

watch(aldultSum,() => {
  totalPeople = aldultSum.value+childSum.value
  if(showSeat.value === true) {
    showSeat.value = false
    showSeat.value = true
  }
})

watch(childSum, ()=> {
  totalPeople = aldultSum.value+childSum.value
  if(showSeat.value === true) {
    showSeat.value = false
    showSeat.value = true
  }
})

watch(date, () => {
  showTime.value = false
  showTime.value = true
  if(showSeat.value === true) {
    showSeat.value = false
    showSeat.value = true
  }
})

watch(time, () => {
  if(time.value !== '') {
    showSeat.value = false
    showSeat.value = true
  }
})

watch(seat,() => {
  if( seat.value.length !== 0) {
    showCheck.value = true
  }
},{
  deep: true
})

</script>
