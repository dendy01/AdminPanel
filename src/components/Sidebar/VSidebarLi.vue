<template>

    <li
        :class="{ active: isOpen, 'aside-menu__item': groupItem.select }"
        :style="{ 'margin-bottom': (isOpen && (isCheck || isOpenSidebar) ? height : 0) + 'px' }"
    >
        <span v-if="groupItem.select">
            <span>
                <component
                    :is="groupItem.icon"
                    class="icon-class"
                ></component>
            </span>
            <span
                class="aside-menu__item--icon"
                :class="{ open: isCheck || isOpenSidebar }"
            >
                {{ groupItem.content }} <ArrowIcon
                    class="icon"
                    v-if="groupItem.select"
                ></ArrowIcon>
            </span>
        </span>

        <RouterLink
            v-else
            to="layout"
            :class="{ 'aside-menu__item--link': !groupItem.select }"
        >
            <span>
                <span>
                    <component
                        :is="groupItem.icon"
                        class="icon-class"
                    ></component>
                </span>
                <span
                    class="aside-menu__item--link_icon"
                    :class="{ open: isCheck || isOpenSidebar }"
                >
                    {{ groupItem.content }} <ArrowIcon
                        class="icon"
                        v-if="groupItem.select"
                    ></ArrowIcon>
                </span>
            </span>
        </RouterLink>

        <Transition>
            <VSidebarSelectUl
                v-if="isOpen && (isCheck || isOpenSidebar)"
                :select="groupItem.select"
                @calc-height="changeHeight"
                @click.stop
            ></VSidebarSelectUl>
        </Transition>
    </li>

</template>

<script setup lang="ts">
import ArrowIcon from "@/assets/icons/arrow.svg";
import VSidebarSelectUl from "@/components/Sidebar/VSidebarSelectUl.vue";
import { ISidebarLink } from '@/model/layout/Sidebar';
import { defineEmits, ref } from "vue";

interface IPropsType {
    groupItem: ISidebarLink;
    isOpen: boolean;
    id: string;
    isCheck: boolean;
    isOpenSidebar: boolean;
}

defineProps<IPropsType>();
const emit = defineEmits(["isLink"])
const height = ref<number>(0);

const changeHeight = (newHeight: number) => {
    height.value = newHeight + 4;
}
</script>

<style scoped lang="scss">
.aside-menu__item,
.aside-menu__item--link {
    margin-top: 4px;
    margin-right: 20px;
    padding: var(--padding-menu-item);
    border-radius: 0 50px 50px 0;

    &:hover {
        background: var(--color-gray-light);
    }

    .icon-class {
        margin-right: 8px;
    }

    span {
        display: flex;
        align-items: center;

        color: var(--color-dark);
    }
}


.aside-menu__item {
    cursor: pointer;
    position: relative;
    transition: all .3s ease;

    .icon {
        transition: all .3s ease;
        position: absolute;
        right: 20px;
    }

    .aside-menu__item--icon {
        text-wrap: nowrap;
        display: none;
        transition: all .3s ease;
    }

    .open {
        display: block;
        transition: all .3s ease;
    }
}

.active {
    background: var(--color-gray-light);

    .icon {
        transform: rotate(90deg);
    }
}

.aside-menu__item--link {
    display: block;
    color: var(--color-dark);

    .aside-menu__item--link_icon {
        text-wrap: nowrap;
        display: none;
        transition: all .3s ease;
    }

    .open {
        display: block;
        transition: all .3s ease;
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