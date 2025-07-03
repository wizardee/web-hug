import { HInputModel, HInputProps } from '../../manage/types/components/input';
type __VLS_Props = HInputProps;
declare function getUpdatedValidState(): import('../../manage').HFieldValidationState | undefined;
type __VLS_PublicProps = {
    'inputModel'?: HInputModel;
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
                readonly labelWrapperProps: import('../../manage').HTextWrapperProps;
                readonly boxInlinerBaseProps: import('../../manage').HBaseProps;
                readonly preIconWrapperProps?: import('../../manage').HIconWrapperProps | undefined;
                readonly postIconWrapperProps?: import('../../manage').HIconWrapperProps | undefined;
                readonly messageWrapperCoreProps?: import('../../manage').HTextWrapperCoreProps | undefined;
                readonly messages?: string[] | undefined;
                readonly labelPosition?: Extract<import('../../manage').Position, "top" | "left"> | undefined;
                readonly hasMessage?: boolean | undefined;
                readonly placeholder?: string | undefined;
                readonly readonly?: boolean | undefined;
                readonly label?: string | undefined;
                readonly validationOption?: import('../../manage').HFieldValidationOption | undefined;
                readonly preIconName?: import('../../manage').IconName | undefined;
                readonly postIconName?: import('../../manage').IconName | undefined;
                readonly hasAsterisk?: boolean | undefined;
                readonly size: import('../../manage').HFieldSize;
                readonly type: import('../../manage').HFieldType;
                readonly containerZIndex?: number | undefined;
                readonly contentPosition?: import('../../manage').PositionY | undefined;
                readonly isLoading?: boolean | undefined;
                readonly isDisabled?: boolean | undefined;
                readonly tooltipOption?: import('../../manage').TooltipOption | undefined;
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
                        readonly tooltipOption?: import('../../manage').TooltipOption | undefined;
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
                            $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage').HBaseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
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
                            $nextTick: typeof import('vue').nextTick;
                            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
                        } & Readonly<{}> & Omit<Readonly<import('../../manage').HBaseProps> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
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
                    $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage').HPseudoStateWrapperProps> & Readonly<{
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
                    $nextTick: typeof import('vue').nextTick;
                    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
                } & Readonly<{
                    className: string;
                    isDisabled: boolean;
                }> & Omit<Readonly<import('../../manage').HPseudoStateWrapperProps> & Readonly<{
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
            $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage').HBaseFieldProps> & Readonly<{
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
                labelPosition: Extract<import('../../manage').Position, "top" | "left">;
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
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            isDisabled: boolean;
            labelPosition: Extract<import('../../manage').Position, "top" | "left">;
            hasMessage: boolean;
            readonly: boolean;
            hasAsterisk: boolean;
        }> & Omit<Readonly<import('../../manage').HBaseFieldProps> & Readonly<{
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
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    getUpdatedValidState: typeof getUpdatedValidState;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onClickSearch: (...args: any[]) => void;
    "update:inputModel": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onOnClickSearch?: ((...args: any[]) => any) | undefined;
    "onUpdate:inputModel"?: ((value: string) => any) | undefined;
}>, {
    isDisabled: boolean;
    labelPosition: Extract<import('../../manage').Position, "top" | "left">;
    hasMessage: boolean;
    placeholder: string;
    readonly: boolean;
    debounce: number;
    isPassword: boolean;
    hasButton: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fieldRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly labelWrapperProps: import('../../manage').HTextWrapperProps;
            readonly boxInlinerBaseProps: import('../../manage').HBaseProps;
            readonly preIconWrapperProps?: import('../../manage').HIconWrapperProps | undefined;
            readonly postIconWrapperProps?: import('../../manage').HIconWrapperProps | undefined;
            readonly messageWrapperCoreProps?: import('../../manage').HTextWrapperCoreProps | undefined;
            readonly messages?: string[] | undefined;
            readonly labelPosition?: Extract<import('../../manage').Position, "top" | "left"> | undefined;
            readonly hasMessage?: boolean | undefined;
            readonly placeholder?: string | undefined;
            readonly readonly?: boolean | undefined;
            readonly label?: string | undefined;
            readonly validationOption?: import('../../manage').HFieldValidationOption | undefined;
            readonly preIconName?: import('../../manage').IconName | undefined;
            readonly postIconName?: import('../../manage').IconName | undefined;
            readonly hasAsterisk?: boolean | undefined;
            readonly size: import('../../manage').HFieldSize;
            readonly type: import('../../manage').HFieldType;
            readonly containerZIndex?: number | undefined;
            readonly contentPosition?: import('../../manage').PositionY | undefined;
            readonly isLoading?: boolean | undefined;
            readonly isDisabled?: boolean | undefined;
            readonly tooltipOption?: import('../../manage').TooltipOption | undefined;
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
                    readonly tooltipOption?: import('../../manage').TooltipOption | undefined;
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
                        $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage').HBaseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
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
                        $nextTick: typeof import('vue').nextTick;
                        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
                    } & Readonly<{}> & Omit<Readonly<import('../../manage').HBaseProps> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
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
                $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage').HPseudoStateWrapperProps> & Readonly<{
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
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                className: string;
                isDisabled: boolean;
            }> & Omit<Readonly<import('../../manage').HPseudoStateWrapperProps> & Readonly<{
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
        $options: import('vue').ComponentOptionsBase<Readonly<import('../../manage').HBaseFieldProps> & Readonly<{
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
            labelPosition: Extract<import('../../manage').Position, "top" | "left">;
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
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        isDisabled: boolean;
        labelPosition: Extract<import('../../manage').Position, "top" | "left">;
        hasMessage: boolean;
        readonly: boolean;
        hasAsterisk: boolean;
    }> & Omit<Readonly<import('../../manage').HBaseFieldProps> & Readonly<{
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
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
