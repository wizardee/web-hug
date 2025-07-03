<template>
  <h-base :class-name="baseClassName" :styles="styles">
    <span class="truncate"> {{ text }}</span>
  </h-base>
</template>

<script lang="ts" setup>
import HBase from '@/components/abstract/HBase.vue'
import type { HTextWrapperProps } from '@/manage/types/components/text'
import { computed } from 'vue'

const props = withDefaults(defineProps<HTextWrapperProps>(), { className: '' })
const baseClassName = computed(() => `truncate ${ props.className } `)
</script>