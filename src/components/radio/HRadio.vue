<template>
  <h-base-radio v-model:radio-model="radioModel" v-bind="radioProps" @on-change-state="(state: HRadioState) => radioState = state"/>
</template>

<script lang="ts" setup>
import {
  type HBaseRadioProps,
  HRadioModel,
  type HRadioProps,
  type HRadioState
} from '@/manage/types/components/radio'
import HBaseRadio from '@/components/radio/HBaseRadio.vue'
import { computed, type ComputedRef, ref, type Ref } from 'vue'
import { getSemantic } from '@/manage/constants/variables'

const props = withDefaults(defineProps<HRadioProps>(), { isDisabled: false, position: 'left' })
const radioModel = defineModel<HRadioModel>('radioModel')
const radioState: Ref<HRadioState> = ref(props.isDisabled ? 'disabled' : 'default')
const selectState = computed(() => props.value === radioModel.value)
const textWrapperCoreProps = computed(() => {
  const typo = 'h-typo-label-1-normal h-font-regular'
  const color = getSemantic('secondary', 'foreground', 'strong', radioState.value)
  return { className: typo, styles: { color } }
})

const outerBaseProps = computed(() => {
  const size = 'w-4 h-4'
  const padding = 'pa-0.5'
  const border = `2px solid ${ getSemantic('secondary', 'stroke', 'heavy', radioState.value) }`
  return {
    className: [padding, size].join(' '),
    styles: { border }
  }
})

const innerBaseProps = computed(() => {
  const state = selectState.value
  const backgroundColor = state ? getSemantic('primary', 'background', 'normal', radioState.value) : 'transparent'
  return { styles: { backgroundColor } }
})

const radioProps: ComputedRef<HBaseRadioProps> = computed(() => {
  return {
    ...props,
    textWrapperCoreProps: textWrapperCoreProps.value,
    flexInlinerClassName: 'w-fit h-7 gap-2 pa-1',
    outerBaseProps: outerBaseProps.value,
    innerBaseProps: innerBaseProps.value
  }
})
</script>