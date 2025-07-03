import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useDateFormat, useNow } from '@vueuse/core'
import { HPassedToastProps, HToastProps } from "@/manage";

export const useToastStore = defineStore('toast', () => {
  const defaultAutoTime = 3000
  const toastList = ref<HToastProps[]>([])
  const timers = new Map<string, ReturnType<typeof setTimeout>>()
  const updateToastList = (passedToast: HPassedToastProps) => {
    const index = toastList.value.findIndex((toast) => toast.id === passedToast.id)
    const time = useDateFormat(useNow(), 'HH:mm A').value
    if (index === -1) {
      toastList.value.push({ ...passedToast, count: 1, time })
      if (passedToast.isAuto) startAutoRemoveTimer(passedToast.id, passedToast.autoTime ?? defaultAutoTime)
    } else {
      toastList.value[index] = { ...passedToast, count: (toastList.value[index].count ?? 1) + 1, time }
      if (passedToast.isAuto) {
        clearTimeout(timers.get(passedToast.id))
        startAutoRemoveTimer(passedToast.id, passedToast.autoTime ?? defaultAutoTime)
      }
    }
    
  }
  const removeToast = (id: string) => {
    const index = toastList.value.findIndex(toast => toast.id === id)
    if (index !== -1) {
      toastList.value.splice(index, 1)
    }
  }
  const startAutoRemoveTimer = (id: string, autoTime: number) => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, autoTime)
    timers.set(id, timer)
  }
  
  return { toastList, updateToastList, removeToast }
  
})