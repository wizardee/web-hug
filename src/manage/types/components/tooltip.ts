import type { NPosition, NSize, Position } from '@/manage/types/global'

export interface TooltipOption {
  tooltipText: string;
  tooltipPosition: Position;
}

export interface TooltipProps {
  targetPosition: NPosition | null,
  targetSize: NSize | null
  tooltipText: string | undefined
  tooltipPosition: Position | null
}