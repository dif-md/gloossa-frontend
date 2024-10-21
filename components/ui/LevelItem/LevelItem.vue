<template>
  <Dialog class="">
    <DialogTrigger as-child>
      <button variant="outline">
        <StartButton />
      </button>
    </DialogTrigger>
    
    <DialogContent class="max-w-full p-0 h-screen bg-[#CBD5E1] flex items-center justify-center">
      <DialogHeader class="absolute">
      <div class="flex justify-start items-center">
        <DialogClose>
          
        </DialogClose>
      </div>
    </DialogHeader>
      <div class="flex flex-col items-center">
        <h2 class="text-2xl font-semibold mb-4 mx-3">На каком уровне тебе комфортно?</h2>
        <div class="grid grid-cols-2 gap-3 mx-3">
          <div class="bg-white rounded-xl p-3 align-middle flex flex-col justify-between" v-for="(card, index) in cards"
            :key="index">
            <div>
              <h1 :style="{ color: getTitleColor(card.filledDots) }" class="font-medium text-base flex items-center">
                {{ card.title }}
              </h1>
              <p class="mb-3 text-slate-500 text-sm">
                {{ card.description }}
              </p>
            </div>
            <dotCount :dotCount="card.dotCount" :filledDots="card.filledDots" />
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import dotCount from '~/components/ui/DotCount/DotCount.vue';
import StartButton from '../StartButton/StartButton.vue';

const props = defineProps({
  title: String,
  description: String,
  dotCount: {
    type: Number,
    required: true,
    default: 6
  },
  filledDots: {
    type: Number,
    required: true,
    default: 0
  },
});

const cards = [
  { title: 'Очень легко', description: 'если хочешь начать с нуля', dotCount: 6, filledDots: 1 },
  { title: 'Легко', description: 'если уже немного знаешь', dotCount: 6, filledDots: 2 },
  { title: 'Средне', description: 'если ещё много трудного', dotCount: 6, filledDots: 3 },
  { title: 'Выше среднего', description: 'если понимаешь речь на слух', dotCount: 6, filledDots: 4 },
  { title: 'Сложно', description: 'если уже свободно говоришь', dotCount: 6, filledDots: 5 },
  { title: 'Очень сложно', description: 'бесконечность не предел', dotCount: 6, filledDots: 6 },
];

const titleColors = {
  1: '#FFB74D', // Легкий уровень - оранжевый
  2: '#F79450', // Средний уровень - желтый
  3: '#FDD84C', // Выше среднего - светло-зеленый
  4: '#A0CD56', // Сложный уровень - зеленый
  5: '#79B813', // Очень сложный уровень - темно-зеленый
  6: '#008427', // Максимум заполненных - насыщенный темно-зеленый
};

const getTitleColor = (filledDots) => {
  return titleColors[filledDots] || '#000'; // Цвет по умолчанию (черный)
};
</script>
