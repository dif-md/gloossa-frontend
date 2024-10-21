<template>
    <div class="filter-container">
      <ul class="filter-list">
        <li 
          v-for="(item, index) in filters" 
          :key="index" 
          :class="['filter', { 'filter-active': activeFilter === index }]"
          @click="setActiveFilter(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const filters: string[] = ['Все уровни', 'Очень легко', 'Легко', 'Средне', 'Сложно', 'Очень сложно'];
  const activeFilter = ref<number>(0);
  
  const setActiveFilter = (index: number): void => {
    activeFilter.value = index;
  };
  </script>
  
  
  <style scoped>
  .filter-container {
    overflow-x: auto;
    white-space: nowrap;
    padding-left: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  
  .filter-list {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .filter {
    display: inline-block;
    margin: 12px 5px 0;
    padding: 4px 8px;
    border-radius: 8px;
    background: rgb(255, 255, 255);
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .filter-active {
    background: #CBD5E1;
    color: default;
  }
  </style>
  