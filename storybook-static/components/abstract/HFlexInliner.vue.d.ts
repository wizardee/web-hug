import { HFlexInlinerProps } from '../../manage/types/abstracts/flex-inliner';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'pre-most'?(_: {}): any;
        'pre-between'?(_: {}): any;
        'main-slot'?(_: {}): any;
        'post-between'?(_: {}): any;
        'post-most'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<HFlexInlinerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<HFlexInlinerProps> & Readonly<{}>, {
    flexDirection: import('../..').FlexDirection;
    flexWrap: boolean;
    className: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
