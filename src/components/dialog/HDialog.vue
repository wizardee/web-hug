<template>
  <h-base-card v-bind="baseCardProps">
    <template v-if="iconName" v-slot:header-above>
      <h-base class-name="w-full flex justify-center">
        <h-base :styles="iconContainerStyles" class-name="w-11 h-11 flex items-center rounded-2 justify-center">
          <h-icon-wrapper :color="iconColor" :icon-name="iconName" :height="iconSize" :width="iconSize" />
        </h-base>
      </h-base>
    </template>
    <template v-slot:header-pre>
      <h-empty v-if="iconName || headerPosition === 'right'" />
    </template>
    <template v-slot:header-post>
      <h-empty v-if="iconName" />
    </template>
    <template v-slot:header-below>
      <slot v-if="$slots['header-below']" name="header-below"/>
    </template>
    <template v-slot:body>
      <h-base v-if="bodyText" :styles="{ color: bodyColor }"
              class-name="w-full h-full flex justify-center h-typo-body-1-normal h-font-regular break-all overflow-y-scroll hide-scrollbar">
        {{ bodyText }}
      </h-base>
      <slot v-else name="body" />
    </template>
    <template v-slot:footer>
      <h-base class-name="w-full flex justify-end gap-2">
        <h-base v-if="declineButtonText" :class-name="declineClassName">
          <h-button :text="declineButtonText"
                    class-name="w-full"
                    justify="justify-center"
                    round="roundedSquare"
                    :size="buttonSize" theme="secondary" type="filled"
                    @on-click="emits('onDecline')"/>
        </h-base>
        <h-base :class-name="confirmClassName">
          <h-button :text="confirmButtonText" justify="justify-center"
                    class-name="w-full"
                    round="roundedSquare"
                    :size="buttonSize"
                    theme="primary" type="filled" @on-click="emits('onConfirm')"/>
        </h-base>
      </h-base>
    </template>
    <template v-slot:footer-below>
      <slot v-if="$slots['footer-below']" name="footer-below"/>
    </template>
  </h-base-card>
</template>

<script lang="ts" setup>

import HBaseCard from '@/components/card/HBaseCard.vue'
import type { HDialogProps } from '@/manage/types/components/dialog'
import { computed, type ComputedRef } from 'vue'
import HBase from '@/components/abstract/HBase.vue'
import HButton from '@/components/button/HButton.vue'
import { getSemantic } from '@/manage/constants/variables'
import type { HBaseCardProps } from '@/manage/types/components/card'
import HEmpty from '@/components/abstract/HEmpty.vue'
import HIconWrapper from '@/components/icon/HIconWrapper.vue'

const props = withDefaults(defineProps<HDialogProps>(), {
  className: '',
  isButtonDense: false,
  confirmButtonText: '확인',
  buttonSize: 'xlg',
  iconSize: '0.875rem'
})

const emits = defineEmits(['onDecline', 'onConfirm'])
const border = `1px solid ${ getSemantic('secondary', 'stroke', 'normal', 'default') }`
const backgroundColor = getSemantic('secondary', 'background', 'normal', 'default')
const baseClassName = computed(() => `h-font-bold h-typo-heading-1 rounded-2 ${ props.className }`)
const baseStyles = computed(() => ({
  ...props.styles,
  border, backgroundColor,
  boxShadow: `0px 0px 8px rgba(0, 0, 0, 0.08), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 16px 20px rgba(0, 0, 0, 0.12)`
}))

const iconContainerStyles = {
  backgroundColor: getSemantic('secondary', 'background', 'heavy', 'default')
}
const iconColor = getSemantic('secondary', 'foreground', 'strong', 'default')
const titleColor = getSemantic('secondary', 'foreground', 'normal', 'default')
const bodyColor = getSemantic('secondary', 'foreground', 'normal', 'hovered')
const declineClassName = computed(() => {
  const { isButtonDense } = props
  return `${ isButtonDense ? 'w-fit' : 'w-1/2' } flex`
})

const confirmClassName = computed(() => {
  const { isButtonDense, declineButtonText } = props
  const width = isButtonDense ? 'w-fit' : declineButtonText ? 'w-1/2' : 'w-full'
  return `${ width } flex`
})

const baseCardProps: ComputedRef<HBaseCardProps> = computed(() => {
  const { headerText } = props
  const className = baseClassName.value;
  const styles = baseStyles.value;
  return {
    className,
    styles,
    headerProps: headerText ? {
      text: headerText,
      styles: { color: titleColor },
      className: 'h-font-bold h-typo-heading-1'
    } : undefined
  }
})

</script>