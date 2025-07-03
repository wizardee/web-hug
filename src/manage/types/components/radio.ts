import type { HBaseProps, HPseudoState, LVPair, PositionX } from '@/manage/types/global'
import type { HTextWrapperCoreProps } from '@/manage/types/components/text'
import type { AsyncPseudoElement } from '@/manage/types/abstracts/pseudo-state-wrapper'

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
  position?: PositionX
}