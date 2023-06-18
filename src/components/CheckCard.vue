<template>
    <div class="divide-y grid grid-col-6 grid-rows-7 place-items-center">
        <img src="@/assets/restaurant.jpg"  class="max-h-40 m-2 col-span-6 row-span-3 rounded-xl"/>
        <div class="w-full col-span-6 flex">
            <img src="@/assets/location.svg" class="w-10 ml-4 items-center col-span-1"/>
            <p class="text-xl font-bold ml-3 col-span-4 place-self-start self-center">餐廳名稱</p>
        </div>
        <div class="w-full row-span-3 col-span-6 flex flex-wrap">
            <div class="flex w-full ml-4 mt-2 items-center">
                <img src="@/assets/people.svg" class="w-10"/>
                <p class="text-xl font-bold ml-3">{{ OrderData.aldult }}大 {{ OrderData.children }}小</p>
            </div>
            <div class="flex w-full ml-4 mt-2 items-center">
                <img src="@/assets/copy.svg" class="w-10"/>
                <p class="text-xl font-bold ml-3">座位：{{ OrderData.table.toString() }}</p>
            </div>
            <div class="flex w-full ml-4 mt-2 items-center">
                <img src="@/assets/date.svg" class="w-10"/>
                <p class="text-xl font-bold ml-3">{{ OrderData.date }}</p>
            </div>
            <div class="flex w-full ml-4 mt-2 items-center">
                <img src="@/assets/time.svg" class="w-10"/>
                <p class="text-xl font-bold ml-3">{{ OrderData.time }}</p>
            </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { OrderData } from '@/store';

</script>
