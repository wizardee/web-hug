import { SemanticPseudo } from '../constants/variables';
export type HPseudoState = 'default' | 'disabled' | 'pressed' | 'hovered' | 'focused';
export type HPseudoToggleableState = Exclude<HPseudoState, 'default' | 'disabled'>;
export type StatePriorities<S> = Record<HPseudoToggleableState, SemanticPseudo<S>[]>;
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type PositionX = 'left' | 'right';
export type PositionY = 'top' | 'bottom';
export type Position = PositionX | PositionY;
export type Justify = 'justify-center' | 'justify-between' | 'justify-start' | 'justify-end';
export interface NPosition {
    x: number;
    y: number;
}
export interface NSize {
    width: number;
    height: number;
}
export interface Size {
    width: string;
    height: string;
}
export interface HBaseProps {
    className?: string;
    styles?: Partial<CSSStyleDeclaration>;
}
export interface LVPair {
    label: string | number;
    value: string | number;
}
export interface SVGIcon {
    path: string;
    viewBox?: string;
}
export type Rectangle = {
    leftTop: NPosition;
    rightBottom: NPosition;
};
