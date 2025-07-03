<template>
  <h-base :styles="props" />
</template>

<script lang="ts" setup>
import type { HDividerProps } from '@/manage/types/components/divider'
import HBase from '@/components/abstract/HBase.vue'

const props = defineProps<HDividerProps>()
</script>
