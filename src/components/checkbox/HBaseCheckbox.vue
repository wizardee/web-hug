<template>
  <h-pseudo-state-wrapper :class-name="className" :is-disabled="isDisabled" :styles="styles" @on-click="toggle">
    <h-flex-inliner :class-name="flexInlinerClassName" :text-wrapper-props="textWrapperProps">
      <template v-slot:pre-most>
        <h-base :class-name="boxClasses" :styles="boxStyles">
          <h-icon-wrapper class-name="w-full h-full" :icon-name="iconName" height="100%" width="100%" />
        </h-base>
      </template>
    </h-flex-inliner>
  </h-pseudo-state-wrapper>
</template>

<script lang="ts" setup>

import HPseudoStateWrapper from '@/components/abstract/HPseudoStateWrapper.vue'
import type { HBaseCheckboxProps, HCheckboxModel } from '@/manage/types/components/checkbox'
import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
import { computed } from 'vue'
import { removeElementAndReturnArray } from '@/utils/array'
import type { IconName } from '@/manage/types/icon-names'
import { getCheckboxStatus } from '@/composables/use-checkbox'
import HIconWrapper from '@/components/icon/HIconWrapper.vue'
import HBase from '@/components/abstract/HBase.vue'

const props = withDefaults(defineProps<HBaseCheckboxProps>(), {
  isDisabled: true,
  isCircle: false,
  checkedIconName: 'icons_checkmark_checkmark',
  uncheckedIconName: '' as IconName,
  intermediateIconName: 'icons_minus_minus'
})
const model = defineModel<HCheckboxModel>('checkboxModel')
const checkStatus = computed(() => getCheckboxStatus(model.value, props.value))

const toggle = () => {
  if (Array.isArray(model.value)) {
    const value = props.value
    const hasValue = model.value.indexOf(value) !== -1
    const cloned = JSON.parse(JSON.stringify(model.value))
    model.value = hasValue ? removeElementAndReturnArray(value, cloned) : [...cloned, value]
  } else model.value = !model.value
}

const textWrapperProps = computed(() => {
  const { label, textWrapperCoreProps } = props
  return !label ? undefined : { ...textWrapperCoreProps, text: label }
})

const iconName = computed(() => {
  const { checkedIconName, uncheckedIconName, intermediateIconName } = props
  const value = checkStatus.value
  return value === 'checked' ? checkedIconName : value === 'intermediate' ? intermediateIconName : uncheckedIconName
})
const boxClasses = computed(() => [props.boxBaseProps?.className ?? '', 'flex items-center justify-center', props.isCircle ? 'rounded-50%' : 'rounded-1'].join(' '))
const boxStyles = computed(() => props.boxBaseProps?.styles ?? {})


</script>
