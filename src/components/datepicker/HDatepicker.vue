<template>
  <h-base-field ref="fieldRef" v-bind="baseFieldProps"
                @on-change-expand="onValidate"
                @on-click-inside="onClickInside"
                @on-change-state="state => fieldState = state">
    <template v-slot:post-label>
      <slot name="post-label" />
    </template>
    <template v-slot:main-slot>
      <h-base :class-name="inputContainerClass">
        <form @submit.prevent novalidate>
          <input :placeholder="placeholder" tabindex="1" readonly type="text" :value="inputModel" autocomplete="off"/>
        </form>
        <template v-if="showEmpty">
          <h-button v-if="!isNil(model)" class="flex-none" size="xsm" type="filled" post-icon-name="icons_close_close" round="circle" theme="secondary" @on-click="emptyModel"/>
        </template>
      </h-base>
    </template>
    <template v-slot:field-additional>
      <h-base v-show="openSlot" :data-content-position="contentPosition" :className="additionalClassName" :styles="additionalStyles">
        <h-datepicker-content v-if="openSlot" v-model:date-model="model" :empty-date-type="computedEmptyDateType" @on-close="close"/>
      </h-base>
    </template>
  </h-base-field>
</template>


<script lang="ts" setup>

import { computed, Ref, ref } from 'vue'
import { Mask } from 'maska'
import { HBase, HBaseField, HButton } from "@/components";
import HDatepickerContent from "@/components/datepicker/HDatepickerContent.vue";
import { HDatepickerModel, HDatepickerProps } from "@/manage/types/components/datepicker";
import { getFieldModel, getFieldStyle } from "@/composables";
import { getSemantic } from "@/manage";
import { isNil } from "lodash";

const props = withDefaults(defineProps<HDatepickerProps>(), {
  datepickerWidthClass: 'w-full',
  hasMessage: false,
  readonly: false,
  isDisabled: false,
  placeholder: '입력하세요',
  postIconName: 'icons_calendar',
  datepickerPosition: 'left',
  mask: '####-##-##',
  labelPosition: 'top',
  containerZIndex: 90,
  contentPosition: 'bottom',
  showEmpty: false,
})

interface FieldRef {
  setClickInside: (state: boolean) => void;
}
const fieldRef: Ref<FieldRef| null> = ref(null)
const openSlot = ref(false)
defineExpose({ getUpdatedValidState })

const model = defineModel<HDatepickerModel>('dateModel')
const isReadonly = computed(() => props.isDisabled || props.readonly)
const inputContainerClass = computed(() => {
  const cursor = isReadonly.value ? 'cursor-not-allowed' : 'cursor-pointer'
  return `flex-1 flex h-full items-center gap-2 ${ cursor }`
})
const maska = computed(() => new Mask({ mask: props.mask, eager: true }))
const computedEmptyDateType = computed(() => {
  const modelValue = model.value;
  const { emptyDateType } = props
  if(Array.isArray(modelValue)) return 'ranged';
  else if(emptyDateType) return emptyDateType;
  else {
    const len = (modelValue ?? '').length ?? 4;
    return len === 8 ? 'date' : len === 6 ? 'month' : 'year'
  }
})


const inputModel = computed(() => {
  if(!model.value) return model.value
  if(Array.isArray(model.value)) return `${maska.value.masked(model.value[0])} ~ ${maska.value.masked(model.value[1])}`
  else return maska.value.masked(model.value)
})

const { fieldState, validState, messages, validate } = getFieldModel(props, model)
const baseFieldProps = getFieldStyle<HDatepickerProps>(fieldState, validState, messages, props)

const additionalClassName = computed(() => {
  const { datepickerPosition, datepickerWidthClass } = props;
  const position = datepickerPosition === 'left' ? 'left-0' : 'right-0'
  const common = 'cursor-default content-container box-shadow-base min-w-60 h-fit max-h-100 rounded-1 absolute overflow-y-scroll hide-scrollbar'
  return `${common} ${datepickerWidthClass} ${position}`
})

const additionalStyles = computed(() => {
  return {
    backgroundColor: getSemantic('secondary', 'background', 'strong', 'default'),
    zIndex: `${props.containerZIndex}`
  }
})

function onValidate(state: boolean) {
  if(isReadonly.value) return
  openSlot.value = state;
  if(!state) validate()
}

function close() {
  fieldRef.value!.setClickInside(false)
}

function onClickInside() {
  fieldRef.value!.setClickInside(!openSlot.value)
}

function getUpdatedValidState() {
  validate();
  return validState.value
}
function emptyModel() {
  model.value = undefined
}
</script>

<style lang="sass" scoped>

.content-container[data-content-position="top"]
  bottom: 100%
.content-container[data-content-position="bottom"]
  top: 100%

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