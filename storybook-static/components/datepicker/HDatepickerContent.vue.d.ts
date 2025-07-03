import { HDatepickerDateType, HDatepickerModel } from '../../manage/types/components/datepicker';
type __VLS_Props = {
    emptyDateType: HDatepickerDateType | 'ranged';
};
type __VLS_PublicProps = {
    'dateModel'?: HDatepickerModel;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onClose: (...args: any[]) => void;
    "update:dateModel": (value: HDatepickerModel) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onOnClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:dateModel"?: ((value: HDatepickerModel) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
