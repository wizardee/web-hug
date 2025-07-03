import { ComputedRef, Ref } from 'vue';
import { HPseudoToggleableState, StatePriorities } from '../manage/types/global';
import { SemanticPseudo } from '../manage/constants/variables';
interface PseudoStateHandlers<S = string> {
    disabled: ComputedRef<boolean>;
    onStateChange: (state: SemanticPseudo<S>) => void;
    pseudoRef: Ref<HTMLElement | null>;
    priorities: ComputedRef<StatePriorities<S>>;
    componentPseudoState?: ComputedRef<SemanticPseudo<S> | undefined>;
}
export declare const usePseudoState: ({ disabled, onStateChange, pseudoRef, priorities, componentPseudoState }: PseudoStateHandlers) => {
    toggle: (stateKey: HPseudoToggleableState, state: boolean) => void;
};
export {};
