import { HCheckboxModel, HCheckboxProps } from '../../manage/types/components/checkbox';
type __VLS_Props = HCheckboxProps;
type __VLS_PublicProps = {
    'checkboxModel'?: HCheckboxModel;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:checkboxModel": (value: HCheckboxModel) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:checkboxModel"?: ((value: HCheckboxModel) => any) | undefined;
}>, {
    isDisabled: boolean;
    isCircle: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
