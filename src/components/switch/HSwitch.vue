<template>
  <h-base-switch v-model:switch-model="switchModel" v-bind="switchProps"
                 @on-change-state="(state: HSwitchState) => switchState = state" />
</template>

<script lang="ts" setup>

import HBaseSwitch from '@/components/switch/HBaseSwitch.vue'
import type { HBaseSwitchProps, HSwitchModel, HSwitchProps, HSwitchState } from '@/manage/types/components/switch'
import { computed, type ComputedRef, type Ref, ref } from 'vue'
import { getSemantic } from '@/manage/constants/variables'

const props = withDefaults(defineProps<HSwitchProps>(), { isDisabled: false, position: 'left' })
const switchModel = defineModel<HSwitchModel>('switchModel')
const switchState: Ref<HSwitchState> = ref(props.isDisabled ? 'disabled' : 'default')
const className = computed(() => {
  const height = props.position === 'top' ? 'h-14' : 'h-9'
  return ['px-2 flex items-center', height].join(' ')
})

const textWrapperCoreProps = computed(() => {
  const typo = 'h-typo-label-2 h-font-regular'
  const color = getSemantic('secondary', 'foreground', 'normal', switchState.value)
  return { className: typo, styles: { color } }
})

const outerBaseProps = computed(() => {
  const toggleState = switchModel.value
  const padding = toggleState ? 'px-0.625' : 'px-0.5'
  const size = 'h-5 w-10'
  const border = toggleState ? 'none' : `2px solid ${ getSemantic('secondary', 'stroke', 'heavy', switchState.value) }`
  const backgroundColor = toggleState ? getSemantic('primary', 'background', 'normal', switchState.value) : 'transparent'
  return {
    className: [padding, size].join(' '),
    styles: { border, backgroundColor }
  }
})


const innerBaseProps = computed(() => {
  const toggleState = switchModel.value
  const backgroundColor = toggleState ? getSemantic('white', 'global', 'global', 'default') :
    getSemantic('secondary', 'foreground', 'strong', switchState.value)
  return {
    className: 'w-3.25 h-3.25',
    styles: { backgroundColor }
  }
})

const switchProps: ComputedRef<HBaseSwitchProps> = computed(() => {

  return {
    ...props,
    className: className.value,
    textWrapperCoreProps: textWrapperCoreProps.value,
    flexInlinerClassName: 'h-fit w-fit gap-2',
    outerBaseProps: outerBaseProps.value,
    innerBaseProps: innerBaseProps.value
  }
})
</script>