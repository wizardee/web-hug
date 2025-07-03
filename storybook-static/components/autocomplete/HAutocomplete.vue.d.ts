import { nextTick } from 'vue';
import { IconName } from '../../manage/types/icon-names';
import { HAutocompleteModel, HAutocompleteProps } from '../../manage/types/components/autocomplete';
type __VLS_Props = HAutocompleteProps;
declare function getUpdatedValidState(): import('../..').HFieldValidationState | undefined;
type __VLS_PublicProps = {
    'autocompleteModel'?: HAutocompleteModel;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'post-label'?(_: {}): any;
    };
    refs: {
        fieldRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly labelWrapperProps: import('../..').HTextWrapperProps;
                readonly boxInlinerBaseProps: import('../../manage/types/global').HBaseProps;
                readonly preIconWrapperProps?: import('../..').HIconWrapperProps | undefined;
                readonly postIconWrapperProps?: import('../..').HIconWrapperProps | undefined;
                readonly messageWrapperCoreProps?: import('../..').HTextWrapperCoreProps | undefined;
                readonly messages?: string[] | undefined;
                readonly labelPosition?: Extract<import('../../manage/types/global').Position, "top" | "left"> | undefined;
                readonly hasMessage?: boolean | undefined;
                readonly placeholder?: string | undefined;
                readonly readonly?: boolean | undefined;
                readonly label?: string | undefined;
                readonly validationOption?: import('../..').HFieldValidationOption | undefined;
                readonly preIconName?: IconName | undefined;
                readonly postIconName?: IconName | undefined;
                readonly hasAsterisk?: boolean | undefined;
                readonly size: import('../..').HFieldSize;
                readonly type: import('../..').HFieldType;
                readonly containerZIndex?: number | undefined;
                readonly contentPosition?: import('../../manage/types/global').PositionY | undefined;
                readonly isLoading?: boolean | undefined;
                readonly isDisabled?: boolean | undefined;
                readonly tooltipOption?: import('../..').TooltipOption | undefined;
                readonly componentPseudoState?: string | undefined;
                readonly className?: string | undefined;
                readonly styles?: Partial<CSSStyleDeclaration> | undefined;
                readonly onOnChangeState?: ((...args: any[]) => any) | undefined;
                readonly onOnChangeExpand?: ((...args: any[]) => any) | undefined;
                readonly onOnClickInside?: ((...args: any[]) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                boxRef: ({
                    $: import('vue').ComponentInternalInstance;
                    $data: {};
                    $props: {
                        readonly isLoading?: boolean | undefined;
                        readonly isDisabled?: boolean | undefined;
                        readonly tooltipOption?: import('../..').TooltipOption | undefined;
                        readonly componentPseudoState?: string | undefined;
                        readonly className?: string | undefined;
                        readonly styles?: Partial<CSSStyleDeclaration> | undefined;
                        readonly onOnClick?: ((...args: any[]) => any) | undefined;
                        readonly onOnChangeState?: ((...args: any[]) => any) | undefined;
                    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    } & {
                        pseudoRef: ({
                            $: import('vue').ComponentInternalInstance;
                            $data: {};
                            $props: {
                                readonly className?: string | undefined;
                                readonly styles?: Partial<CSSStyleDeclaration> | undefined;
                            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import('vue').Slot<any> | undefined;
                            }>;
                            $root: import('vue').ComponentPublicInstance | null;
                            $parent: import('vue').ComponentPublicInstance | null;
                            $host: Element | null;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: HTMLDivElement;
                            $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                                beforeCreate?: (() => void) | (() => void)[];
                                created?: (() => void) | (() => void)[];
                                beforeMount?: (() => void) | (() => void)[];
                                mounted?: (() => void) | (() => void)[];
                                beforeUpdate?: (() => void) | (() => void)[];
                                updated?: (() => void) | (() => void)[];
                                activated?: (() => void) | (() => void)[];
                                deactivated?: (() => void) | (() => void)[];
                                beforeDestroy?: (() => void) | (() => void)[];
                                beforeUnmount?: (() => void) | (() => void)[];
                                destroyed?: (() => void) | (() => void)[];
                                unmounted?: (() => void) | (() => void)[];
                                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                            };
                            $forceUpdate: () => void;
                            $nextTick: typeof nextTick;
                            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
                        } & Readonly<{}> & Omit<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
                            $slots: {
                                default?(_: {}): any;
                            };
                        }) | null;
                    };
                    $slots: Readonly<{
                        [name: string]: import('vue').Slot<any> | undefined;
                    }>;
                    $root: import('vue').ComponentPublicInstance | null;
                    $parent: import('vue').ComponentPublicInstance | null;
                    $host: Element | null;
                    $emit: ((event: "onClick", ...args: any[]) => void) & ((event: "onChangeState", ...args: any[]) => void);
                    $el: HTMLDivElement;
                    $options: import('vue').ComponentOptionsBase<Readonly<import('../..').HPseudoStateWrapperProps> & Readonly<{
                        onOnClick?: ((...args: any[]) => any) | undefined;
                        onOnChangeState?: ((...args: any[]) => any) | undefined;
                    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                        onClick: (...args: any[]) => void;
                        onChangeState: (...args: any[]) => void;
                    }, string, {
                        className: string;
                        isDisabled: boolean;
                    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                        beforeCreate?: (() => void) | (() => void)[];
                        created?: (() => void) | (() => void)[];
                        beforeMount?: (() => void) | (() => void)[];
                        mounted?: (() => void) | (() => void)[];
                        beforeUpdate?: (() => void) | (() => void)[];
                        updated?: (() => void) | (() => void)[];
                        activated?: (() => void) | (() => void)[];
                        deactivated?: (() => void) | (() => void)[];
                        beforeDestroy?: (() => void) | (() => void)[];
                        beforeUnmount?: (() => void) | (() => void)[];
                        destroyed?: (() => void) | (() => void)[];
                        unmounted?: (() => void) | (() => void)[];
                        renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                        renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                        errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof nextTick;
                    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
                } & Readonly<{
                    className: string;
                    isDisabled: boolean;
                }> & Omit<Readonly<import('../..').HPseudoStateWrapperProps> & Readonly<{
                    onOnClick?: ((...args: any[]) => any) | undefined;
                    onOnChangeState?: ((...args: any[]) => any) | undefined;
                }>, "className" | "isDisabled"> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
                    $slots: {
                        default?(_: {}): any;
                    };
                }) | null;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "onChangeState", ...args: any[]) => void) & ((event: "onChangeExpand", ...args: any[]) => void) & ((event: "onClickInside", ...args: any[]) => void);
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../..').HBaseFieldProps> & Readonly<{
                onOnChangeState?: ((...args: any[]) => any) | undefined;
                onOnChangeExpand?: ((...args: any[]) => any) | undefined;
                onOnClickInside?: ((...args: any[]) => any) | undefined;
            }>, {
                setClickInside: (state: boolean) => void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                onChangeState: (...args: any[]) => void;
                onChangeExpand: (...args: any[]) => void;
                onClickInside: (...args: any[]) => void;
            }, string, {
                isDisabled: boolean;
                labelPosition: Extract<import('../../manage/types/global').Position, "top" | "left">;
                hasMessage: boolean;
                readonly: boolean;
                hasAsterisk: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            isDisabled: boolean;
            labelPosition: Extract<import('../../manage/types/global').Position, "top" | "left">;
            hasMessage: boolean;
            readonly: boolean;
            hasAsterisk: boolean;
        }> & Omit<Readonly<import('../..').HBaseFieldProps> & Readonly<{
            onOnChangeState?: ((...args: any[]) => any) | undefined;
            onOnChangeExpand?: ((...args: any[]) => any) | undefined;
            onOnClickInside?: ((...args: any[]) => any) | undefined;
        }>, "setClickInside" | ("isDisabled" | "labelPosition" | "hasMessage" | "readonly" | "hasAsterisk")> & import('vue').ShallowUnwrapRef<{
            setClickInside: (state: boolean) => void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                'post-label'?(_: {}): any;
                'pre-most'?(_: {}): any;
                'main-slot'?(_: {}): any;
                'field-additional'?(_: {}): any;
            };
        }) | null;
        scrollContainerRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly className?: string | undefined;
                readonly styles?: Partial<CSSStyleDeclaration> | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    getUpdatedValidState: typeof getUpdatedValidState;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:autocompleteModel": (value: HAutocompleteModel) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:autocompleteModel"?: ((value: HAutocompleteModel) => any) | undefined;
}>, {
    isDisabled: boolean;
    labelPosition: Extract<import('../../manage/types/global').Position, "top" | "left">;
    hasMessage: boolean;
    placeholder: string;
    readonly: boolean;
    containerZIndex: number;
    contentPosition: import('../../manage/types/global').PositionY;
    inputDebounce: number;
    multiSelect: boolean;
    unitHeightRem: number;
    maxUnitCount: number;
    remToPxRate: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fieldRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly labelWrapperProps: import('../..').HTextWrapperProps;
            readonly boxInlinerBaseProps: import('../../manage/types/global').HBaseProps;
            readonly preIconWrapperProps?: import('../..').HIconWrapperProps | undefined;
            readonly postIconWrapperProps?: import('../..').HIconWrapperProps | undefined;
            readonly messageWrapperCoreProps?: import('../..').HTextWrapperCoreProps | undefined;
            readonly messages?: string[] | undefined;
            readonly labelPosition?: Extract<import('../../manage/types/global').Position, "top" | "left"> | undefined;
            readonly hasMessage?: boolean | undefined;
            readonly placeholder?: string | undefined;
            readonly readonly?: boolean | undefined;
            readonly label?: string | undefined;
            readonly validationOption?: import('../..').HFieldValidationOption | undefined;
            readonly preIconName?: IconName | undefined;
            readonly postIconName?: IconName | undefined;
            readonly hasAsterisk?: boolean | undefined;
            readonly size: import('../..').HFieldSize;
            readonly type: import('../..').HFieldType;
            readonly containerZIndex?: number | undefined;
            readonly contentPosition?: import('../../manage/types/global').PositionY | undefined;
            readonly isLoading?: boolean | undefined;
            readonly isDisabled?: boolean | undefined;
            readonly tooltipOption?: import('../..').TooltipOption | undefined;
            readonly componentPseudoState?: string | undefined;
            readonly className?: string | undefined;
            readonly styles?: Partial<CSSStyleDeclaration> | undefined;
            readonly onOnChangeState?: ((...args: any[]) => any) | undefined;
            readonly onOnChangeExpand?: ((...args: any[]) => any) | undefined;
            readonly onOnClickInside?: ((...args: any[]) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            boxRef: ({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: {
                    readonly isLoading?: boolean | undefined;
                    readonly isDisabled?: boolean | undefined;
                    readonly tooltipOption?: import('../..').TooltipOption | undefined;
                    readonly componentPseudoState?: string | undefined;
                    readonly className?: string | undefined;
                    readonly styles?: Partial<CSSStyleDeclaration> | undefined;
                    readonly onOnClick?: ((...args: any[]) => any) | undefined;
                    readonly onOnChangeState?: ((...args: any[]) => any) | undefined;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                } & {
                    pseudoRef: ({
                        $: import('vue').ComponentInternalInstance;
                        $data: {};
                        $props: {
                            readonly className?: string | undefined;
                            readonly styles?: Partial<CSSStyleDeclaration> | undefined;
                        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import('vue').Slot<any> | undefined;
                        }>;
                        $root: import('vue').ComponentPublicInstance | null;
                        $parent: import('vue').ComponentPublicInstance | null;
                        $host: Element | null;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: HTMLDivElement;
                        $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                            beforeCreate?: (() => void) | (() => void)[];
                            created?: (() => void) | (() => void)[];
                            beforeMount?: (() => void) | (() => void)[];
                            mounted?: (() => void) | (() => void)[];
                            beforeUpdate?: (() => void) | (() => void)[];
                            updated?: (() => void) | (() => void)[];
                            activated?: (() => void) | (() => void)[];
                            deactivated?: (() => void) | (() => void)[];
                            beforeDestroy?: (() => void) | (() => void)[];
                            beforeUnmount?: (() => void) | (() => void)[];
                            destroyed?: (() => void) | (() => void)[];
                            unmounted?: (() => void) | (() => void)[];
                            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof nextTick;
                        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
                    } & Readonly<{}> & Omit<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
                        $slots: {
                            default?(_: {}): any;
                        };
                    }) | null;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: ((event: "onClick", ...args: any[]) => void) & ((event: "onChangeState", ...args: any[]) => void);
                $el: HTMLDivElement;
                $options: import('vue').ComponentOptionsBase<Readonly<import('../..').HPseudoStateWrapperProps> & Readonly<{
                    onOnClick?: ((...args: any[]) => any) | undefined;
                    onOnChangeState?: ((...args: any[]) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    onClick: (...args: any[]) => void;
                    onChangeState: (...args: any[]) => void;
                }, string, {
                    className: string;
                    isDisabled: boolean;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                className: string;
                isDisabled: boolean;
            }> & Omit<Readonly<import('../..').HPseudoStateWrapperProps> & Readonly<{
                onOnClick?: ((...args: any[]) => any) | undefined;
                onOnChangeState?: ((...args: any[]) => any) | undefined;
            }>, "className" | "isDisabled"> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | null;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "onChangeState", ...args: any[]) => void) & ((event: "onChangeExpand", ...args: any[]) => void) & ((event: "onClickInside", ...args: any[]) => void);
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../..').HBaseFieldProps> & Readonly<{
            onOnChangeState?: ((...args: any[]) => any) | undefined;
            onOnChangeExpand?: ((...args: any[]) => any) | undefined;
            onOnClickInside?: ((...args: any[]) => any) | undefined;
        }>, {
            setClickInside: (state: boolean) => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            onChangeState: (...args: any[]) => void;
            onChangeExpand: (...args: any[]) => void;
            onClickInside: (...args: any[]) => void;
        }, string, {
            isDisabled: boolean;
            labelPosition: Extract<import('../../manage/types/global').Position, "top" | "left">;
            hasMessage: boolean;
            readonly: boolean;
            hasAsterisk: boolean;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        isDisabled: boolean;
        labelPosition: Extract<import('../../manage/types/global').Position, "top" | "left">;
        hasMessage: boolean;
        readonly: boolean;
        hasAsterisk: boolean;
    }> & Omit<Readonly<import('../..').HBaseFieldProps> & Readonly<{
        onOnChangeState?: ((...args: any[]) => any) | undefined;
        onOnChangeExpand?: ((...args: any[]) => any) | undefined;
        onOnClickInside?: ((...args: any[]) => any) | undefined;
    }>, "setClickInside" | ("isDisabled" | "labelPosition" | "hasMessage" | "readonly" | "hasAsterisk")> & import('vue').ShallowUnwrapRef<{
        setClickInside: (state: boolean) => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            'post-label'?(_: {}): any;
            'pre-most'?(_: {}): any;
            'main-slot'?(_: {}): any;
            'field-additional'?(_: {}): any;
        };
    }) | null;
    scrollContainerRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly className?: string | undefined;
            readonly styles?: Partial<CSSStyleDeclaration> | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{}> & Omit<Readonly<import('../../manage/types/global').HBaseProps> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
        };
    }) | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
