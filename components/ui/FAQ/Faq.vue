<template>
  <div ref="faqContainer" class="mx-3 mt-6 font-inter">
    <h2 class="text-xl font-bold mb-4">Вопрос-ответ</h2>

    <div class="mb-2 relative border-b border-gray-300 pb-2">
      <div class="cursor-pointer pt-4 rounded text-base font-semibold flex items-center justify-between" @click="toggleAnswer(0)">
        Это просто?
        <component :is="isActive[0] ? ArrowTop : ArrowBottom" class="ml-2 inline-block " />
      </div>
      <div v-if="isActive[0]" class="pt-4 mt-1 text-sm">
        Да, это очень просто.
      </div>
    </div>

    <div class="mb-2 relative border-b border-gray-300 pb-2">
      <div class="cursor-pointer pt-4 rounded text-base font-semibold flex items-center justify-between" @click="toggleAnswer(1)">
        Это бесплатно?
        <component :is="isActive[1] ? ArrowTop : ArrowBottom" class="ml-2 inline-block duration-300" />
      </div>
      <div v-if="isActive[1]" class="pt-4 mt-1 text-sm">
        Да, это бесплатно.
      </div>
    </div>

    <div class="mb-2 relative border-b border-gray-300 pb-2 transition-all">
      <div class="cursor-pointer pt-4 rounded text-base font-semibold flex items-center justify-between" @click="toggleAnswer(2)">
        Как происходит обучение?
        <component :is="isActive[2] ? ArrowTop : ArrowBottom" class="ml-2 inline-block " />
      </div>
      <div v-if="isActive[2]" class="pt-4 mt-1 text-sm">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowBottom from '../Arrow/ArrowBottom.vue';
import ArrowTop from '../Arrow/ArrowTop.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isActive = ref([false, false, false]);
const faqContainer = ref(null);

const toggleAnswer = (index) => {
  // Закрытие других ответов при открытии нового
  isActive.value = isActive.value.map((_, i) => (i === index ? !isActive.value[i] : false));
};

const handleClickOutside = (event) => {
  if (faqContainer.value && !faqContainer.value.contains(event.target)) {
    // Закрыть все ответы
    isActive.value = [false, false, false];
  }
};

// Установка обработчика событий на клик вне компонента
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
</style>
