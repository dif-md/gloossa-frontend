<template>
    <div>
        <Header color="black"/>
    </div>
    <div class="bg-slate-200 grid grid-cols-2 gap-3 p-3 justify-between ">
        <LevelItem v-for="(item) in cards" :title="item.title" :description="item.description"
            :dotCount="item.dotCount" :filledDots="item.filledDots" />
    </div>

    <div class="">
        <StartButton />
    </div>
    <div class="flex justify-center">
        <CatGloossa/>
    </div>
    <div>
        <Faq/>
    </div>
</template>

<script setup>
import LevelItem from "@/components/ui/LevelItem/LevelItem.vue";
import CatGloossa from "~/components/ui/CatGloossa/CatGloossa.vue";
import Faq from "~/components/ui/FAQ/Faq.vue";
import Header from "~/components/ui/Header/Header.vue";
import StartButton from "~/components/ui/StartButton/StartButton.vue";

const cards = [
  { title: 'Очень легко', description: 'если хочешь начать с нуля', dotCount: 6, filledDots: 1 },
  { title: 'Легко', description: 'если уже немного знаешь', dotCount: 6, filledDots: 2 },
  { title: 'Средне', description: 'если ещё много трудного', dotCount: 6, filledDots: 3 },
  { title: 'Выше среднего', description: 'если понимаешь речь на слух', dotCount: 6, filledDots: 4 },
  { title: 'Сложно', description: 'если уже свободно говоришь', dotCount: 6, filledDots: 5 },
  { title: 'Очень сложно', description: 'бесконечность не предел', dotCount: 6, filledDots: 6 },
];
</script>