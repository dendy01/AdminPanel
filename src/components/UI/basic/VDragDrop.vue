<template>
    <div
        class="draggable"
        draggable="true"
        @dragstart="handleDragStart"
        @drop="handleDrop"
        @dragover.prevent
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
interface IPropsType {
    id: string;
}

interface IEmitsType {
    (event: 'change', value: any): void;
}

const emit = defineEmits<IEmitsType>();
const props = defineProps<IPropsType>();

const handleDragStart = (event: DragEvent) => {
    if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', props.id);
    }
};

const handleDrop = (event: DragEvent) => {
    event.preventDefault();

    if (event.dataTransfer) {
        const draggedId = event.dataTransfer.getData('text/plain');

        emit('change', {
            draggedId, dropId: props.id 
        });
    }
};
</script>

<style scoped lang="scss">
.draggable {
    cursor: move;
    user-select: none;
    border: 1px dashed #ddd;
    padding: 10px;
    margin: 8px 0;
}
</style>