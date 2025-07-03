import { Ref, UnwrapRef } from 'vue';
export declare function useSingleDebounced<T>({ target, debounce, deep }: {
    target: Ref<T>;
    debounce: number;
    deep?: boolean;
}): readonly [[T] extends [Ref<any, any>] ? import('@vue/shared').IfAny<T, Ref<T, T>, T> : Ref<UnwrapRef<T>, T | UnwrapRef<T>>, (newVal: UnwrapRef<T>) => UnwrapRef<T>];
