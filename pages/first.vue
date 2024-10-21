<script setup lang="ts">
import AboutMe from '~/components/ui/AboutGloossa/AboutMe.vue';
import Faq from '~/components/ui/FAQ/Faq.vue';
import Header from '~/components/ui/Header/Header.vue';
import LevelItem from '~/components/ui/LevelItem/LevelItem.vue';
import StartButton from '~/components/ui/StartButton/StartButton.vue';

</script>

<template>
    <div class="">
        <div>
            <Header class="absolute w-full" color="white" />
        </div>
        <div class="wrapper pb-10">
            <div class="mx-6 text-center mb-4">
                <h1 class="text-2xl font-semibold">
                    Изучай английский где угодно и когда удобно!
                </h1>
                <p class="text-lg font-normal">
                    Легко и комфортно!
                </p>
            </div>
            <LevelItem class=""/>
        </div>
        <div class="pb-16 bg-bgColor">
            <div class=" pt-5">
                <AboutMe />
            </div>
            <div class="pt-6">
                <Faq />
            </div>
        </div>
    </div>


</template>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    background-image: url('../assets/images/girl.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}



h1,
p {
    color: white;
    /* Пример стиля текста */
}

StartButton {
    /* Дополнительные стили кнопки */
}
</style>