<template>
    <div class="flex items-center gap-3 p-3 border-r-3 bg-[#E2E8F0]">
        <audio ref="audio" @timeupdate="updateProgress" @ended="stopAudio"></audio>

        <button @click="togglePlayPause" class=" bg-white p-2 rounded-full flex items-center">
            <div>
                <IconForPalyerPlay v-if="isPlaying" />
                <IconForPalyerStop v-else/>
            </div>
        </button>

        <button @click="rewind5Seconds" class=" bg-white p-2 rounded-full text-sm ">
            <IconForPlayerBack />
        </button>

        <div class="w-full ">
            <div class="relative flex-grow-1">
                <input type="range" min="0" :max="duration" v-model="currentTime" @input="seekAudio" class="range"
                    :style="rangeStyle" />
            </div>


            <div class="flex justify-between items-center text-gray">
                <span class="text-sm font-medium ">{{ formatTime(currentTime) }}</span>
                <span class="text-sm font-medium ">{{ formatTime(duration) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconForPalyerPlay from '../IconForPalyer/IconForPlayerPla.vue';
import IconForPalyerStop from '../IconForPalyer/IconForPalyerStop.vue';
import { ref, onMounted, computed } from 'vue';
import IconForPlayerBack from '../IconForPalyer/IconForPlayerBack.vue';

const audioSrc = ref(new URL('@/assets/audio/Eminem.mp3', import.meta.url).href);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const audio = ref(null);

onMounted(() => {
    audio.value = document.querySelector("audio");
    audio.value.src = audioSrc.value;

    audio.value.addEventListener('loadedmetadata', () => {
        duration.value = audio.value.duration;
    });

    audio.value.addEventListener('canplaythrough', () => {
        console.log('Аудиофайл полностью загружен и готов к воспроизведению.');
    });

    audio.value.addEventListener('error', (e) => {
        console.error("Ошибка загрузки аудиофайла:", e);
        alert("Файл не удалось загрузить. Проверьте его доступность.");
    });
});

const togglePlayPause = () => {
    if (audio.value.paused) {
        audio.value.play().then(() => {
            isPlaying.value = true;
        }).catch((error) => {
            console.error('Ошибка при воспроизведении аудио:', error);
        });
    } else {
        audio.value.pause();
        isPlaying.value = false;
    }
};

const rewind5Seconds = () => {
    audio.value.currentTime = Math.max(0, audio.value.currentTime - 5);
};

const updateProgress = () => {
    currentTime.value = audio.value.currentTime;
};

const seekAudio = () => {
    audio.value.currentTime = currentTime.value;
};

const stopAudio = () => {
    isPlaying.value = false;
    currentTime.value = 0;
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
};

// Вычисляемое свойство для стиля прогресс-бара
const rangeStyle = computed(() => {
    const percentage = (currentTime.value / duration.value) * 100 || 0;
    return {
        background: `linear-gradient(to right, #f5157b ${percentage}%, #ddd ${percentage}%)`,
    };
});
</script>

<style scoped>
input[type="range"] {
    flex-grow: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
    border-radius: 2.5px;
    outline: none;
    width: 100%;

}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 6px;
    background: #f5157b;
    border-radius: 50%;
    cursor: pointer;
}
</style>