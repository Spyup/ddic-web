<template>
    <div class="grid grid-cols-7 grid-rows-7 w-8/12 h-screen m-auto">
        <p class="col-span-7 text-right font-bold text-3xl place-self-center">訂位資訊</p>
        <CheckCard class="h-1/2 col-span-2 row-span-6 rounded-xl border-2 shadow-sm" />
        <OrderInfo class="h-1/2 w-5/6 ml-6 col-span-5 row-span-6 shadow-sm"/>
    </div>
</template>

<script setup lang="ts">
import CheckCard from '@/components/CheckCard.vue';
import OrderInfo from '@/components/OrderInfo.vue';


</script>