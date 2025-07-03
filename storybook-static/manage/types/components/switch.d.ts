import { HBaseProps, HPseudoState, Position } from '../global';
import { HTextWrapperCoreProps } from './text';
import { AsyncPseudoElement } from '../abstracts/pseudo-state-wrapper';
export type HSwitchModel = boolean;
export type HSwitchState = HPseudoState;
export interface HBaseSwitchProps extends AsyncPseudoElement, HBaseProps {
    position?: Exclude<Position, 'bottom'>;
    textWrapperCoreProps?: HTextWrapperCoreProps;
    flexInlinerClassName?: string;
    outerBaseProps?: HBaseProps;
    innerBaseProps?: HBaseProps;
    label?: string;
}
export interface HSwitchProps extends AsyncPseudoElement {
    position?: Exclude<Position, 'bottom'>;
    label?: string;
}
