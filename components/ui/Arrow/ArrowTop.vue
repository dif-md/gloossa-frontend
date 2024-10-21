<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 10L8 6L4 10" :stroke="strokeColor" stroke-width="1.33333" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
</template>
<script setup>

const props = defineProps({
    strokeColor : {
    color: String,
    default: '#0F172A'
}
    
    
})

</script>