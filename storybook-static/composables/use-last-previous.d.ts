import { Ref } from 'vue';
export declare function useLastPrevious<T>(value: Ref<T>, condition: (prev: T) => boolean): Ref<T | undefined, T | undefined>;
