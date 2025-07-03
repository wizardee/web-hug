<template>
  <h-base class-name="toast-list z-toast flex flex-col gap-4 items-center">
    <transition-group name="toast">
      <h-toast v-for="toast in visibleToasts" :key="toast.id" v-bind="toast" />
      <h-toast v-if="additionalCount > 0" id="additional" :count="1" :title="additionalText"/>
    </transition-group>
  </h-base>
</template>

<script lang="ts" setup>

import { computed } from "vue";
import { HToastProps } from "@/manage";
import { HBase, HToast } from "@/components";
import { useToastStore } from "@/store/toast-store";

// todo: animation https://ko.vuejs.org/guide/built-ins/transition
const MAX_VISIBLE_TOASTS = 5
const store = useToastStore()
const visibleToasts = computed(() => store.toastList.slice(0, MAX_VISIBLE_TOASTS) as HToastProps[])

const additionalCount = computed(() => store.toastList.length - MAX_VISIBLE_TOASTS)
const additionalText = computed(() => `${ additionalCount.value }개의 추가 알림 대기`)
</script>
<style lang="sass" scoped>
.toast-list
  position: absolute
  transform: translateX(-50%)
  left: 50%
  bottom: 0.5rem

.toast-enter-active, .toast-leave-active
  transition: opacity 0.5s

.toast-enter-from, .toast-leave-to
  opacity: 0
</style>