import { HIconWrapperProps } from '../components/icon';
import { FlexDirection, HBaseProps } from '../global';
import { HTextWrapperProps } from '../components/text';
export interface HFlexInlinerProps extends HBaseProps {
    flexDirection?: FlexDirection;
    flexWrap?: boolean;
    preIconWrapperProps?: HIconWrapperProps;
    textWrapperProps?: HTextWrapperProps;
    postIconWrapperProps?: HIconWrapperProps;
}
