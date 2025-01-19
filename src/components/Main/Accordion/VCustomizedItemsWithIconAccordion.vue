<template>
    <div class="accordion-wrap__body">
        <small class="slogan">Customized Button With Icon</small>

        <div class="accordion-wrap__content">
            <VAccordion
                v-for="variant in AccordionTypes"
                :key="variant"
                :round-type="variant"
            >
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        <span>
                            <component
                                :is="types[variant]"
                                class="icon"
                            />
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
import VAccordion from '@/components/UI/basic/VAccordion.vue';
import BarChart from '@/assets/icons/bar-chart.svg';
import Add from '@/assets/icons/icons-accordion/add.svg';
import Heart from '@/assets/icons/icons-accordion/heart.svg';
import Lock from '@/assets/icons/icons-accordion/lock.svg';
import { AccordionTypes } from '@/model/UI/basic/Accordion.ts';

const types = {
    'round-top': BarChart,
    'accordion-center': Heart,
    'round-bottom': Lock
};
</script>

<style scoped lang="scss">
.accordion-wrap__content {
    margin-top: 16px;

    .icon {
        width: 20px;
        height: 20px;
    }
}
</style>