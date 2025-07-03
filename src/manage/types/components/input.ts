import type { HBaseFieldCoreProps, } from '@/manage/types/components/field'
import type { MaskType } from 'maska'
export type HInputModel = string

export interface HInputProps extends HBaseFieldCoreProps {
  mask?: MaskType;
  isPassword?: boolean;
  debounce?: number;
  hasButton?: boolean
}