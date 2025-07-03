import type { HBaseProps, HPseudoState, LVPair } from '@/manage/types/global'
import type { HTextWrapperCoreProps } from '@/manage/types/components/text'
import type { IconName } from '@/manage/types/icon-names'
import type { AsyncPseudoElement } from '@/manage/types/abstracts/pseudo-state-wrapper'
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