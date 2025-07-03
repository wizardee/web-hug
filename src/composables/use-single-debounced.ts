import { watchDebounced } from '@vueuse/core'
import { Ref, ref, watchEffect } from 'vue'
import type { UnwrapRef } from 'vue'


export function useSingleDebounced<T>({ target, debounce, deep = false }: { target: Ref<T>, debounce: number, deep?: boolean }) {
  const val = ref(target.value)
  const debouncedVal = ref(target.value)
  const setVal = (newVal: UnwrapRef<T>) => val.value = newVal
  watchEffect(() => val.value = target.value as UnwrapRef<T>)
  watchDebounced(val, (newVal) => {
    debouncedVal.value = newVal
  }, { debounce, deep })
  return [debouncedVal, setVal] as const
}