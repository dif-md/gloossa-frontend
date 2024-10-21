<script setup lang="ts">
import Book from '../IconsForNavBar/Book.vue';
import Headphones from '../IconsForNavBar/Headphones.vue';
import Memes from '../IconsForNavBar/Memes.vue';
import Puzzles from '../IconsForNavBar/Puzzles.vue';
import VideoPlayer from '../IconsForNavBar/VideoPlayer.vue';
</script>

<template>
    <div class="fixed bottom-0 left-0 right-0 bg-white z-10">
        <ul class="flex justify-between gap-2">
            <li class="py-4 px-2"><Book class="flex items-center justify-center"/> Чтение</li>
            <li class="py-4 px-2"><Headphones class="flex items-center justify-center"/> Слушание</li>
            <li class="py-4 px-2"><VideoPlayer class="flex items-center justify-center"/> Видео</li>
            <li class="py-4 px-2"><Puzzles class="flex items-center justify-center"/> Ребусы</li>
            <li class="py-4 px-2"><Memes class="flex items-center justify-center"/> Мемы</li>
        </ul>
    </div>
</template>