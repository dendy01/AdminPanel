<template>
    <div class="accordion-wrap__body">
        <small class="slogan">Basic Accordion</small>

        <div class="accordion-wrap__content">
            <VAccordion
                round-top
            >
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        <span>
                            Accordion Item 1
                        </span>
                        <Arrow class="cross-icon" />
                    </h4>
                </template>
                <template #body>
                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.
                </template>
            </VAccordion>
            <VAccordion accordion-center>
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        <span>
                            Accordion Item 2
                        </span>
                        <Arrow class="cross-icon" />
                    </h4>
                </template>
                <template #body>
                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.
                </template>
            </VAccordion>
            <VAccordion round-bottom>
                <template #head="{ toggle }">
                    <h4
                        class="accordion-title"
                        @click="toggle"
                    >
                        <span>
                            Accordion Item 3
                        </span>
                        <Arrow class="cross-icon" />
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
import Arrow from '@/assets/icons/arrow.svg';
import VAccordion from '@/components/UI/basic/VAccordion.vue';
</script>

<style scoped lang="scss">
.accordion-wrap__content {
    margin-top: 16px;
}
</style>