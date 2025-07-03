<template>
  <h-flex-inliner v-bind="props" />
</template>
<script lang="ts" setup>


import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
import type { HBaseBadgeProps } from '@/manage/types/components/badge'
const props = defineProps<HBaseBadgeProps>()
</script>