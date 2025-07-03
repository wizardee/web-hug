import type { HBaseProps, HPseudoState, Position } from '@/manage/types/global'
import type { HTextWrapperCoreProps } from '@/manage/types/components/text'
import type { AsyncPseudoElement } from '@/manage/types/abstracts/pseudo-state-wrapper'
export type HSwitchModel = boolean;
export type HSwitchState = HPseudoState;
export interface HBaseSwitchProps extends AsyncPseudoElement, HBaseProps {
  position?: Exclude<Position, 'bottom'>
  textWrapperCoreProps?: HTextWrapperCoreProps;
  flexInlinerClassName?: string;
  outerBaseProps?: HBaseProps;
  innerBaseProps?: HBaseProps;
  label?: string;
}

export interface HSwitchProps extends AsyncPseudoElement {
  position?: Exclude<Position, 'bottom'>,
  label?: string;
}