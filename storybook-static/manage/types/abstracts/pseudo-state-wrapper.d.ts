import { HBaseProps } from '../global';
import { TooltipOption } from '../components/tooltip';
import { SemanticPseudo } from '../../constants/variables';
export interface HPseudoStateWrapperProps extends AsyncPseudoElement, HBaseProps {
}
export interface AsyncPseudoElement<S = string> {
    isLoading?: boolean;
    isDisabled?: boolean;
    tooltipOption?: TooltipOption;
    componentPseudoState?: SemanticPseudo<S>;
}
