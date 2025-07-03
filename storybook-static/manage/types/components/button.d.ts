import { AsyncPseudoElement, HPseudoStateWrapperProps } from '../abstracts/pseudo-state-wrapper';
import { HFlexInlinerProps } from '../abstracts/flex-inliner';
import { HPseudoState, Justify, LVPair, Position } from '../global';
import { IconName } from '../icon-names';
import { Component } from 'vue';
export type HButtonSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
export type HButtonTheme = 'primary' | 'secondary' | 'cta' | 'link' | 'error' | 'warning';
export type HButtonType = 'filled' | 'outlined' | 'transparent';
export type HButtonRound = 'circle' | 'square' | 'roundedSquare' | 'roundedBottom' | 'roundedTop' | 'roundedLeft' | 'roundedRight';
export type HButtonState = HPseudoState | HButtonComponentPseudoState;
export type HButtonComponentPseudoState = 'selected';
export type HSegmentedButtonModel = null | string | number | (string | number)[];
export interface HBaseButtonProps extends HPseudoStateWrapperProps {
    flexInlinerProps: HFlexInlinerProps;
}
export interface HButtonProps extends AsyncPseudoElement {
    size: HButtonSize;
    borderPositions?: Position[];
    round: HButtonRound;
    theme: HButtonTheme;
    type: HButtonType;
    text?: string;
    preIconName?: IconName;
    postIconName?: IconName;
    className?: string;
    justify?: Justify;
    noPadding?: boolean;
}
export interface HSegmentedButtonItem extends LVPair {
    preComponent?: Component;
    postComponent?: Component;
}
export interface HSegmentedButtonProps {
    isSingle?: boolean;
    disabledValues?: string[];
    size?: HButtonSize;
    buttons: HSegmentedButtonItem[];
    isEven?: boolean;
    selectedTheme?: Extract<HButtonTheme, 'primary' | 'secondary'>;
}
