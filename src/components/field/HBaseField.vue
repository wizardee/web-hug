<template>
  <h-base :class-name="className" :styles="styles">
    <h-base :class-name="gridClass">
      <h-base class-name="flex gap-1">
        <h-text-wrapper :class-name="gridItemClass(1, 1)" v-bind="labelWrapperProps" />
        <h-base v-if="hasAsterisk" class-name="h-typo-caption-1" :styles="{ color: asterisk }">* 필수</h-base>
        <slot v-if="$slots['post-label']" name="post-label"/>
      </h-base>
      <h-flex-inliner :class-name="gridItemClass(1, 2)">
        <template v-slot:main-slot>
          <h-pseudo-state-wrapper ref="boxRef" v-bind="pseudoWrapperProps" @on-change-state="(state) => emits('onChangeState', state)">
            <h-flex-inliner
                            :class-name="props.boxInlinerBaseProps.className ?? '' + ' w-full'"
                            :post-icon-wrapper-props="postIconWrapperProps"
                            :pre-icon-wrapper-props="preIconWrapperProps"
                            :styles="props.boxInlinerBaseProps.styles"
                            v-on:click="onClick">
              <template v-slot:pre-most>
                <slot name="pre-most" />
              </template>
              <template v-slot:main-slot>
                <slot name="main-slot" />
              </template>
            </h-flex-inliner>
            <slot name="field-additional" />
          </h-pseudo-state-wrapper>
        </template>
      </h-flex-inliner>
      <h-base v-if="labelPosition === 'left' && hasMessage" :class-name="gridItemClass(2, 1)" />
      <h-base v-if="hasMessage" :class-name="gridItemClass(2, 2)">
        <h-base class-name="w-inherit h-inherit flex flex-col gap-0.5">
          <h-text-wrapper v-for="message in messages" :key="message" v-bind="messageWrapperProps(message)" />
        </h-base>
      </h-base>
    </h-base>
  </h-base>
</template>

<script lang="ts" setup>

import HBase from '@/components/abstract/HBase.vue'
import type { HBaseFieldProps } from '@/manage/types/components/field'
import { computed, ref, watch } from 'vue'
import HTextWrapper from '@/components/text/HTextWrapper.vue'
import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
import HPseudoStateWrapper from '@/components/abstract/HPseudoStateWrapper.vue'
import { onClickOutside } from '@vueuse/core'
import { getSemantic } from "@/manage";

/**
 * 자체 width 를 가지지 않음. className이나 styles로 바인딩 필요.
 */
const props = withDefaults(defineProps<HBaseFieldProps>(), {
  labelPosition: 'left',
  hasMessage: false,
  readonly: false,
  isDisabled: false,
  hasAsterisk: false,
})

defineExpose({ setClickInside })
const emits = defineEmits(['onChangeState', 'onChangeExpand', 'onClickInside'])
const isClickedInside = ref(false)
const boxRef = ref(null)
const asterisk = getSemantic('error', 'foreground', 'normal', 'default')

onClickOutside(boxRef, () => setClickInside(false))
watch(() => isClickedInside.value, (value) => {
  emits('onChangeExpand', value)
})

const isReadonly = computed(() => props.isDisabled || props.readonly)
const gridClass = computed(() => {
  const { labelPosition, hasMessage, label } = props
  const grid = labelPosition === 'left' ?
    'grid grid-rows-[minmax(min-content,max-content)] grid-cols-[auto_minmax(0,1fr)]' :
    'grid grid-rows-[auto] grid-cols-[1fr]'

  const rowGap = `gap-row-2`
  const colGap = !label ? `gap-col-0` : `gap-col-2`
  const gap = labelPosition === 'top' ? rowGap : hasMessage ? [rowGap, colGap].join(' ') : colGap
  return [grid, gap].join(' ')
})

const gridItemClass = computed(() => (row: number, col: number) => {
  const { labelPosition } = props
  return labelPosition === 'left' ?
    `grid-row-start-${ row } grid-row-end-auto grid-col-start-${ col } grid-col-end-auto` : 'w-full'
})

const pseudoWrapperProps = computed(() => {
  const { isDisabled, componentPseudoState } = props
  return { componentPseudoState, isDisabled, className: 'w-full relative' }
})

const messageWrapperProps = computed(() => (message: string) => {
  const { messageWrapperCoreProps } = props
  if (!messageWrapperCoreProps) return { text: message }
  const { className = '', styles = {} } = messageWrapperCoreProps
  const cls = `flex ${ className }`
  return { text: message, className: cls, styles }
})

function setClickInside(state: boolean) {
  isClickedInside.value = state
}

function onClick() {
  if (isReadonly.value) return
  emits('onClickInside')
}


</script>
