<script setup lang="ts">
import { Button } from '@/components/ui/button'
import gloossa from "@/assets/images/gloossaDark.png"
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ArrowTop from '../Arrow/ArrowTop.vue';
import IconStateLayer from '../IconStateLayer/IconStateLayer.vue';
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <button>
        <IconStateLayer color="white"/>
      </button>
    </DialogTrigger>
    <DialogScrollContent class="sm:max-w-full">
      <DialogHeader class="">
        <div class="flex justify-start items-center">
          <DialogClose>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.3295 6.8295C6.76884 6.39017 7.48116 6.39017 7.9205 6.8295L23.6705 22.5795C24.1098 23.0188 24.1098 23.7312 23.6705 24.1705C23.2312 24.6098 22.5188 24.6098 22.0795 24.1705L6.3295 8.4205C5.89017 7.98116 5.89017 7.26884 6.3295 6.8295Z"
                fill="#0F172A" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M23.6705 6.8295C24.1098 7.26884 24.1098 7.98116 23.6705 8.4205L7.9205 24.1705C7.48116 24.6098 6.76884 24.6098 6.3295 24.1705C5.89017 23.7312 5.89017 23.0188 6.3295 22.5795L22.0795 6.8295C22.5188 6.39017 23.2312 6.39017 23.6705 6.8295Z"
                fill="#0F172A" />
            </svg>
          </DialogClose>
          <DialogTitle class="mx-2"><img :src="gloossa" alt=""></DialogTitle>
        </div>


      </DialogHeader>
      <div class="grid gap-4 py-2 h-screen">
        <ul class="text-base font-normal">
          <li class="py-2 px-3 border border-x-0 flex justify-between items-center">Каталог курсов
            <ArrowTop class=" rotate-90" strokeColor="gray" />
          </li>
          <li class="py-2 px-3 border border-x-0 border-t-0 flex justify-between items-center">O Глосе
            <ArrowTop class=" rotate-90" strokeColor="gray" />
          </li>
          <li class="py-2 px-3 border border-x-0 border-t-0 flex justify-between items-center">FAQ
            <ArrowTop class=" rotate-90" strokeColor="gray" />
          </li>
          <li class="py-2 px-3 border border-x-0 border-t-0 flex justify-between items-center">Тарифы
            <ArrowTop class=" rotate-90" strokeColor="gray" />
          </li>
          <li class="py-2 px-3 border border-x-0 border-t-0 flex justify-between items-center">Контакты
            <ArrowTop class=" rotate-90" strokeColor="gray" />
          </li>
        </ul>
      </div>
      <DialogFooter>
        <div class="text-xs flex justify-between w-full">
          <span class="text-gray">
            © 2024 Gloossy
          </span>
          <b>Пользовательское соглашение</b>
        </div>
      </DialogFooter>
    </DialogScrollContent>
  </Dialog>
</template>