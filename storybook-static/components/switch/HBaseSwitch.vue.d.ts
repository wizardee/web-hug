import { HBaseSwitchProps, HSwitchModel } from '../../manage/types/components/switch';
type __VLS_Props = HBaseSwitchProps;
type __VLS_PublicProps = {
    'switchModel'?: HSwitchModel;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:switchModel": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:switchModel"?: ((value: boolean) => any) | undefined;
}>, {
    position: Exclude<import('../..').Position, "bottom">;
    isDisabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
