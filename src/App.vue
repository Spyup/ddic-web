<template>
    <div class="flex flex-wrap divide-y justify-center items-center w-1/2 m-auto">
      <RestaurantPicture class="w-full"/>
      <DatePicker ref="choose" class="w-full"/>
      <ChooseTime class="w-full"/>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import DatePicker from "@/components/DatePicker.vue"
import RestaurantPicture from "@/components/RestaurantPicture.vue";
import ChooseTime from "@/components/ChooseTime.vue"

const choose = ref()
// const tt = computed(() => choose.value?.UserChoose)
</script>

<style>
</style>
