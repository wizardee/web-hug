<template>
  <svg :viewBox="svgIcon.viewBox" clip-rule="evenodd" fill-rule="evenodd"
       height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path :d="svgIcon.path" fill="currentColor"/>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { HIconProps } from '@/manage/types/components/icon'
import { icons } from '@/manage/constants/icons'

const props = defineProps<HIconProps>()
const undefinedIcon = { viewBox: '0 0 20 20', path: '' }
const svgIcon = computed(() => icons[props.iconName] ?? undefinedIcon)

</script>
