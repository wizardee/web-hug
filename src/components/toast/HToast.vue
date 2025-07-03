<template>
  <h-base class-name="max-w-80 relative rounded-1 flex flex-col box-shadow-base pa-3 gap-2" :styles="{ backgroundColor }">
    <h-base class-name="max-w-full flex max-h-32 h-max items-center gap-2">
      <h-icon-wrapper v-if="iconName" class-name="flex-none" :icon-name="iconName" width="1.25rem" height="1.25rem" :color="iconColor"/>
      <h-base v-if="count !== 1" :styles="dupStyles"
              class-name="toast-item-checker box-shadow-base w-6 h-5 rounded-1 flex items-center justify-center h-font-regular h-typo-caption-1">
        {{ dupCount }}
      </h-base>
      <h-base class-name="min-w-0 max-h-inherit flex-1 h-font-bold h-typo-heading-3 text-ellipsis break-normal line-clamp-3" :styles="{ color: titleColor }">
        {{ title }}
      </h-base>
      <h-base v-if="beforeCloseComponent" class-name="flex-none">
        <component :is="beforeCloseComponent" />
      </h-base>
      <h-base v-if="hasCloseButton" class-name="flex-none">
        <h-button
          type="transparent" size="sm"
          round="roundedSquare" theme="secondary" post-icon-name="icons_close_close"
          @on-click="store.removeToast(id)"
        />
      </h-base>
      <h-base v-if="showTime" class-name="flex gap-1 max-w-28 h-5 toast-time-checker box-shadow-base rounded-1 items-center px-1" :styles="timeStyles">
        <h-icon-wrapper class-name="flex-none" icon-name="icons_bell_on" width="0.875rem" height="0.875rem" :color="color"/>
        <h-base class-name="flex-1 min-w-0 truncate h-font-regular h-typo-caption-2" :styles="{ color }">
          {{ time }}
        </h-base>
      </h-base>
    </h-base>
  </h-base>
</template>

<script lang="ts" setup>


import { getSemantic, HToastProps } from "@/manage";
import { computed } from "vue";
import { HBase, HButton, HIconWrapper } from "@/components";
import { useToastStore } from "@/store/toast-store";

const props = withDefaults(defineProps<HToastProps>(), { isAuto: true, hasCloseButton: true, count: 1, showTime: false })
const store = useToastStore();

const dupCount = computed(() => props.count >= 100 ? '99+' : props.count)

const titleColor = getSemantic('secondary', 'foreground', 'normal', 'default')
const checkerBg = getSemantic('error', 'background', 'global', 'default')
const color = getSemantic('white', 'global', 'global', 'default')
const dupStyles = { backgroundColor: checkerBg, color }
const timeBg = getSemantic('cta', 'background', 'normal', 'default')
const timeStyles = { backgroundColor: timeBg }

</script>
<style lang="sass" scoped>
.toast-item-checker
  position: absolute
  top: 0
  left: 0
  transform: translate(-50%, -50%)

.toast-time-checker
  position: absolute
  top: 0
  right: 0
  transform: translate(50%, -50%)
</style>