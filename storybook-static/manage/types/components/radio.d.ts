import { HBaseProps, HPseudoState, LVPair, PositionX } from '../global';
import { HTextWrapperCoreProps } from './text';
import { AsyncPseudoElement } from '../abstracts/pseudo-state-wrapper';
export type HRadioModel = null | string | number;
export type HRadioState = HPseudoState;
export interface HBaseRadioProps extends AsyncPseudoElement, HBaseProps, LVPair {
    position?: PositionX;
    textWrapperCoreProps?: HTextWrapperCoreProps;
    flexInlinerClassName?: string;
    outerBaseProps?: HBaseProps;
    innerBaseProps?: HBaseProps;
}
export interface HRadioProps extends AsyncPseudoElement, LVPair {
    position?: PositionX;
}
