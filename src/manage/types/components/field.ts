import type { HBaseProps, LVPair, Position, PositionY } from '@/manage/types/global'
import type { AsyncPseudoElement } from '@/manage/types/abstracts/pseudo-state-wrapper'
import type { HTextWrapperCoreProps, HTextWrapperProps } from '@/manage/types/components/text'
import type { HIconWrapperProps } from '@/manage/types/components/icon'
import { ZodArray, type ZodEffects, ZodNumber, type ZodString, ZodUnion } from 'zod'
import type { IconName } from '@/manage/types/icon-names'

export type HFieldType = 'outlined' | 'filled' | 'transparent'
export type HFieldSize = 'md' | 'lg' | 'xlg';
export type HFieldValidationState = 'success' | 'error' | 'warning'
export type HFieldValidatorType = ZodString | ZodNumber | ZodEffects<any> | ZodArray<any> | ZodUnion<any>;
export type HValidationResult = {
  state: HFieldValidationState | undefined;
  messages: string[];
};

export interface HFieldRef {
  getUpdatedValidState: () => HFieldValidationState | undefined
}


export interface HBaseFieldProps extends HBaseFieldCoreProps {
  labelWrapperProps: HTextWrapperProps;
  boxInlinerBaseProps: HBaseProps;
  preIconWrapperProps?: HIconWrapperProps;
  postIconWrapperProps?: HIconWrapperProps;
  messageWrapperCoreProps?: HTextWrapperCoreProps;
  messages?: string[]
}

export interface HBaseFieldCoreProps extends AsyncPseudoElement, HBaseProps {
  labelPosition?: Extract<Position, 'top' | 'left'>,
  hasMessage?: boolean;
  placeholder?: string;
  readonly?: boolean;
  label?: string;
  validationOption?: HFieldValidationOption
  preIconName?: IconName;
  postIconName?: IconName;
  hasAsterisk?: boolean;
  size: HFieldSize;
  type: HFieldType;
  containerZIndex?: number
  contentPosition?: PositionY;
}

export interface HContainerFieldProps extends HBaseFieldCoreProps {
  multiSelect?: boolean;
  items: LVPair[];
  unitHeightRem?: number; // rem height over 0
  maxUnitCount?: number;
  remToPxRate?: number;
}


export interface HFieldValidationOption {
  validator: HFieldValidatorType; // 추가될 수 있음
  warningSchemaList?: ZodEffects<any>[]; // 경고 목록
  validationStateList?: HFieldValidationState[]; // state를 나타낼 목록
}

