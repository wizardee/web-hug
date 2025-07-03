import { useMousePressed } from '@vueuse/core'
import { type ComputedRef, type Ref, watchEffect } from 'vue'
import type { HPseudoToggleableState, StatePriorities } from '@/manage/types/global'
import { ref, watch } from 'vue'
import type { SemanticPseudo } from '@/manage/constants/variables'

interface PseudoStateHandlers<S = string> {
  disabled: ComputedRef<boolean>;
  onStateChange: (state: SemanticPseudo<S>) => void;
  pseudoRef: Ref<HTMLElement | null>;
  priorities: ComputedRef<StatePriorities<S>>;
  componentPseudoState?: ComputedRef<SemanticPseudo<S> | undefined>
}

export const usePseudoState = (
  { disabled, onStateChange, pseudoRef, priorities, componentPseudoState }: PseudoStateHandlers) => {
  const pseudoState: Ref<SemanticPseudo<string>> = ref(disabled.value ? 'disabled' : componentPseudoState?.value ?? 'default')
  const toggle = (stateKey: HPseudoToggleableState, state: boolean) => {
    if (priorities.value[stateKey].indexOf(pseudoState.value) !== -1) return
    pseudoState.value = state ? stateKey : 'default'
  }
  const { pressed } = useMousePressed({ touch: false, target: pseudoRef, capture: true })
  watch(pressed, (pressState) => toggle('pressed', pressState))
  watchEffect(() => {
    pseudoState.value = disabled.value ? 'disabled' : componentPseudoState?.value ?? 'default'
  })
  watch(() => pseudoState.value, (state) => onStateChange(state))
  return { toggle }
}