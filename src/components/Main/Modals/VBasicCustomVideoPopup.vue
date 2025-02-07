<template>
    <div class="modal-wrap__content-item">
        <small class="slogan">
            YouTube Video
        </small>
        <div class="modal-content">
            <VPopup>
                <template #modal-btn="{ toggle }">
                    <VButton
                        :color="GlobalColors.PRIMARY"
                        @click="toggle"
                    >
                        Lounch Modal
                    </VButton>
                </template>
                <template #modal-content>
                    <iframe
                        width="100%"
                        height="300px"
                        src="https://rutube.ru/play/embed/9c8bee78381bcf91ba97ae3e3719e9cf/"
                        frameBorder="0"
                        allow="clipboard-write; autoplay"
                        webkitAllowFullScreen
                        mozallowfullscreen
                        allowFullScreen
                    />
                </template>
            </VPopup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VButton from '@/components/UI/basic/VButton.vue';
import VPopup from '@/components/UI/basic/VPopup.vue';
</script>

<style scoped lang="scss">
.modal-wrap__content-item {
    width: 33.33%;

    .modal-content {
        margin-top: var(--padding-xl);
    }
}
</style>