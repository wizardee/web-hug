<template>
  <h-base-card :class-name="className" :styles="styles" v-bind="baseCardProps">
    <template v-if="$slots['header-above']" v-slot:header-above>
      <slot name="header-above" />
    </template>
    <template v-if="$slots['header-pre']" v-slot:header-pre>
      <slot name="header-pre" />
    </template>
    <template v-if="$slots['header-mid']" v-slot:header-mid>
      <slot name="header-mid" />
    </template>
    <template v-if="$slots['header-post']" v-slot:header-post>
      <slot name="header-post" />
    </template>
    <template v-if="$slots['header-below']" v-slot:header-below>
      <slot name="header-below" />
    </template>
    <template v-if="$slots['body']" v-slot:body>
      <slot name="body" />
    </template>
    <template v-if="$slots['footer']" v-slot:footer>
      <slot name="footer" />
    </template>
    <template v-if="$slots['footer-below']" v-slot:footer-below>
      <slot name="footer-below" />
    </template>
  </h-base-card>
</template>

<script lang="ts" setup>


import type { HBaseCardProps, HLayoutCardProps } from '@/manage/types/components/card'
import { getSemantic } from '@/manage/constants/variables'
import { computed, type ComputedRef, MaybeRef } from 'vue'
import { getBorderStyles } from '@/utils/style'
import type { HTextWrapperProps } from '@/manage/types/components/text'
import { useMergedProps } from '@/composables/use-merged-props'
import HBaseCard from '@/components/card/HBaseCard.vue'

const props = defineProps<HLayoutCardProps>()

const backgroundColor = getSemantic('secondary', 'background', 'normal', 'default')
const titleColor = getSemantic('secondary', 'foreground', 'normal', 'default')

const borderStyle = `1px solid ${ getSemantic('secondary', 'stroke', 'normal', 'default') }`
const border = computed(() => getBorderStyles(props.borderPositions ?? [], borderStyle))
const padding = '1rem'
const styles = computed(() => ({ backgroundColor, padding, ...props.styles, ...border.value }))
const defaultProps: Partial<HTextWrapperProps> = {
  styles: { color: titleColor },
  className: 'h-font-bold h-typo-heading-2'
}

const headerProps = computed(() => props.headerProps)
const { mergedProps } = useMergedProps<HTextWrapperProps | undefined>(defaultProps, headerProps)
const baseCardProps: ComputedRef<HBaseCardProps> = computed(() => ({ headerProps: props.headerProps && mergedProps.value }))


</script>