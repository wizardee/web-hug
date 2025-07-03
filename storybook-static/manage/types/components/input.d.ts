import { HBaseFieldCoreProps } from './field';
import { MaskType } from 'maska';
export type HInputModel = string;
export interface HInputProps extends HBaseFieldCoreProps {
    mask?: MaskType;
    isPassword?: boolean;
    debounce?: number;
    hasButton?: boolean;
}
