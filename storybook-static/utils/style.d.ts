import { HBaseProps, Position } from '../manage/types/global';
export declare function convertStylesToString(stylePair: Partial<CSSStyleDeclaration>): string;
export declare function getStyleFromProps<T extends HBaseProps>(property: T | undefined): string;
export declare function getCSSVariable(name: string): string;
export declare function getBorderStyles(borderPositions: Position[], value: string): Partial<CSSStyleDeclaration>;
