import { HBaseProps, PositionX } from '../global';
import { HIconProps, HIconWrapperProps } from './icon';
import { HComponentSize } from '../../constants/variables';
export interface HTextWrapperProps extends HTextWrapperCoreProps {
    text: string | number;
}
export interface HTextWrapperCoreProps extends HBaseProps {
}
export interface HBaseTextDisplayProps extends HBaseTextDisplayCoreProps {
    iconWrapperProps?: HIconWrapperProps;
    labelProps?: HTextWrapperProps;
    primaryProps?: HTextWrapperProps;
    descriptionProps?: HTextWrapperProps;
    captionProps?: HTextWrapperProps;
}
export interface HBaseTextDisplayCoreProps {
    position?: 'left' | 'center';
    iconPosition?: PositionX;
    textCenter?: boolean;
}
export type HTextDisplaySize = Exclude<HComponentSize, 'xsm'>;
export interface HTextDisplayProps extends HBaseTextDisplayCoreProps, HTextDisplayPropsText {
    size: HTextDisplaySize;
    iconProps?: HIconProps;
}
export interface HTextDisplayPropsText {
    label?: string;
    primary?: string;
    description?: string;
    caption?: string;
}
