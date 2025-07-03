import { Ref } from 'vue';
interface ScrollDelimiterSize {
    scrollHeight: number;
    scrollWidth: number;
    offsetHeight: number;
    offsetWidth: number;
}
export declare const useScrollDelimiter: (elementRef: Ref<HTMLElement | null>) => {
    delimiter: Ref<{
        scrollHeight: number;
        scrollWidth: number;
        offsetHeight: number;
        offsetWidth: number;
    }, ScrollDelimiterSize | {
        scrollHeight: number;
        scrollWidth: number;
        offsetHeight: number;
        offsetWidth: number;
    }>;
};
export {};
