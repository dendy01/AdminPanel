<template>
    <button
        :class="[
            'btn',
            btnType,
            btnSize,
            round,
            label,
            outline,
            btnText,
            { 'is-btn__icon': isIcon }
        ]"
    >
        <span class="btn-icon">
            <component :is="icon" />
        </span>
        <slot />
    </button>
</template>

<script setup lang="ts">
interface IPropsType {
    btnType: string;
    btnSize: string;
    round?: string;
    label?: string;
    outline?: string;
    btnText?: string;
    icon?: string;
    isIcon?: boolean;
}

defineProps<IPropsType>();
</script>

<style scoped lang="scss">
.btn {
    margin: 16px 6px 0 0;
    border-radius: 6px;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: all .2s ease;

    .btn-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin-right: 4px;
    }

    &:last-child {
        margin: 16px 0 0 0;
    }

    &.medium {
        padding: 8px 18px;
        font-size: 16px;
    }

    &.round {
        border-radius: 50px;
    }

    &.is-btn__icon {
        padding: 7px;

        .btn-icon {
            margin: 0;
        }
    }
}

.btn-primary {
    color: var(--color-white);
    background: var(--color-primary);

    &:hover {
        background: var(--color-primary-dark);
    }

    &.label {
        color: var(--color-primary);
        background: var(--color-primary-light);

        &:hover {
            background: var(--color-primary-light--hover);
        }
    }

    &.outline {
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
        background: none;

        &:hover {
            background: var(--color-primary-outline--hover);
        }
    }

    &.btn-text {
        color: var(--color-primary);
        background: none;

        &:hover {
            background: var(--color-primary-outline--hover);
        }
    }
}

.btn-secondary {
    color: var(--color-white);
    background: var(--color-secondary);

    &:hover {
        background: var(--color-secondary-dark);
    }

    &.label {
        color: var(--color-secondary);
        background: var(--color-secondary-light);

        &:hover {
            background: var(--color-secondary-light--hover);
        }
    }

    &.outline {
        color: var(--color-secondary);
        border: 1px solid var(--color-secondary);
        background: none;

        &:hover {
            background: var(--color-secondary-outline--hover);
        }
    }

    &.btn-text {
        color: var(--color-secondary);
        background: none;

        &:hover {
            background: var(--color-secondary-outline--hover);
        }
    }
}

.btn-success {
    color: var(--color-white);
    background: var(--color-success);

    &:hover {
        background: var(--color-success-dark);
    }

    &.label {
        color: var(--color-success);
        background: var(--color-success-light);

        &:hover {
            background: var(--color-success-light--hover);
        }
    }

    &.outline {
        color: var(--color-success);
        border: 1px solid var(--color-success);
        background: none;

        &:hover {
            background: var(--color-success-outline--hover);
        }
    }

    &.btn-text {
        color: var(--color-success);
        background: none;

        &:hover {
            background: var(--color-success-outline--hover);
        }
    }
}

.btn-danger {
    color: var(--color-white);
    background: var(--color-danger);

    &:hover {
        background: var(--color-danger-dark);
    }

    &.label {
        color: var(--color-danger);
        background: var(--color-danger-light);

        &:hover {
            background: var(--color-danger-light--hover);
        }
    }

    &.outline {
        color: var(--color-danger);
        border: 1px solid var(--color-danger);
        background: none;

        &:hover {
            background: var(--color-danger-outline--hover);
        }
    }

    &.btn-text {
        color: var(--color-danger);
        background: none;

        &:hover {
            background: var(--color-danger-outline--hover);
        }
    }
}

.btn-warning {
    color: var(--color-white);
    background: var(--color-warning);

    &:hover {
        background: var(--color-warning-dark);
    }

    &.label {
        color: var(--color-warning);
        background: var(--color-warning-light);

        &:hover {
            background: var(--color-warning-light--hover);
        }
    }

    &.outline {
        color: var(--color-warning);
        border: 1px solid var(--color-warning);
        background: none;

        &:hover {
            background: var(--color-warning-outline--hover);
        }
    }

    &.btn-text {
        color: var(--color-warning);
        background: none;

        &:hover {
            background: var(--color-warning-outline--hover);
        }
    }
}

.btn-info {
    color: var(--color-white);
    background: var(--color-info);

    &:hover {
        background: var(--color-info-dark);
    }

    &.label {
        color: var(--color-info);
        background: var(--color-info-light);

        &:hover {
            background: var(--color-info-light--hover);
        }
    }

    &.outline {
        color: var(--color-info);
        border: 1px solid var(--color-info);
        background: none;

        &:hover {
            background: var(--color-info-outline--hover);
        }
    }

    &.btn-text {
        color: var(--color-info);
        background: none;

        &:hover {
            background: var(--color-info-outline--hover);
        }
    }
}

.btn-dark {
    color: var(--color-white);
    background: var(--color-dark);

    &:hover {
        background: var(--color-dark-dark);
    }

    &.label {
        color: var(--color-dark);
        background: var(--color-dark-light);

        &:hover {
            background: var(--color-dark-light--hover);
        }
    }

    &.outline {
        color: var(--color-dark);
        border: 1px solid var(--color-dark);
        background: none;

        &:hover {
            background: var(--color-dark-outline--hover);
        }
    }

    &.btn-text {
        color: var(--color-dark);
        background: none;

        &:hover {
            background: var(--color-dark-outline--hover);
        }
    }
}
</style>