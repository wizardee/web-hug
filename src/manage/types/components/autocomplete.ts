import type { LVPair } from '@/manage/types/global'
import { HContainerFieldProps } from "@/manage/types/components/field";
export type HAutocompleteModel = undefined | string[] | string | LVPair;
export interface HAutocompleteProps extends HContainerFieldProps {
  inputDebounce?: number;
}