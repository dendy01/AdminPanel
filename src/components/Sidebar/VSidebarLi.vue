<template>

    <li
        class="aside-menu__item"
        :class="{ active: isOpen }"
        :style="{ 'margin-bottom': (isOpen ? height : 0) + 'px' }"
    >
        <RouterLink to="#">
            <component
                :is="groupItem.icon"
                class="icon-class"
            ></component>
            {{ groupItem.content }} <ArrowIcon
                class="icon"
                v-if="groupItem.select"
            ></ArrowIcon>
        </RouterLink>

        <Transition>
            <VSidebarSelectUl
                v-if="isOpen"
                :select="groupItem.select"
                @calc-height="changeHeight"
            ></VSidebarSelectUl>
        </Transition>
    </li>

</template>

<script setup lang="ts">
import ArrowIcon from "@/assets/icons/arrow.svg";
import VSidebarSelectUl from "@/components/Sidebar/VSidebarSelectUl.vue";
import { ISidebarLink } from '@/model/layout/Sidebar';
import { ref } from "vue";

interface IPropsType {
    groupItem: ISidebarLink;
    isOpen: boolean;
}

defineProps<IPropsType>();
const height = ref<number>(0);

const changeHeight = (newHeight: number) => {
    height.value = newHeight + 4;
}
</script>

<style scoped lang="scss">
.aside-menu__item {
    margin-top: 4px;
    margin-right: 20px;
    padding: var(--padding-menu-item);
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    position: relative;
    transition: all .3s ease;


    &:hover {
        background: var(--color-gray-light);
    }

    a {
        display: flex;
        align-items: center;

        color: var(--color-dark);
    }

    .icon {
        transition: all .3s ease;
        position: absolute;
        right: 20px;
    }

    .icon-class {
        margin-right: 8px;
    }
}

.active {
    background: var(--color-gray-light);

    .icon {
        transform: rotate(90deg);
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity .3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>