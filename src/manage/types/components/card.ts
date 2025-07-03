import type { HTextWrapperProps } from '@/manage/types/components/text'
import type { HBaseProps, Position } from '@/manage/types/global'

export interface HBaseCardProps extends HBaseProps {
  headerProps?: HTextWrapperProps;
}

export interface HLayoutCardProps extends HBaseCardProps {
  borderPositions?: Position[]
}

export interface HItemCardProps extends HBaseCardProps {}