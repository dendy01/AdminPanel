<template>
    <div class="accordion-wrap__body">
        <small class="slogan">Basic Accordion</small>

        <div class="accordion-wrap__content">
            <VAccordion
                v-for="variant in Object.values(AccordionTypes)"
                :key="variant"
                :round-type="variant"
            >
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        <span>
                            Accordion Item 1
                        </span>
                        <Add class="cross-icon" />
                    </h4>
                </template>
                <template #body>
                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.
                </template>
            </VAccordion>
        </div>
    </div>
</template>

<script setup lang="ts">
import Add from '@/assets/icons/icons-accordion/add.svg';
import VAccordion from '@/components/UI/basic/VAccordion.vue';
import { AccordionTypes } from '@/model/UI/basic/Accordion.ts';
</script>

<style scoped lang="scss">
.accordion-wrap__content {
    margin-top: 16px;
}
</style>