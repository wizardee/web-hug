import { HFlexInlinerProps } from '../abstracts/flex-inliner';
import { IconName } from '../icon-names';
import { SemanticTheme } from '../../constants/variables';
export type HBadgeType = 'filled' | 'outlined' | 'transparent';
export type HBadgeTheme = Extract<SemanticTheme, 'primary' | 'cta' | 'error' | 'warning' | 'secondary' | 'info'>;
export interface HBaseBadgeProps extends HFlexInlinerProps {
}
export interface HBadgeProps {
    type: HBadgeType;
    theme: HBadgeTheme;
    preIconName?: IconName;
    postIconName?: IconName;
    text?: string;
}
