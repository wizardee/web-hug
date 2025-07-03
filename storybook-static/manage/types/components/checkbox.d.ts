import { HBaseProps, HPseudoState, LVPair } from '../global';
import { HTextWrapperCoreProps } from './text';
import { IconName } from '../icon-names';
import { AsyncPseudoElement } from '../abstracts/pseudo-state-wrapper';
export type HCheckboxModel = null | boolean | (string | number)[];
export type HCheckboxState = HPseudoState;
export type HCheckboxStatus = 'checked' | 'unchecked' | 'intermediate';
export interface HBaseCheckboxProps extends AsyncPseudoElement, HBaseProps, LVPair {
    isCircle?: boolean;
    textWrapperCoreProps?: HTextWrapperCoreProps;
    flexInlinerClassName?: string;
    boxBaseProps?: HBaseProps;
    checkedIconName?: IconName;
    uncheckedIconName?: IconName;
    intermediateIconName?: IconName;
}
export interface HCheckboxProps extends AsyncPseudoElement, HBaseProps, LVPair {
    isCircle?: boolean;
}
