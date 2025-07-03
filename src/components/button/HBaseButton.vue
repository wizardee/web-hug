<template>
  <h-pseudo-state-wrapper :class-name="className"
                          :component-pseudo-state="componentPseudoState"
                          :is-disabled="isDisabled" :styles="styles" :tooltip-option="tooltipOption">
    <h-flex-inliner v-bind="props.flexInlinerProps" >
      <template v-slot:pre-between>
        <slot v-if="$slots['pre-between']" name="pre-between"/>
      </template>
      <template v-slot:post-between>
        <slot v-if="$slots['post-between']" name="post-between"/>
      </template>
    </h-flex-inliner>
  </h-pseudo-state-wrapper>
</template>
<script lang="ts" setup>


import type { HBaseButtonProps } from '@/manage/types/components/button'
import HPseudoStateWrapper from '@/components/abstract/HPseudoStateWrapper.vue'
import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
const props = withDefaults(defineProps<HBaseButtonProps>(), { isDisabled: false })
</script>