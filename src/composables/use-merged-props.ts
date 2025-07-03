import { computed, isRef, MaybeRefOrGetter, ref } from 'vue'
import merge from 'deepmerge'
export const useMergedProps = <T>(defaultProps: Partial<MaybeRefOrGetter<T>> | undefined, passedProps: MaybeRefOrGetter<T> | undefined) => {
  const defaultStore = isRef(defaultProps) ? defaultProps : ref(defaultProps);
  const passedStore = isRef(passedProps) ? passedProps : ref(passedProps);
  
  const mergedProps = computed(() => merge(defaultStore.value as Partial<T>, passedStore.value as Partial<T>, { arrayMerge: (_, b) => b }));
  
  return { mergedProps };
};