import { HLayoutCardProps } from '../../manage/types/components/card';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'header-above'?(_: {}): any;
        'header-pre'?(_: {}): any;
        'header-mid'?(_: {}): any;
        'header-post'?(_: {}): any;
        'header-below'?(_: {}): any;
        body?(_: {}): any;
        footer?(_: {}): any;
        'footer-below'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<HLayoutCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<HLayoutCardProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
