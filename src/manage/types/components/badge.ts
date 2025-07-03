import type { HFlexInlinerProps } from '@/manage/types/abstracts/flex-inliner'
import type { IconName } from '@/manage/types/icon-names'
import type { SemanticTheme } from '@/manage/constants/variables'
export type HBadgeType = 'filled' | 'outlined' | 'transparent'
export type HBadgeTheme = Extract<SemanticTheme, 'primary' | 'cta' | 'error' | 'warning' | 'secondary' | 'info'>

export interface HBaseBadgeProps extends HFlexInlinerProps {
}

export interface HBadgeProps {
  type: HBadgeType;
  theme: HBadgeTheme;
  preIconName?: IconName;
  postIconName?: IconName;
  text?: string;
}