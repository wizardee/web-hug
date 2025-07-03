import { NPosition, NSize, Position } from '../global';
export interface TooltipOption {
    tooltipText: string;
    tooltipPosition: Position;
}
export interface TooltipProps {
    targetPosition: NPosition | null;
    targetSize: NSize | null;
    tooltipText: string | undefined;
    tooltipPosition: Position | null;
}
