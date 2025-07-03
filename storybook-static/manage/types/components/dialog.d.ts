import { HBaseProps, PositionX } from '../global';
import { IconName } from '../icon-names';
import { HButtonSize } from '../..';
export interface HDialogProps extends HBaseProps {
    headerText?: string;
    headerPosition?: PositionX;
    buttonSize?: HButtonSize;
    iconName?: IconName;
    bodyText?: string;
    isButtonDense?: boolean;
    declineButtonText?: string;
    confirmButtonText?: string;
    iconSize?: string;
}
