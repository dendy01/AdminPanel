<template>
    <li
        :class="{
            active: isOpen,
            'aside-menu__item': groupItem.select
        }"
        :style="{ 'margin-bottom': ( isOpen && isValid ? height : 0 ) + 'px' }"
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
                {{ t(groupItem.content) }}
                <ArrowIcon
                    class="icon"
                    v-if="groupItem.select"
                />
            </span>
        </span>

        <RouterLink
            v-else
            to="layout"
            active-class="active-link"
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
                    {{ t(groupItem.content) }}
                    <ArrowIcon
                        class="icon"
                        v-if="groupItem.select"
                    />
                </span>
            </span>
        </RouterLink>

        <VSidebarSelectUl
            :select="groupItem.select"
            :is-open="isOpen"
            :is-valid="isValid"
            @calc-height="changeHeight"
            @click.stop
        />
    </li>
</template>

<script setup lang="ts">
import ArrowIcon from '@/assets/icons/arrow.svg';
import VSidebarSelectUl from '@/components/Sidebar/VSidebarSelectUl.vue';
import { ISidebarLink } from '@/model/layout/Sidebar';
import { useChecking } from '@/store/useCheck.ts';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface IPropsType {
    groupItem: ISidebarLink;
    isOpen: boolean;
    id: string;
    isOpenSidebar: boolean;
}

const props = defineProps<IPropsType>();
const height = ref<number>(0);
const isCheck = useChecking();

const {
    t
} = useI18n();

const changeHeight = (newHeight: number) => {
    height.value = newHeight + 4;
};

const isValid = computed<boolean>(() => {
    return (isCheck.checking || props.isOpenSidebar || isCheck.openMenu);
});
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.aside-menu__item,
.aside-menu__item--link {
    margin-top: 4px;
    margin-right: 20px;
    padding: var(--padding-menu-item);
    border-radius: 0 50px 50px 0;

    display: flex;
    align-items: center;

    &:hover {
        background-color: var(--color-gray-light);
    }

    .icon-class {
        margin-right: 8px;
    }

    span {
        display: flex;
        align-items: center;

        color: var(--color-text);
    }
}


.aside-menu__item {
    cursor: pointer;
    position: relative;
    z-index: 100;
    transition: margin-bottom $transition-time $transition-duration;

    .icon {
        transition: transform $transition-time $transition-duration;
        position: absolute;
        right: 20px;
    }

    .aside-menu__item--icon {
        text-wrap: nowrap;
        display: none;
    }

    .open {
        display: block;
    }
}

.active {
    background-color: var(--color-gray-light);

    .icon {
        transition: transform $transition-time $transition-duration;
        transform: rotate(90deg);
    }
}

.aside-menu__item--link {
    display: block;
    color: var(--color-text);

    .aside-menu__item--link_icon {
        text-wrap: nowrap;
        display: none;
        transition: opacity $transition-time $transition-duration;
    }

    .open {
        display: block;
        transition: opacity $transition-time $transition-duration;
    }
}

.active-link {
    color: var(--color-white);
    background-color: var(--color-primary-700);

    &:hover {
        background-color: var(--color-primary-600);
    }
}
</style>