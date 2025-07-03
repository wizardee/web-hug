import { HBaseRadioProps, HRadioModel } from '../../manage/types/components/radio';
type __VLS_Props = HBaseRadioProps;
type __VLS_PublicProps = {
    'radioModel'?: HRadioModel;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:radioModel": (value: HRadioModel) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:radioModel"?: ((value: HRadioModel) => any) | undefined;
}>, {
    position: import('../..').PositionX;
    isDisabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
