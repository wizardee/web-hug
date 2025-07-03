<template>
  <div :class="_class" :style="_style">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { HBaseProps } from '@/manage/types/global'
import { convertStylesToString } from '@/utils/style'

const props = defineProps<HBaseProps>();

const _class = computed(() => props.className ?? '');
const _style = computed(() => props.styles ? convertStylesToString({ ...props.styles }) : {})
</script>