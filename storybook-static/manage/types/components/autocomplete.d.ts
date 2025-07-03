import { LVPair } from '../global';
import { HContainerFieldProps } from './field';
export type HAutocompleteModel = undefined | string[] | string | LVPair;
export interface HAutocompleteProps extends HContainerFieldProps {
    inputDebounce?: number;
}
