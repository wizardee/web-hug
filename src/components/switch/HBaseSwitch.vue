<template>
  <h-pseudo-state-wrapper :class-name="className" :is-disabled="isDisabled" :styles="styles" @on-click="toggle">
    <h-flex-inliner :class-name="flexInlinerClassName" :flex-direction="flexDirection"
                    :text-wrapper-props="textWrapperProps">
      <template v-slot:post-most>
        <h-base :class-name="toggleWrapper">
          <h-base :class-name="outerClasses" :styles="outerStyles">
            <h-base :class-name="innerClasses" :styles="innerStyles" />
          </h-base>
        </h-base>
      </template>
    </h-flex-inliner>
  </h-pseudo-state-wrapper>
</template>

<script lang="ts" setup>

import HPseudoStateWrapper from '@/components/abstract/HPseudoStateWrapper.vue'
import type { HBaseSwitchProps, HSwitchModel } from '@/manage/types/components/switch'
import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
import HBase from '@/components/abstract/HBase.vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<HBaseSwitchProps>(), {
  isDisabled: true, position: 'left'
})
const switchModel = defineModel<HSwitchModel>('switchModel')
const toggle = () => switchModel.value = !switchModel.value

const flexDirection = computed(() => {
  const { label, position } = props
  if (!label) return 'row';
  if (position === 'left') return 'row'
  else if (position === 'right') return 'row-reverse'
  else return 'column';
})
const textWrapperProps = computed(() => {
  const { label, textWrapperCoreProps } = props
  return !label ? undefined : { ...textWrapperCoreProps, text: label }
})

const toggleWrapper = computed(() => {
  const { position } = props
  const justify = switchModel.value ? 'justify-end' : 'justify-start'
  if (position === 'top') return `w-full flex flex-row items-center ${ justify }`
  else return ''
})

const outerClasses = computed(() => {
  const base = 'rounded-full flex flex-row items-center'
  const justify = switchModel.value ? 'justify-end' : 'justify-start'
  const outerClassName = props.outerBaseProps?.className ?? ''
  return [base, justify, outerClassName].join(' ')
})

const outerStyles = computed(() => props.outerBaseProps?.styles ?? {})
const innerClasses = computed(() => [props.innerBaseProps?.className ?? '', 'rounded-full'].join(' '))
const innerStyles = computed(() => props.innerBaseProps?.styles ?? {})
</script>