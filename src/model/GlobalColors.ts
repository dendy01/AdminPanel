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

export const getColors = () => {
    const color = ref<any>({});
    const root: any = document.querySelector(':root');
    const style: any = getComputedStyle(root);

    Object.values(GlobalColors).forEach((colorItem: string) => {
        color.value[colorItem] = tonality.reduce((acc: any, tonal: string) => {
            acc[tonal] = style.getPropertyValue(`--color-${colorItem}-${tonal}`);
            return acc;
        }, {});
    });

    return color.value;
};