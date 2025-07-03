<template>
  <h-base :styles="styles" :class-name="`flex h-8 rounded-1 ${isEven ? 'w-full' : 'w-fit'}`">
    <h-base v-for="(buttonProp, index) in buttonPropList" :key="index" :class-name="buttonClass">
      <h-divider v-if="index !== 0" :border-left="borderLeft" width="1px" :height="height"/>
      <h-button class-name="w-full overflow-x-hidden" justify="justify-center" v-bind="buttonProp" @on-click="click(buttonProp)" >
        <template v-slot:pre-between>
          <template v-if="buttonProp.preComponent">
            <component :is="buttonProp.preComponent"/>
          </template>
        </template>
        <template v-slot:post-between>
          <template v-if="buttonProp.postComponent">
            <component :is="buttonProp.postComponent"/>
          </template>
        </template>
      </h-button>
    </h-base>
  </h-base>
</template>

<script lang="ts" setup>

import HButton from '@/components/button/HButton.vue'
import HBase from '@/components/abstract/HBase.vue'
import type { HButtonProps, HSegmentedButtonModel, HSegmentedButtonProps } from '@/manage/types/components/button'
import { type Component, computed, type ComputedRef } from 'vue'
import { getHeightVar, getSemantic } from '@/manage/constants/variables'
import { removeElementAndReturnArray } from '@/utils/array'
import { isNil } from 'lodash'
import HDivider from '@/components/divider/HDivider.vue'

const props = withDefaults(defineProps<HSegmentedButtonProps>(), { size: 'md', isSingle: true, isEven: true, selectedTheme: 'primary' })
const disabledValues = computed(() => props.disabledValues ?? [])
const model = defineModel<HSegmentedButtonModel>('segmentedButtonModel')
type HValuedButtonProps = HButtonProps & { value: string | number } & { preComponent?: Component, postComponent?: Component }

const buttonClass = computed(() => {
  const { isEven } = props;
  const common = 'flex overflow-x-auto overflow-y-hidden'
  const divider = isEven ? `flex-1` : ''
  return `${common} ${divider}`
})

const borderColor = getSemantic('secondary', 'stroke', 'normal', 'default')
const styles = computed(() => {
  return { border: `1px solid ${ borderColor }` }
})

const borderLeft = `1px solid ${borderColor}`
const height = getHeightVar('md')

const buttonPropList: ComputedRef<HValuedButtonProps[]> = computed(() => props.buttons.map((button, index) => {
  const isIncluded = isValueIncludedInModel(button.value)
  return {
    size: props.size,
    borderPositions: [],
    round: index === 0 ? 'roundedLeft' : index === props.buttons.length - 1 ? 'roundedRight' : 'square',
    theme: isIncluded ? props.selectedTheme : 'secondary',
    componentPseudoState: isIncluded ? 'selected' : undefined,
    isDisabled: disabledValues.value.indexOf(`${button.value}`) !== -1,
    type: isIncluded ? 'filled' : 'transparent',
    text: button.label,
    value: button.value,
    preComponent: button.preComponent,
    postComponent: button.postComponent,
  } as HValuedButtonProps
}))

function isValueIncludedInModel(value: string | number) {
  const { isSingle } = props
  if (isSingle) return value === model.value
  else return isNil(model.value) ? false : (model.value as (string | number)[]).indexOf(value) !== -1
}


const click = (buttonProp: HValuedButtonProps) => {
  const { isSingle } = props
  if(disabledValues.value.indexOf(`${buttonProp.value}`) !== -1) return;
  if (isSingle) model.value = buttonProp.value
  else {
    const value = buttonProp.value
    if (Array.isArray(model.value)) {
      const hasValue = model.value.indexOf(value) !== -1
      const cloned = JSON.parse(JSON.stringify(model.value))
      model.value = hasValue ? removeElementAndReturnArray(value, cloned) : [...cloned, value]
    } else model.value = [value]
  }
}
</script>
