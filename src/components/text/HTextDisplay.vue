<template>
  <h-base-text-display v-bind="baseTextDisplayProps" />
</template>

<script lang="ts" setup>


import HBaseTextDisplay from '@/components/text/HBaseTextDisplay.vue'
import type {
  HTextDisplayProps,
  HTextDisplayPropsText,
  HTextDisplaySize,
  HTextWrapperProps
} from '@/manage/types/components/text'
import { getSemantic, type SemanticLevel } from '@/manage/constants/variables'
import { computed } from 'vue'
import { isNil } from "lodash";

const props = defineProps<HTextDisplayProps>()

const levels: SemanticLevel[] = ['strong', 'normal', 'normal', 'heavy', 'inverse']
const [iconColor, labelColor, primaryColor, descriptionColor, captionColor] =
  levels.map(level => getSemantic('secondary', 'foreground', level, 'default'))

const colors: Record<keyof HTextDisplayPropsText, string> = {
  label: labelColor,
  primary: primaryColor,
  description: descriptionColor,
  caption: captionColor
}

const iconSize: Record<HTextDisplaySize, string> = { xlg: '1.75rem', lg: '1.5rem', md: '1.25rem', sm: '1rem' }

const fonts: Record<keyof HTextDisplayPropsText, string> = {
  label: 'h-font-regular', primary: 'h-font-bold', description: 'h-font-regular', caption: 'h-font-regular'
}

const typos: Record<keyof HTextDisplayPropsText, Record<HTextDisplaySize, string>> = {
  label: { xlg: 'h-typo-body-2-normal', lg: 'h-typo-label-1-normal', md: 'h-typo-label-2', sm: 'h-typo-caption-1' },
  primary: { xlg: 'h-typo-heading-1', lg: 'h-typo-heading-2', md: 'h-typo-body-1-reading', sm: 'h-typo-caption-1' },
  description: { xlg: 'h-typo-label-1-reading', lg: 'h-typo-label-2', md: 'h-typo-label-2', sm: 'h-typo-caption-1' },
  caption: { xlg: 'h-typo-caption-1', lg: 'h-typo-caption-1', md: 'h-typo-caption-1', sm: 'h-typo-caption-2' }
}


const iconWrapperProps = computed(() => {
  const { iconProps, size } = props
  const className = 'flex-none'
  return iconProps ? {
    ...iconProps,
    width: iconSize[size],
    height: iconSize[size],
    color: iconColor,
    className
  } : undefined
})

const labelProps = getTextWrapperProps('label')
const primaryProps = getTextWrapperProps('primary')
const descriptionProps = getTextWrapperProps('description')
const captionProps = getTextWrapperProps('caption')

function getTextWrapperProps(name: keyof HTextDisplayPropsText) {
  return computed((): HTextWrapperProps | undefined => {
    const text = props[name]
    const { size } = props
    return isNil(text) ? undefined : {
      text: text,
      className: [fonts[name], typos[name][size]].join(' '),
      styles: { color: colors[name] }
    }
  })
}

const baseTextDisplayProps = computed(() => ({
  iconWrapperProps: iconWrapperProps.value,
  labelProps: labelProps.value,
  primaryProps: primaryProps.value,
  descriptionProps: descriptionProps.value,
  captionProps: captionProps.value,
  textCenter: props.textCenter
}))

</script>