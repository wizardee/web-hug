<template>
  <h-base :class-name="wrapperClassName" :styles="styles">
    <slot v-if="$slots['header-above']" name="header-above" />
    <h-base v-if="headerProps" class-name="w-full h-fit">
      <div class="w-full h-max flex items-center gap-4">
        <slot v-if="$slots['header-pre']" name="header-pre" />
        <h-text-wrapper v-bind="headerProps" />
        <slot v-if="$slots['header-mid']" name="header-mid" />
        <slot v-if="$slots['header-post']" name="header-post" />
      </div>
    </h-base>
    <slot v-if="$slots['header-below']" name="header-below" />
    <slot v-if="$slots['body']" name="body" />
    <slot v-if="$slots['footer']" name="footer" />
    <slot v-if="$slots['footer-below']" name="footer-below" />
  </h-base>
</template>

<script lang="ts" setup>
import { HBaseCardProps } from '@/manage/types/components/card'
import HBase from '@/components/abstract/HBase.vue'
import { computed } from 'vue'
import HTextWrapper from '@/components/text/HTextWrapper.vue'

/**
 *  className 으로 사이즈를 항상 받아 와야 함. 자체 사이즈가 없는 컴포넌트
 *  v-if $slots 를 넣는 이유는 wrapperClassName 의 gap-4 가 슬롯이 없는 부분에 대해서는 적용되지 않아야 하기 때문
 */
const props = withDefaults(defineProps<HBaseCardProps>(), { className: '' })
const wrapperClassName = computed(() => `${ props.className } flex flex-col gap-4`)

</script>