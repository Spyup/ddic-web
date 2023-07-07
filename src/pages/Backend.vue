<template>
    <div class="w-full h-full">
        <div class="flex justify-center items-center">
            <button class="border-2 rounded-md px-10 py-1" @click="goToPreviousDay">Previous Day</button>
            <span class="grow text-2xl font-black text-center">{{ selectedDate.format('YYYY-MM-DD') }}</span>
            <button class="border-2 rounded-md px-10 py-1" @click="goToNextDay">Next Day</button>
        </div>
        <table class="border-collapse w-full table-fixed">
            <thead class="border-2">
                <tr class="border-2">
                    <th class="border-2"></th>
                    <th class="border-2 text-center text-xl" v-for="table in tables" :key="table">{{ table }}</th>
                </tr>
            </thead>
            <tbody class="border-2">
                <tr class="border-2 text-center" v-for="slot in slots" :key="slot">
                    <td class="border-2 text-xl">{{ slot }}</td>
                    <template v-for="table in tables">
                        <td class="border-2 text-center text-3xl" v-if="hasBooked(slot,table)" :class="isBooked(slot, table)?'booked':''" :rowspan="isBooked(slot, table)?7:1"  @click="handleCellClick(slot, table)">
                            {{ getBookingInfo(slot, table) }}
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
        <PopInfo :isOpen="isOpen" @close="isOpen = false" :name="showBooking?.Name" :phone="showBooking?.Phone" :gender="showBooking?.Gender" :date="showBooking?.Date" :time="showBooking?.Time" :aldult="showBooking?.Aldult" :children="showBooking?.Child" :table="showBooking?.Table"/>
    </div>
</template>
  
<script setup lang="ts">
import { ref,onMounted } from 'vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import axios from 'axios';
import PopInfo from '@/components/PopInfo.vue';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
  
interface Booking {
    Name: string
    Phone: string
    Gender: number
    Date: string
    Time: string
    Aldult: number
    Child: number
    Table: Array<number>
    Remark: string
    Notify: number    
}
  
const tables = ref(['1', '2', '3', '4', '5', '6', '7', '8']);
const bookings = ref<Booking[]>([]);
const showBooking = ref<Booking>();
const isOpen = ref(false);

const slots = ref([
    '11:00','11:15','11:30','11:45',
    '12:00','12:15','12:30','12:45',
    '13:00','13:15','13:30','13:45',
    '14:00','14:15','14:30','14:45',
    '15:00','15:15','15:30','15:45',
    '16:00','16:15','16:30','16:45',
    '17:00','17:15','17:30','17:45',
    '18:00','18:15','18:30','18:45',
    '19:00','19:15','19:30','19:45',
    '20:00','20:15','20:30','20:45',
    '21:00','21:15','21:30','21:45',
]);

let selectedDate = ref(dayjs()); // 預設選擇當天的日期

const isBooked = (start: string, table: string) => {
    const booking = bookings.value.find(b => selectedDate.value.format('YYYY-MM-DD') === b.Date && start == b.Time && b.Table.find(b => b===Number(table)) );

    return !!booking;
};

const hasBooked = (start: string, table: string) => {
    const booking = bookings.value.find(b => selectedDate.value.format('YYYY-MM-DD') === b.Date && start > b.Time && start<=add90Minutes(b.Time) && b.Table.find(b => b===Number(table)));

    return !booking;
};

const getBookingInfo = (start: string, table: string) => {
    const booking = bookings.value.find(b => selectedDate.value.format('YYYY-MM-DD') === b.Date && start == b.Time && b.Table.find(b => b===Number(table)));

    return booking ? booking.Name : '';
};
  
const handleCellClick = (start: string, table: string) => {
    const booking = bookings.value.find(b => selectedDate.value.format('YYYY-MM-DD') === b.Date && start == b.Time && b.Table.find(b => b===Number(table)));
    if(booking){
        showBooking.value = booking
        isOpen.value = true
    }
};

const goToPreviousDay = () => {
  selectedDate.value = selectedDate.value.subtract(1, 'day');
};

const goToNextDay = () => {
  selectedDate.value = selectedDate.value.add(1, 'day');
};

const add90Minutes = (time: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    date.setMinutes(date.getMinutes() + 90);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

onMounted(async() => {
    const data = await axios.get("/api/customer/status")
    const customerData = data.data.OrderStatus
    
    for(var i=0; i<customerData.length;i++) {
        bookings.value.push(customerData[i])
    }
    
    console.log(bookings.value)
})
</script>
  
<style scoped>
td.booked {
  background-color: #61BFAD;
}
</style>