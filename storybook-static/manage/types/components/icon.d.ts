import { Size, SVGIcon } from '../global';
import { IconName } from '../icon-names';
export type IconsPair = {
    [icon in IconName]?: SVGIcon;
};
export interface HIconProps {
    iconName: IconName;
}
export interface HIconWrapperProps extends HIconProps, Size {
    padding?: string;
    color?: string;
    className?: string;
}
