<template>
    <div class="bg-white p-2 rounded-xl mx-3 relative">
        <div class="rounded-2xl relative">
            <img :src="WolfGoats" alt="" class="rounded-xl w-full">
            <IconTypeCourses :svgIcon="IconBook" class="absolute top-3 right-3 bg-[#FFFFFFD9] p-2 rounded-full" />
            <div class="">
                <DotCount :dotCount="6" :filledDots="3"
                    class="absolute bottom-3 right-3 flex justify-between items-center bg-[#FFFFFFD9] px-3 h-4 rounded-xl " />
            </div>

        </div>
        <h1 class="text-lg font-semibold">Волк и семеро козлят</h1>
        <div class="flex justify-between items-center">
            <span class="text-[#64748B]">
                12 глав
            </span>
            <div class="flex items-center gap-1">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.16667 1.04167C4.51185 1.04167 4.79167 1.32149 4.79167 1.66667V2.57096L6.10299 2.30869C7.59732 2.00983 9.14631 2.15204 10.5612 2.71801L10.7309 2.78589C11.9099 3.25748 13.2075 3.34555 14.4394 3.03758C15.4649 2.7812 16.4583 3.55683 16.4583 4.61391V10.7531C16.4583 11.5768 15.8977 12.2948 15.0986 12.4946L14.9199 12.5393C13.3178 12.9398 11.6303 12.8253 10.097 12.2119C8.90721 11.736 7.60469 11.6164 6.34814 11.8678L4.79167 12.179V18.3333C4.79167 18.6785 4.51185 18.9583 4.16667 18.9583C3.82149 18.9583 3.54167 18.6785 3.54167 18.3333V1.66667C3.54167 1.32149 3.82149 1.04167 4.16667 1.04167ZM4.79167 10.9043L6.10299 10.642C7.59732 10.3432 9.14631 10.4854 10.5612 11.0513C11.8505 11.5671 13.2696 11.6634 14.6167 11.3266L14.7955 11.2819C15.0381 11.2212 15.2083 11.0032 15.2083 10.7531V4.61391C15.2083 4.37005 14.9792 4.19111 14.7426 4.25026C13.2558 4.62196 11.6896 4.51567 10.2667 3.94649L10.097 3.87861C8.90721 3.40269 7.60469 3.28311 6.34814 3.53442L4.79167 3.84571V10.9043Z"
                            fill="#64748B" />
                    </svg>
                </span>
                <span class="text-[#64748B]">
                    75%
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
import WolfGoats from '@/assets/images/wolf-goats.jpg'
import IconTypeCourses from '../IconTypeCourses/IconTypeCourses.vue';
import DotCount from '../DotCount/DotCount.vue';
import IconBook from '../IconBook/IconBook.vue';
</script>