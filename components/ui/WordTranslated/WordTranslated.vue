<template>
    <div class="mx-3 ">
        <div>
            <h1 class="text-sm text-gray">
                Слово
            </h1>
            <div class="flex items-center">
                <span class="font-fredoka text-base text-gray">Your</span> 
                <span class="font-inter text-sm ml-4 px-2">
                    Твой 
                </span>
                <span class="font-inter text-sm  px-2">
                    Ваш
                </span>
            </div>
        </div>
        <div>
            <div class="flex justify-between text-sm text-gray">
                <div>
                    Предложение
                </div>
                <div @click="openModalWindow()" class="flex items-center">
                    Скрыть 
                    <div>
                        <ChevronUp :class="['mx-1 duration-300', { 'rotate-180 duration-300': isOpen }]" />
                    </div>
                </div>
            </div>
            <span v-if="isOpen" class="">
                Ваша мама пришла и принесла молока!
            </span>
        </div>
    </div>
</template>
<script setup>
import ChevronUp from '../ChevronUp/ChevronUp.vue';

const isOpen = ref(true)
const openModalWindow = () => {
    isOpen.value = !isOpen.value
}
</script>