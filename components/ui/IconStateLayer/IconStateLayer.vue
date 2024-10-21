<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M2 5.93333C2 5.41787 2.44772 5 3 5H21C21.5523 5 22 5.41787 22 5.93333V6.86667C22 7.38213 21.5523 7.8 21 7.8H3C2.44772 7.8 2 7.38213 2 6.86667V5.93333Z"
                :fill="props.color" />
            <path
                d="M4 17.1333C4 16.6179 4.44772 16.2 5 16.2H21C21.5523 16.2 22 16.6179 22 17.1333V18.0667C22 18.5821 21.5523 19 21 19H5C4.44772 19 4 18.5821 4 18.0667V17.1333Z"
                :fill="props.color" />
            <path
                d="M12 11.5333C12 11.0179 12.4477 10.6 13 10.6H21C21.5523 10.6 22 11.0179 22 11.5333V12.4667C22 12.9821 21.5523 13.4 21 13.4H13C12.4477 13.4 12 12.9821 12 12.4667V11.5333Z"
                :fill="props.color" />
        </svg>
    </div>
</template>
<script setup>
const props = defineProps({
    color:String
})
</script>