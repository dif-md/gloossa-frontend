<template>
    <div>
      <component :is="svgIcon" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  
  const props = defineProps({
    svgIcon: {
      type: Object,
      required: true,
    },
  });
  </script>
  