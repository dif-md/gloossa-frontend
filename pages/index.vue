<template>
    <div class="bg-slate-500">
        <Header color="white"/>
    </div>
    <div class="bg-slate-200 grid grid-cols-2 gap-3 p-3 justify-between ">
        <LevelItem v-for="(item) in cards" :title="item.title" :description="item.description"
            :dotCount="item.dotCount" :filledDots="item.filledDots" />
    </div>
    <div>
        <Flag/>
    </div>
    <div>
        <AudioPlayer/>
    </div>
    <div class="bg-[#E2E8F0]">
        <WordTranslated />
    </div>
    <div>
        <DrawerFish/>
    </div>
    <div>
        <CourseFilter />
    </div>
    <div class="">
        <StartButton />
    </div>
    <!-- <div class="flex justify-center">
        <CatGloossa/>
    </div> -->
    <div class="bg-slate-200">
        <AboutMe/>
    </div>
    <div class="bg-slate-200 py-5">
        <Faq/>
    </div>
    <div class="bg-slate-200">

        <CourseСards />
    </div>
    <div class="flex justify-center">
        <ShowMoreButton />
    </div>

   
  
</template>

<script setup>
import CourseСards from "~/components/ui/CourseСards/CourseСards.vue";
import LevelItem from "@/components/ui/LevelItem/LevelItem.vue";
import AboutMe from "~/components/ui/AboutGloossa/AboutMe.vue";
import Faq from "~/components/ui/FAQ/Faq.vue";
import Header from "~/components/ui/Header/Header.vue";
import StartButton from "~/components/ui/StartButton/StartButton.vue";
import ShowMoreButton from "~/components/ui/ShowMoreButton/ShowMoreButton.vue";
import CourseFilter from "~/components/ui/CourseFilter/CourseFilter.vue";
import Flag from "~/components/ui/Flag/Flag.vue";
import AudioPlayer from "~/components/ui/AudioPlayer/AudioPlayer.vue";
import WordTranslated from "~/components/ui/WordTranslated/WordTranslated.vue";
import DrawerFish from "~/components/ui/DrawerFish/DrawerFish.vue";

const cards = [
  { title: 'Очень легко', description: 'если хочешь начать с нуля', dotCount: 6, filledDots: 1 },
  { title: 'Легко', description: 'если уже немного знаешь', dotCount: 6, filledDots: 2 },
  { title: 'Средне', description: 'если ещё много трудного', dotCount: 6, filledDots: 3 },
  { title: 'Выше среднего', description: 'если понимаешь речь на слух', dotCount: 6, filledDots: 4 },
  { title: 'Сложно', description: 'если уже свободно говоришь', dotCount: 6, filledDots: 5 },
  { title: 'Очень сложно', description: 'бесконечность не предел', dotCount: 6, filledDots: 6 },
];
</script>