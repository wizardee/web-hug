import type { Size, SVGIcon } from '@/manage/types/global'
import type { IconName } from '@/manage/types/icon-names'

export type IconsPair = {
  [icon in IconName]?: SVGIcon;
}

export interface HIconProps {
  iconName: IconName;
}


export interface HIconWrapperProps extends HIconProps, Size {
  padding?: string;
  color?: string;
  className?: string;
}