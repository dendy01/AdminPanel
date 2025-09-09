<template>
    <VDragDrop
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        @change="changeItem"
    >
        {{ item.text }}
    </VDragDrop>
</template>

<script setup lang="ts">
import VDragDrop from '@/components/UI/basic/VDragDrop.vue';
import { reactive } from 'vue';

const items = reactive([
    {
        id: '1', text: 'item1' 
    },
    {
        id: '2', text: 'item2'
    },
    {
        id: '3', text: 'item3'
    }
]);

const changeItem = (value: any) => {
    const indexDraggedId = items.findIndex((item) => item.id === value.draggedId);
    const indexDropId = items.findIndex((item) => item.id === value.dropId);

    const temp = items[indexDraggedId];

    items[indexDraggedId] = items[indexDropId];
    items[indexDropId] = temp;
};
</script>