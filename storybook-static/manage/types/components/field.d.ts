import { HBaseProps, LVPair, Position, PositionY } from '../global';
import { AsyncPseudoElement } from '../abstracts/pseudo-state-wrapper';
import { HTextWrapperCoreProps, HTextWrapperProps } from './text';
import { HIconWrapperProps } from './icon';
import { ZodArray, ZodEffects, ZodNumber, ZodString, ZodUnion } from 'zod';
import { IconName } from '../icon-names';
export type HFieldType = 'outlined' | 'filled' | 'transparent';
export type HFieldSize = 'md' | 'lg' | 'xlg';
export type HFieldValidationState = 'success' | 'error' | 'warning';
export type HFieldValidatorType = ZodString | ZodNumber | ZodEffects<any> | ZodArray<any> | ZodUnion<any>;
export type HValidationResult = {
    state: HFieldValidationState | undefined;
    messages: string[];
};
export interface HFieldRef {
    getUpdatedValidState: () => HFieldValidationState | undefined;
}
export interface HBaseFieldProps extends HBaseFieldCoreProps {
    labelWrapperProps: HTextWrapperProps;
    boxInlinerBaseProps: HBaseProps;
    preIconWrapperProps?: HIconWrapperProps;
    postIconWrapperProps?: HIconWrapperProps;
    messageWrapperCoreProps?: HTextWrapperCoreProps;
    messages?: string[];
}
export interface HBaseFieldCoreProps extends AsyncPseudoElement, HBaseProps {
    labelPosition?: Extract<Position, 'top' | 'left'>;
    hasMessage?: boolean;
    placeholder?: string;
    readonly?: boolean;
    label?: string;
    validationOption?: HFieldValidationOption;
    preIconName?: IconName;
    postIconName?: IconName;
    hasAsterisk?: boolean;
    size: HFieldSize;
    type: HFieldType;
    containerZIndex?: number;
    contentPosition?: PositionY;
}
export interface HContainerFieldProps extends HBaseFieldCoreProps {
    multiSelect?: boolean;
    items: LVPair[];
    unitHeightRem?: number;
    maxUnitCount?: number;
    remToPxRate?: number;
}
export interface HFieldValidationOption {
    validator: HFieldValidatorType;
    warningSchemaList?: ZodEffects<any>[];
    validationStateList?: HFieldValidationState[];
}
