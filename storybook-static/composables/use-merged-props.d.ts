import { MaybeRefOrGetter } from 'vue';
export declare const useMergedProps: <T>(defaultProps: Partial<MaybeRefOrGetter<T>> | undefined, passedProps: MaybeRefOrGetter<T> | undefined) => {
    mergedProps: import('vue').ComputedRef<T>;
};
