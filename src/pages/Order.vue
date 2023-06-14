<template>
    <select name="NumberOfPeople">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <VueCtkTimeDatePicker v-model="UserChoose" :format="DateFormat" :formatted="DateFormat"  :input-size="InputSize_sm" :noLabel="YesBoolean" :no-keyboard="YesBoolean" :only-date="YesBoolean"> </VueCtkTimeDatePicker>

</template>

<script setup lang="ts">
import {ref} from "vue"
import VueCtkTimeDatePicker from "vue-ctk-date-time-picker"
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

const YesBoolean = ref(true)
const InputSize_sm = ref("sm")
const UserChoose = ref("")
const DateFormat = ref("YYYY-MM-DD")


</script>

<style>
</style>