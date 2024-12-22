<template>
    <li
        :class="{
            active: isOpen,
            'aside-menu__item': groupItem.select
        }"
        :style="{ 'margin-bottom': (isOpen && isValid ? height : 0) + 'px' }"
    >
        <span v-if="groupItem.select">
            <span>
                <component
                    :is="groupItem.icon"
                    class="icon-class"
                />
            </span>
            <span
                class="aside-menu__item--icon"
                :class="{ open: isValid }"
            >
                {{ groupItem.content }}
                <ArrowIcon
                    class="icon"
                    v-if="groupItem.select"
                />
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
                    />
                </span>
                <span
                    class="aside-menu__item--link_icon"
                    :class="{ open: isValid }"
                >
                    {{ groupItem.content }}
                    <ArrowIcon
                        class="icon"
                        v-if="groupItem.select"
                    />
                </span>
            </span>
        </RouterLink>

        <Transition>
            <VSidebarSelectUl
                v-if="isOpen && isValid"
                :select="groupItem.select"
                @calc-height="changeHeight"
                @click.stop
            />
        </Transition>
    </li>
</template>

<script setup lang="ts">
import ArrowIcon from '@/assets/icons/arrow.svg';
import VSidebarSelectUl from '@/components/Sidebar/VSidebarSelectUl.vue';
import { ISidebarLink } from '@/model/layout/Sidebar';
import { useChecking } from '@/store/useCheck.ts';
import { computed, ref } from 'vue';

interface IPropsType {
    groupItem: ISidebarLink;
    isOpen: boolean;
    id: string;
    isOpenSidebar: boolean;
}

const props = defineProps<IPropsType>();
const height = ref<number>(0);
const isCheck = useChecking();

const changeHeight = (newHeight: number) => {
    height.value = newHeight + 4;
};

const isValid = computed<boolean>(() => {
    return (isCheck.checking || props.isOpenSidebar || isCheck.openMenu);
});
</script>

<style scoped lang="scss">
.aside-menu__item,
.aside-menu__item--link {
    margin-top: 4px;
    margin-right: 20px;
    padding: var(--padding-menu-item);
    border-radius: 0 50px 50px 0;

    display: flex;
    align-items: center;

    &:hover {
        background: var(--color-gray-light);
    }

    .icon-class {
        margin-right: 8px;
    }

    span {
        display: flex;
        align-items: center;

        color: var(--color-text-dark);
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
    color: var(--color-text-dark);

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