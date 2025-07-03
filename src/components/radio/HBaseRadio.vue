<template>
  <h-pseudo-state-wrapper :class-name="className" :is-disabled="isDisabled" :styles="styles" @on-click="select">
    <h-flex-inliner :class-name="flexInlinerClassName" :flex-direction="position === 'right' ? 'row' : 'row-reverse'"
                    :text-wrapper-props="textWrapperProps">
      <template v-slot:pre-most>
        <h-base :class-name="outerClasses" :styles="outerStyles">
          <h-base :class-name="innerClasses" :styles="innerStyles" />
        </h-base>
      </template>
    </h-flex-inliner>
  </h-pseudo-state-wrapper>
</template>

<script lang="ts" setup>

import HPseudoStateWrapper from '@/components/abstract/HPseudoStateWrapper.vue'
import type { HBaseRadioProps, HRadioModel } from '@/manage/types/components/radio'
import { computed } from 'vue'
import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
import HBase from '@/components/abstract/HBase.vue'

const props = withDefaults(defineProps<HBaseRadioProps>(), { isDisabled: true, position: 'left' })
const radioModel = defineModel<HRadioModel>('radioModel')
const select = () => radioModel.value = props.value
const textWrapperProps = computed(() => {
  const { label, textWrapperCoreProps } = props
  return !label ? undefined : { ...textWrapperCoreProps, text: label }
})

const outerClasses = computed(() => {
  const base = 'rounded-full'
  const outerClassName = props.outerBaseProps?.className ?? ''
  return [base, outerClassName].join(' ')
})

const outerStyles = computed(() => props.outerBaseProps?.styles ?? {})
const innerClasses = computed(() => [props.innerBaseProps?.className ?? '', 'w-full h-full rounded-full'].join(' '))
const innerStyles = computed(() => props.innerBaseProps?.styles ?? {})


</script>