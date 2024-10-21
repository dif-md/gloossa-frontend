<template>
    <div class="bg-slate-500">
        <Header color="white" />
    </div>
    <div class="bg-slate-200 grid grid-cols-2 gap-3 p-3 justify-between ">
        <LevelItem v-for="(item) in cards" :title="item.title" :description="item.description" :dotCount="item.dotCount"
            :filledDots="item.filledDots" />
    </div>
    <div>
        <Flag />
    </div>

    <NavBar />
<DialogMenuSelect />

    <div>
        <AudioPlayer />
    </div>
    <div class="bg-[#E2E8F0]">
        <WordTranslated />
    </div>
    <div>
        <RatingFish />
    </div>
    <div>
        <DrawerFish />
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
        <AboutMe />
    </div>
    <div class="bg-slate-200 py-5">
        <Faq />
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
import RatingFish from "~/components/ui/atingFish/RatingFish.vue";
import NavBar from "~/components/ui/NavBar/NavBar.vue";
import DialogMenuSelect from "~/components/ui/DialogMenuSelect/DialogMenuSelect.vue";






</script>