<script setup lang="ts">
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogContent v-bind="forwarded" :class="cn(
      'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border-none p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ',
      props.class,
    )">
      <slot />

      <DialogClose
        class="absolute left-2 top-4  opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.3295 6.8295C6.76884 6.39017 7.48116 6.39017 7.9205 6.8295L23.6705 22.5795C24.1098 23.0188 24.1098 23.7312 23.6705 24.1705C23.2312 24.6098 22.5188 24.6098 22.0795 24.1705L6.3295 8.4205C5.89017 7.98116 5.89017 7.26884 6.3295 6.8295Z"
              fill="#0F172A" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M23.6705 6.8295C24.1098 7.26884 24.1098 7.98116 23.6705 8.4205L7.9205 24.1705C7.48116 24.6098 6.76884 24.6098 6.3295 24.1705C5.89017 23.7312 5.89017 23.0188 6.3295 22.5795L22.0795 6.8295C22.5188 6.39017 23.2312 6.39017 23.6705 6.8295Z"
              fill="#0F172A" />
          </svg>
        </div>
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
