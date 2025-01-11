import { ref } from 'vue';

export enum GlobalColors {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info',
    DARK = 'dark'
}

const tonality: string[] = ['700', '600', '500', '400', '300'];

const getColors = () => {
    const color = ref<Record<string, string>>({});
    const root: HTMLElement | null = document.querySelector(':root');
    const style: CSSStyleDeclaration | null = root ? getComputedStyle(root) : null;

    Object.values(GlobalColors).forEach((colorItem: string) => {
        color.value[colorItem] = tonality.reduce((acc: any, tonal: string) => {
            acc[tonal] = style?.getPropertyValue(`--color-${colorItem}-${tonal}`);
            return acc;
        }, {});
    });

    return color.value;
};

export const colors = getColors();