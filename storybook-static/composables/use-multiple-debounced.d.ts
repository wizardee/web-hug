import { Ref } from 'vue';
export declare function useMultipleDebounced({ targets, debounce, callBack, deep }: {
    targets: Ref[];
    debounce: number;
    callBack: Function;
    deep?: boolean;
}): void;
