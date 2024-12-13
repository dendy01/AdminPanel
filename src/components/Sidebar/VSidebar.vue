<template>

    <aside class="aside">
        <a href="#" class="aside-head">
            <LogoIcon></LogoIcon>

            <h2 class="aside-title">{{ props.title }}</h2>
            <input type="checkbox" />
        </a>

        <VSidebarUl :li="props.li"></VSidebarUl>

    </aside>

</template>

<script setup lang="ts">
import LogoIcon from '@/assets/icons/logo.svg';
import VSidebarUl from '@/components/Sidebar/VSidebarUl.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
// import { ref } from "vue";

interface IPropsType {
    title?: string,
    li?: ISidebarGroup[];
}

// Template Ref

const props = defineProps<IPropsType>();
// const hasActivated = ref<boolean>(false);

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

.active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--color-gray-light);

    .icon {
        transform: rotate(90deg);
    }

    ~.aside-menu__item-grop {
        max-height: 1000px;
    }
}
</style>