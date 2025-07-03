import type { HBaseProps } from '@/manage/types/global'
import type { TooltipOption } from '@/manage/types/components/tooltip'
import type { SemanticPseudo } from '@/manage/constants/variables'

export interface HPseudoStateWrapperProps extends AsyncPseudoElement, HBaseProps {
}

export interface AsyncPseudoElement<S = string> {
  isLoading?: boolean;
  isDisabled?: boolean;
  tooltipOption?: TooltipOption;
  componentPseudoState?: SemanticPseudo<S>
}