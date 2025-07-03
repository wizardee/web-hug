import type { HIconWrapperProps } from '@/manage/types/components/icon'
import type { FlexDirection, HBaseProps } from '@/manage/types/global'
import type { HTextWrapperProps } from '@/manage/types/components/text'

export interface HFlexInlinerProps extends HBaseProps {
  flexDirection?: FlexDirection;
  flexWrap?: boolean;
  preIconWrapperProps?: HIconWrapperProps;
  textWrapperProps?: HTextWrapperProps;
  postIconWrapperProps?: HIconWrapperProps;
}