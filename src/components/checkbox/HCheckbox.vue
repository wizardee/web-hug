<template>
  <h-base-checkbox v-model:checkbox-model="checkboxModel" v-bind="checkboxProps"
                   @on-change-state="(state: HCheckboxState) => checkboxState = state"
  />
</template>

<script lang="ts" setup>

import HBaseCheckbox from '@/components/checkbox/HBaseCheckbox.vue'
import type { HCheckboxModel, HCheckboxProps, HCheckboxState } from '@/manage/types/components/checkbox'
import { computed, ref, type Ref } from 'vue'
import { getSemantic } from '@/manage/constants/variables'
import { getCheckboxStatus } from '@/composables/use-checkbox'

const props = withDefaults(defineProps<HCheckboxProps>(), { isDisabled: false, isCircle: false })
const checkboxModel = defineModel<HCheckboxModel>('checkboxModel')
const checkboxState: Ref<HCheckboxState> = ref(props.isDisabled ? 'disabled' : 'default')
const checkStatus = computed(() => getCheckboxStatus(checkboxModel.value, props.value))

const textWrapperCoreProps = computed(() => {
  const className = 'h-typo-label-1-normal flex-1 h-font-regular'
  const color = getSemantic('secondary', 'foreground', 'normal', checkboxState.value)
  return { className, styles: { color } }
})


const boxBaseProps = computed(() => {
  const backgroundColor = checkStatus.value === 'unchecked' ? 'transparent' :
    getSemantic('primary', 'background', 'normal', checkboxState.value)
  const color = checkboxState.value === 'disabled' ?
    getSemantic('disabled', 'foreground', 'global', 'default')
    : getSemantic('white', 'global', 'global', 'default')

  const border = checkStatus.value !== 'unchecked' ? 'none' :
    `2px solid ${ getSemantic('secondary', 'stroke', 'strong', checkboxState.value) }`

  return { className: 'w-4 h-4 pa-0.25', styles: { backgroundColor, color, border } }
})


const checkboxProps = computed(() => ({
  ...props,
  textWrapperCoreProps: textWrapperCoreProps.value,
  flexInlinerClassName: 'gap-2 border-1 pa-1',
  boxBaseProps: boxBaseProps.value
}))
</script>
