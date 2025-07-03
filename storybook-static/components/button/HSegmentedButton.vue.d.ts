import { HSegmentedButtonModel, HSegmentedButtonProps } from '../../manage/types/components/button';
type __VLS_Props = HSegmentedButtonProps;
type __VLS_PublicProps = {
    'segmentedButtonModel'?: HSegmentedButtonModel;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:segmentedButtonModel": (value: HSegmentedButtonModel) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:segmentedButtonModel"?: ((value: HSegmentedButtonModel) => any) | undefined;
}>, {
    size: import('../../manage/types/components/button').HButtonSize;
    isSingle: boolean;
    isEven: boolean;
    selectedTheme: Extract<import('../../manage/types/components/button').HButtonTheme, "primary" | "secondary">;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
