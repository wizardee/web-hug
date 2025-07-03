<template>
  <h-base ref="pseudoRef"
          :class="_class"
          :styles="styles"
          tabindex="0"
          @blur="toggle('focused',false)"
          @click="onClick"
          @focus="toggle('focused', true)"
          @mouseenter="toggle('hovered', true)"
          @mouseleave="toggle('hovered', false)"
  >
    <slot />
  </h-base>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { HPseudoStateWrapperProps } from '@/manage/types/abstracts/pseudo-state-wrapper'
import { usePseudoState } from '@/composables/use-pseudo-state'
import HBase from '@/components/abstract/HBase.vue'
import type { SemanticPseudo } from '@/manage/constants/variables'

const emits = defineEmits(['onChangeState', 'onClick'])
const props = withDefaults(defineProps<HPseudoStateWrapperProps>(), { isDisabled: false, className: '' })
const disabled = computed(() => props.isDisabled)
const pseudoRef = ref(null)


const priorities = computed(() => {
  const { componentPseudoState } = props;
  const arr = componentPseudoState ? [componentPseudoState] : []
  return {
    pressed: ['disabled', ...arr],
    hovered: ['disabled', 'pressed' , ...arr],
    focused: ['disabled', 'pressed', 'hovered', ...arr],
  }
});

const componentPseudoState = computed(() => props.componentPseudoState)

const { toggle } = usePseudoState({
  disabled,
  componentPseudoState,
  onStateChange: (state: SemanticPseudo<typeof componentPseudoState.value>) => emits('onChangeState', state),
  pseudoRef,
  priorities
})

const _class = computed(() => {
  const { className, isDisabled } = props
  const cursor = isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
  return [cursor,className]
})


const onClick = () => {
  if (!disabled.value) emits('onClick')
}

</script>