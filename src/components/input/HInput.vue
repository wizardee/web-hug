<template>
  <h-base-field ref="fieldRef"
                v-bind="baseFieldProps"
                @on-change-expand="onValidate"
                @on-click-inside="onClickInside"
                @on-change-state="state => fieldState = state">
    <template v-slot:post-label>
      <slot name="post-label" />
    </template>
    <template v-slot:main-slot>
      <h-base :class-name="inputContainerClass">
        <form @submit.prevent novalidate>
          <input v-maska="options" :placeholder="placeholder" tabindex="1"
                 :readonly="isReadonly" :type="isPassword ? 'password' : 'text'" :value="model"
                 autocomplete="off" @input="updateTypedText" />
        </form>
      </h-base>
      <h-base v-if="hasButton" v-bind="searchProps" @click="emits('onClickSearch')"> 검색 </h-base>
    </template>
  </h-base-field>
</template>

<script lang="ts" setup>

import HBaseField from '@/components/field/HBaseField.vue'
import HBase from '@/components/abstract/HBase.vue'
import { computed, Ref, ref, watch } from 'vue'
import { vMaska } from 'maska/vue'
import { useSingleDebounced } from '@/composables/use-single-debounced'
import type { HInputModel, HInputProps } from '@/manage/types/components/input'
import { getFieldModel, getFieldStyle } from '@/composables/use-field'
import { getSemantic } from "@/manage";

const props = withDefaults(defineProps<HInputProps>(), {
  labelPosition: 'left',
  hasMessage: false,
  placeholder: '입력하세요',
  readonly: false,
  isDisabled: false,
  isPassword: false,
  hasButton: false,
  debounce: 200,
})

interface FieldRef {
  setClickInside: (state: boolean) => void;
}
const fieldRef: Ref<FieldRef| null> = ref(null)
const emits = defineEmits(['onClickSearch'])
defineExpose({ getUpdatedValidState })
const model = defineModel<HInputModel>('inputModel')
const isReadonly = computed(() => props.isDisabled || props.readonly)
const isDisabled = computed(() => props.isDisabled)
const inputContainerClass = computed(() => {
  const cursor = isReadonly.value ? 'cursor-not-allowed' : 'cursor-text'
  return `flex-1 flex h-full items-center ${ cursor }`
})
const { fieldState, validState, messages, validate } = getFieldModel(props, model)


const [debouncedText, setTypedText] = useSingleDebounced({ target: model, debounce: props.debounce })
const options = computed(() => props.mask ? { mask: props.mask, eager: true } : {})

const updateTypedText = (event: Event) => setTypedText((event.target as HTMLInputElement).value)
watch(debouncedText, string => model.value = string)

const coreProps = computed(() => props)
const baseFieldProps = getFieldStyle<HInputProps>(fieldState, validState, messages, coreProps, props.hasButton)

const backgroundColor = getSemantic('secondary', 'background', 'strong', 'default')

const borderRadius = '0 0.25rem 0.25rem 0'
const searchProps = computed(() => {
  const color = getSemantic(isDisabled.value ? 'disabled' : 'secondary', 'foreground', 'normal', 'default')
  const border = getSemantic('secondary', 'stroke', 'strong', fieldState.value)
  const borderLeft = `1px solid ${border}`
  return { className: 'w-10 h-full flex items-center justify-center h-typo-label-1-normal h-font-semiBold', styles: { color, backgroundColor, borderLeft, borderRadius }}
})


function onValidate(state: boolean) {
  if(!state) validate()
}

function onClickInside() {
  fieldRef.value!.setClickInside(true)
}

function getUpdatedValidState() {
  validate();
  return validState.value
}

</script>

<style lang="sass" scoped>
form
  all: unset
  width: 100%
  height: 100%

input
  all: unset
  width: 100%
  height: 100%

input::placeholder
  opacity: 0.5

input::-ms-input-placeholder
  opacity: 0.5
</style>