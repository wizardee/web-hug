import { HTextWrapperProps } from './text';
import { HBaseProps, Position } from '../global';
export interface HBaseCardProps extends HBaseProps {
    headerProps?: HTextWrapperProps;
}
export interface HLayoutCardProps extends HBaseCardProps {
    borderPositions?: Position[];
}
export interface HItemCardProps extends HBaseCardProps {
}
