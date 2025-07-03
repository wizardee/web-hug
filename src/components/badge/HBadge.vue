3<template>
  <h-base-badge v-bind="badgeInlinerProps" />
</template>

<script lang="ts" setup>

import HBaseBadge from '@/components/badge/HBaseBadge.vue'
import type { HBadgeProps } from '@/manage/types/components/badge'
import { computed, type ComputedRef } from 'vue'
import type { HFlexInlinerProps } from '@/manage/types/abstracts/flex-inliner'
import { getSemantic } from '@/manage/constants/variables'

const props = defineProps<HBadgeProps>()

const styles = computed(() => {
  const { type, theme } = props
  return {
    width: 'fit-content',
    height: '1.5rem',
    backgroundColor: (type === 'filled' || (type === 'outlined' && theme === 'info')) ? getSemantic(theme, 'background', theme === 'secondary' ? 'heavy' : 'normal', 'default') : 'transparent',
    border: type === 'outlined' ? `1px solid ${ getSemantic(theme, 'stroke', 'normal', 'default') }` : 'none',
    color: (type === 'filled' && theme !== 'secondary') || (type === 'outlined' && theme === 'info') ?
      getSemantic('white', 'global', 'global', 'default') :
      getSemantic(theme, 'foreground', 'normal', 'default')
  }
})


const badgeInlinerProps: ComputedRef<HFlexInlinerProps> = computed(() => {
  const { text, preIconName, postIconName } = props
  const className = 'h-typo-caption-2 h-font-regular gap-1 px-1 rounded-2'
  let flexInlinerProps: HFlexInlinerProps = { className }
  flexInlinerProps.styles = styles.value
  const iconSize = { width: '1rem', height: '1rem' }
  if (text) flexInlinerProps.textWrapperProps = { text }
  if (preIconName) flexInlinerProps.preIconWrapperProps = { iconName: preIconName, ...iconSize, padding: '0.125rem' }
  if (postIconName) flexInlinerProps.postIconWrapperProps = { iconName: postIconName, ...iconSize, padding: '0.125rem' }
  return flexInlinerProps


})


</script>
