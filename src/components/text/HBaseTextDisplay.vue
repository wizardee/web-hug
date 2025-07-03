<template>
  <h-flex-inliner :flex-direction="flexDirection">
    <template v-slot:pre-most>
      <h-base v-if="iconWrapperProps" />
    </template>
    <template v-slot:main-slot>
      <h-empty v-if="isEmpty" />
    </template>
    <template v-slot:post-most>
      <h-base class-name="flex flex-col max-w-full gap-1" :class="textCenter ? 'items-center' : ''">
        <h-text-wrapper v-for="textProp in textPropsList" :key="textProp.text" v-bind="textProp" />
      </h-base>
    </template>
  </h-flex-inliner>
</template>

<script lang="ts" setup>
import { computed, type ComputedRef } from 'vue'
import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
import HBase from '@/components/abstract/HBase.vue'
import HEmpty from '@/components/abstract/HEmpty.vue'
import HTextWrapper from '@/components/text/HTextWrapper.vue'
import type { HBaseTextDisplayProps, HTextWrapperProps } from '@/manage/types/components/text'

const props = withDefaults(defineProps<HBaseTextDisplayProps>(), { position: 'left', iconPosition: 'left', textCenter: false })

const isEmpty = computed(() => {
  const { position, iconPosition } = props
  return !(position === 'left' && iconPosition === 'left')
})

const flexDirection = computed(() => {
  const { position, iconPosition, iconWrapperProps } = props
  if (position === 'center') return 'column'
  else return !iconWrapperProps || iconPosition === 'left' ? 'row' : 'row-reverse'
})

const textPropsList: ComputedRef<HTextWrapperProps[]> = computed(() => {
  const { labelProps, primaryProps, descriptionProps, captionProps } = props
  return [labelProps, primaryProps, descriptionProps, captionProps].filter(e => !!e) as HTextWrapperProps[]
})
</script>