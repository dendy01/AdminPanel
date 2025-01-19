<template>
    <div class="accordion-wrap__body">
        <small class="slogan">Accordion Without Arrow</small>

        <div class="accordion-wrap__content">
            <VAccordion round-top>
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        Accordion Item 1
                    </h4>
                </template>
                <template #body>
                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                    marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                    soufflé. Wafer gummi bears marshmallow pastry pie.
                </template>
            </VAccordion>
            <VAccordion accordion-center>
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        Accordion Item 2
                    </h4>
                </template>
                <template #body>
                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                    marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                    soufflé. Wafer gummi bears marshmallow pastry pie.
                </template>
            </VAccordion>
            <VAccordion round-bottom>
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        Accordion Item 3
                    </h4>
                </template>
                <template #body>
                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                    marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                    soufflé. Wafer gummi bears marshmallow pastry pie.
                </template>
            </VAccordion>
        </div>
    </div>
</template>

<script setup lang="ts">
import VAccordion from '@/components/UI/basic/VAccordion.vue';
</script>

<style scoped lang="scss">
.accordion-wrap__content {
    margin-top: 16px;
}
</style>