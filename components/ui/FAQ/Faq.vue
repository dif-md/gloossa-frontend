<template>
    <div>
        <span>
            Вопрос-ответ
        </span>
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>Это просто?</DropdownMenuTrigger>
                <DropdownMenuContent>
                   <span>
                    Hello
                   </span>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</template>


<script setup lang="ts">
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
</script>