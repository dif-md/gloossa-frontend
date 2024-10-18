<template>
  <div class="bg-white rounded-xl p-3 align-middle">
    <h1 :style="{ color: getTitleColor() }" class="font-medium text-base flex items-center">
      {{ title }}
    </h1>
    <p class=" mb-3 text-slate-500 text-sm">
      {{ description }}
    </p>
    
    <dotCount 
      :dotCount="props.dotCount" 
      :filledDots="props.filledDots" 
    />
  </div>
</template>

<script setup>
import dotCount from '~/components/ui/DotCount/DotCount.vue';



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


const getTitleColor = () => {
  if (props.filledDots === 1) return '#FFB74D'; // Легкий уровень - оранжевый
  if (props.filledDots === 2) return '#F79450'; // Средний уровень - желтый
  if (props.filledDots === 3) return '#FDD84C'; // Выше среднего - светло-зеленый
  if (props.filledDots === 4) return '#A0CD56'; // Сложный уровень - зеленый
  if (props.filledDots === 5) return '#79B813'; // Очень сложный уровень - темно-зеленый
  if (props.filledDots === 6) return '#008427'; // Максимум заполненных - насыщенный темно-зеленый
  return '#000'; // Цвет по умолчанию (черный)
};
</script>
