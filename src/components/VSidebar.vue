<template>

    <aside class="aside">
        <a href="#" class="aside-head">
            <LogoIcon></LogoIcon>

            <h2 class="aside-title">{{ props.title }}</h2>
            <input type="checkbox" />
        </a>

        <ul class="aside-menu" v-for="link in li" :key="link.id">
            <span v-if="link.title" class="aside-menu__title">
                <span>{{ link.title }}</span>
            </span>

            <li @click="changeActive" class="aside-menu__item" v-for="groupItem in link.group" :key="groupItem.id">

                <RouterLink to="#">
                    <component :is="groupItem.icon" class="icon-class"></component>
                    {{ groupItem.content }} <ArrowIcon class="icon" v-if="groupItem.select"></ArrowIcon>
                </RouterLink>

                <ul class="aside-menu__item-grop" v-if="groupItem.select">
                    <li v-for="select in groupItem.select" :key="select.id">
                        <RouterLink to="layout">
                            <Circle></Circle><span>{{ select.content }}</span>
                        </RouterLink>
                    </li>
                </ul>

            </li>

        </ul>

    </aside>

</template>

<script setup lang="ts">
import ArrowIcon from "@/assets/icons/arrow.svg";
import Circle from "@/assets/icons/circle.svg";
import LogoIcon from '@/assets/icons/logo.svg';
import { ISidebarGroup } from '@/model/layout/Sidebar';

interface IPropsType {
    title?: string,
    li?: ISidebarGroup[];
}

const props = defineProps<IPropsType>();
let previosElem: any = null;

const changeActive = (event: any) => {

    const currentElem = event.target;

    if (currentElem === previosElem) {
        currentElem.classList.toggle("active");
    } else {

        if (previosElem) {
            previosElem.classList.remove("active");
        }

        currentElem.classList.add("active");
        previosElem = currentElem;

    }

}

</script>


<style scoped lang="scss">
.aside {
    width: 260px;
    height: 100%;
    font-size: 15px;
    font-weight: 400;

    position: fixed;
    top: 0;
    left: 0;
    overflow-y: scroll;

    color: var(--color-dark);

    &::-webkit-scrollbar {
        width: 2px;
        background: none;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: var(--color-gray);
        transition: all .3s ease;
    }
}

.aside-head {
    height: 64px;

    display: flex;
    align-items: center;

    padding: var(--padding-menu-item);

    .aside-title {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
    }
}

.aside-menu__item {
    a {
        margin-top: 4px;
        margin-right: 20px;
        padding: var(--padding-menu-item);
        border-radius: 0 50px 50px 0;
        cursor: pointer;
        position: relative;

        display: flex;
        align-items: center;

        color: var(--color-dark);

        &:hover {
            background: var(--color-gray-light);
        }
    }

    .icon {
        position: absolute;
        right: 20px;

        transition: all .3s ease;
    }

    .aside-menu__item-grop {
        max-height: 0;
        background-color: white;
        transition: max-height 0.5s ease;
        overflow: hidden;

        svg {
            margin-left: 4px;
        }

        span {
            margin-left: 12px;
        }
    }
}

.active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--color-gray-light);

    .icon {
        transform: rotate(90deg);
    }

    ~.aside-menu__item-grop {
        max-height: 1000px;
        transition: max-height 0.5s ease;
    }
}

.aside-menu__title {
    padding: var(--padding-menu-item);
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    color: var(--color-gray);

    display: block;

    position: relative;

    &::before {
        content: "";
        display: block;
        height: 1px;
        background: var(--color-gray);
        width: 90%;

        position: absolute;
        top: 50%;
        left: 0;
        z-index: 10;
    }

    span {
        position: relative;
        z-index: 20;
        background: var(--color-white);
    }
}

.icon-class {
    margin-right: 8px;
}
</style>