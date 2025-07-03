import { camelToDashed } from './string'
import { HBaseProps, Position } from "@/manage/types/global";

export function convertStylesToString(stylePair: Partial<CSSStyleDeclaration>): string {
  return Object.entries(stylePair).map((pair: [string, any]) => `${ camelToDashed(pair[0]) }: ${ pair[1] };`).join(' ');
}

export function getStyleFromProps<T extends HBaseProps>(property: T | undefined) {
  return property && property.styles ? convertStylesToString(property.styles) : '';
}

export function getCSSVariable(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}

export function getBorderStyles(borderPositions: Position[], value: string) {
  const borderMapping: Record<Position, string> = {
    bottom: 'borderBottom',
    left: 'borderLeft',
    right: 'borderRight',
    top: 'borderTop'
  }
  
  const result: Record<string, string> = {}
  borderPositions.forEach((position) => result[borderMapping[position]] = value)
  return result as Partial<CSSStyleDeclaration>
}