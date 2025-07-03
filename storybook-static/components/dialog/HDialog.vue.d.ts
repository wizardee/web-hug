import { HDialogProps } from '../../manage/types/components/dialog';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'header-below'?(_: {}): any;
        body?(_: {}): any;
        'footer-below'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<HDialogProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onDecline: (...args: any[]) => void;
    onConfirm: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<HDialogProps> & Readonly<{
    onOnDecline?: ((...args: any[]) => any) | undefined;
    onOnConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    className: string;
    buttonSize: import('../..').HButtonSize;
    isButtonDense: boolean;
    confirmButtonText: string;
    iconSize: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
