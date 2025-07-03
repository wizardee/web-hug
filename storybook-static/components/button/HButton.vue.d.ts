import { HButtonProps } from '../../manage/types/components/button';
import { Position } from '../../manage/types/global';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'pre-between'?(_: {}): any;
        'post-between'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<HButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<HButtonProps> & Readonly<{}>, {
    className: string;
    isDisabled: boolean;
    borderPositions: Position[];
    justify: import('../../manage/types/global').Justify;
    noPadding: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
