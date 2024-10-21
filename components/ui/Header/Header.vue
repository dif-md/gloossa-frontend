<template>
    <div class=" flex justify-between py-2 px-1">
        <div class="p-2">
          <DialogMenuSelect />
        </div>
        <div class=" items-center m-auto">
            <img :src='gloossa' alt="">
        </div>
        <IconAvatar color="white"/>
    </div>
</template>
<script setup>

    const props = defineProps({
        color:String
    })



    import gloossa from '@/assets/images/gloossa.png'
import IconStateLayer from '../IconStateLayer/IconStateLayer.vue';
import DialogMenuSelect from '../DialogMenuSelect/DialogMenuSelect.vue';
import IconAvatar from '../IconAvatar/IconAvatar.vue';
</script>