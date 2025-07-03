<template>
  <h-base :class-name="computedClass" :styles="styles">
    <h-icon :icon-name="iconName" />
  </h-base>
</template>

<script lang="ts" setup>
import HIcon from './HIcon.vue'
import { omit } from 'lodash'
import { computed } from 'vue'
import HBase from '@/components/abstract/HBase.vue'
import type { HIconWrapperProps } from '@/manage/types/components/icon'

const props = withDefaults(defineProps<HIconWrapperProps>(),
  { padding: '0', color: 'inherit', className: '' })
const styles = computed(() => omit(props, ['iconName', 'className']))
const computedClass = computed(() => {
  return `flex-none flex items-center justify-center ${ props.className }`
})
</script>