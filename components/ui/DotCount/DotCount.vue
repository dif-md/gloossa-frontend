<template>
    <div>
        <div class="mt-3 flex justify-start">
            <span v-for="i in dotCount" :key="i" :class="['dot', i <= filledDots ? 'filled' : '']"
                :style="{ backgroundColor: getDotColor(i) }"></span>
        </div>
    </div>
</template>
<script setup>




const props = defineProps({
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

// Функция для получения цвета точки в зависимости от уровня сложности
const getDotColor = (index) => {
    if (index <= props.filledDots) {
        if (props.filledDots === 1) return '#FFB74D'; // Легкий уровень - оранжевый
        if (props.filledDots === 2) return '#F79450'; // Средний уровень - желтый
        if (props.filledDots === 3) return '#FDD84C'; // Выше среднего - светло-зеленый
        if (props.filledDots === 4) return '#A0CD56'; // Сложный уровень - зеленый
        if (props.filledDots === 5) return '#79B813'; // Очень сложный уровень - темно-зеленый
        if (props.filledDots === 6) return '#008427'; // Максимум заполненных - насыщенный темно-зеленый
    }
    return '#ddd';
};
</script>

<style>
.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 2px;
    background-color: #CBD5E1;
}
</style>
