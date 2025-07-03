<template>
  <h-base :class-name="computedClass" :styles="styles">
    <slot name="pre-most"/>
    <template v-if="preIconWrapperProps">
      <h-icon-wrapper v-bind="preIconWrapperProps"/>
    </template>
    <slot name="pre-between"/>
    <slot name="main-slot">
      <template v-if="textWrapperProps">
        <h-text-wrapper v-bind="textWrapperProps"/>
      </template>
    </slot>
    <slot name="post-between"/>
    <template v-if="postIconWrapperProps">
      <h-icon-wrapper v-bind="postIconWrapperProps"/>
    </template>
    <slot name="post-most"/>
  </h-base>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import HIconWrapper from '@/components/icon/HIconWrapper.vue'
import type { HFlexInlinerProps } from '@/manage/types/abstracts/flex-inliner'
import HTextWrapper from '@/components/text/HTextWrapper.vue'
import HBase from '@/components/abstract/HBase.vue'

const props = withDefaults(defineProps<HFlexInlinerProps>(), { flexDirection: 'row', flexWrap: false, className: '' })
const computedClass = computed(() => {
  const common = 'flex min-w-0'
  const className = props.className;
  const flexWrap = props.flexWrap ? 'flex-wrap' : 'flex-nowrap'
  const isRow = ['row', 'row-reverse'].indexOf(props.flexDirection) !== -1
  const flexDirection = !isRow ? 'flex-col' : props.flexDirection === 'row' ? 'flex-row' : 'flex-row-reverse'
  const flexPosition = isRow ? `items-center` : `justify-center`
  return [common, flexWrap, flexDirection, flexPosition, className].join(' ')
})


</script>