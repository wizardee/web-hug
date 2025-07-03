<template>
  <h-base-button
    :class-name="baseClassName"
    :component-pseudo-state="componentPseudoState"
    :flex-inliner-props="buttonInlinerProps" :is-disabled="isDisabled" :styles="styles"
    :tooltip-option="tooltipOption" @on-change-state="(state) => buttonState = state">
    <template v-slot:pre-between>
      <slot v-if="$slots['pre-between']" name="pre-between"/>
    </template>
    <template v-slot:post-between>
      <slot v-if="$slots['post-between']" name="post-between"/>
    </template>
  </h-base-button>
</template>

<script lang="ts" setup>


import { computed, ref, type Ref, watchEffect } from 'vue'
import type {
  HButtonComponentPseudoState,
  HButtonProps,
  HButtonRound,
  HButtonSize,
  HButtonState
} from '@/manage/types/components/button'
import { getHeightVar, getSemantic } from '@/manage/constants/variables'
import type { HFlexInlinerProps } from '@/manage/types/abstracts/flex-inliner'
import HBaseButton from '@/components/button/HBaseButton.vue'
import type { Position } from '@/manage/types/global'
import { getBorderStyles } from '@/utils/style'

const props = withDefaults(defineProps<HButtonProps>(), {
  isDisabled: false,
  borderPositions: () => ['top', 'bottom', 'left', 'right'] as Position[],
  className: '',
  justify: 'justify-between',
  noPadding: false,
})
const buttonState: Ref<HButtonState> = ref(props.isDisabled ? 'disabled' : props.componentPseudoState as HButtonComponentPseudoState ?? 'default')

const hasOnlyIcon = computed(() => !props.text && ((props.preIconName && !props.postIconName) || !props.preIconName && props.postIconName))
const commonClasses = computed(() => {
  const padding = props.noPadding ? '' : hasOnlyIcon.value ? 'px-2' : 'px-3'
  return `${padding} flex items-center`
})

const typoMap: Record<HButtonSize, string> = {
  xlg: 'h-font-medium h-typo-body-1-normal',
  lg: 'h-font-medium h-typo-body-1-normal',
  md: 'h-font-medium h-typo-body-2-normal',
  sm: 'h-font-medium h-typo-label-1-normal',
  xsm: 'h-font-medium h-typo-label-2'
}

const roundMap: Record<HButtonRound, string> = {
  circle: 'rounded-full',
  square: 'rounded-none',
  roundedSquare: 'rounded-1',
  roundedTop: 'rounded-t-[calc(0.25rem-1px)]',
  roundedBottom: 'rounded-b-[calc(0.25rem-1px)]',
  roundedLeft: 'rounded-l-[calc(0.25rem-1px)]',
  roundedRight: 'rounded-r-[calc(0.25rem-1px)]'
}

const remMap: Record<HButtonSize, string> = {
  xlg: '1.5rem',
  lg: '1.25rem',
  md: '1rem',
  sm: '1rem',
  xsm: '0.75rem'
}

const baseClassName = computed(() => {
  const { size, round, className, justify } = props
  const typo = typoMap[size]
  const roundTarget = roundMap[round]
  const common = commonClasses.value
  return [className, common, typo, justify, roundTarget].join(' ')

})

let styles: Ref<Partial<CSSStyleDeclaration>> = ref({})

watchEffect(() => {
  const state = buttonState.value
  const { theme, type, size, isDisabled } = props

  let color: string

  if (isDisabled) color = getSemantic('disabled', 'foreground', 'global', 'default')
  else if (theme === 'secondary' ||  type !== 'filled') color = getSemantic(theme, 'foreground', 'strong', state === 'selected' ? 'default' : state)
  else color = getSemantic('white', 'global', 'global', 'default')

  let borderColor: string
  let borderThickness = type === 'outlined' ? '1px' : '0'
  if (isDisabled) borderColor = getSemantic('disabled', 'stroke', 'global', 'default')
  else if (type === 'outlined') borderColor = getSemantic(theme, 'stroke', 'normal', state)
  else borderColor = ''
  const borderStyle = `${ borderThickness } solid ${ borderColor }`
  const border = getBorderStyles(props.borderPositions, borderStyle)
  let backgroundColor: string
  const bgLevel = theme === 'secondary' ? 'strong' : type === 'filled' ? 'normal' : 'strong'
  if (isDisabled) backgroundColor = (type === 'outlined' || type === 'transparent') ? 'transparent' :
    getSemantic('disabled', 'background', 'global', 'default')
  else if (type === 'filled') backgroundColor = getSemantic(theme, 'background', bgLevel, state)
  else if (state === 'default' || state === 'focused' || theme === 'link' || theme === 'error' || theme === 'warning') backgroundColor = 'transparent'
  else backgroundColor = getSemantic(theme, 'background', bgLevel, state)

  const height = getHeightVar(size)
  styles.value = { height, ...border, backgroundColor, color }
})

const buttonInlinerProps = computed(() => {
  const { text, preIconName, postIconName, size } = props
  const rem = remMap[size]
  const className = 'gap-2 max-w-full'
  let flexInlinerProps: HFlexInlinerProps = { className }
  const iconSize = { width: rem, height: rem }
  if (text) flexInlinerProps.textWrapperProps = { text }
  if (preIconName) flexInlinerProps.preIconWrapperProps = { iconName: preIconName, ...iconSize }
  if (postIconName) flexInlinerProps.postIconWrapperProps = { iconName: postIconName, ...iconSize }

  return flexInlinerProps
})
</script>