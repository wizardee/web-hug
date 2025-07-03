import type { HBaseProps, PositionX } from '@/manage/types/global'
import type { IconName } from '@/manage/types/icon-names'
import { HButtonSize } from "@/manage";

export interface HDialogProps extends HBaseProps {
  headerText?: string;
  headerPosition?: PositionX;
  buttonSize?: HButtonSize,
  iconName?: IconName;
  bodyText?: string;
  isButtonDense?: boolean;
  declineButtonText?: string;
  confirmButtonText?: string;
  iconSize?: string;
}