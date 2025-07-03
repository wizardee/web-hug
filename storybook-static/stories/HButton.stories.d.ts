import { StoryObj } from '@storybook/vue3';
import { HButtonProps } from '../manage/types/components/button';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<HButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            className: string;
            isDisabled: boolean;
            borderPositions: import('..').Position[];
            justify: import('..').Justify;
            noPadding: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<HButtonProps> & Readonly<{}>, {}, {}, {}, {}, {
            className: string;
            isDisabled: boolean;
            borderPositions: import('..').Position[];
            justify: import('..').Justify;
            noPadding: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<HButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        className: string;
        isDisabled: boolean;
        borderPositions: import('..').Position[];
        justify: import('..').Justify;
        noPadding: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            'pre-between'?(_: {}): any;
            'post-between'?(_: {}): any;
        };
    });
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        theme: {
            control: "select";
            options: string[];
        };
        type: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        round: {
            control: "select";
            options: string[];
        };
        componentPseudoState: {
            control: "select";
            options: string[];
        };
        text: {
            control: "text";
        };
        preIconName: {
            control: "text";
        };
        postIconName: {
            control: "text";
        };
        isDisabled: {
            control: "boolean";
        };
        noPadding: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Outlined: Story;
export declare const WithIcons: Story;
export declare const Sizes: Story;
export declare const Disabled: Story;
