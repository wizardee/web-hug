import { StoryObj } from '@storybook/vue3';
import { HCheckboxProps } from '../manage/types/components/checkbox';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        checkboxModel?: import('../manage/types/components/checkbox').HCheckboxModel;
    } & HCheckboxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:checkboxModel": (value: import('../manage/types/components/checkbox').HCheckboxModel) => any;
    }, string, import('vue').PublicProps, Readonly<{
        checkboxModel?: import('../manage/types/components/checkbox').HCheckboxModel;
    } & HCheckboxProps> & Readonly<{
        "onUpdate:checkboxModel"?: ((value: import('../manage/types/components/checkbox').HCheckboxModel) => any) | undefined;
    }>, {
        isDisabled: boolean;
        isCircle: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        value: {
            control: "text";
        };
        isDisabled: {
            control: "boolean";
        };
        isCircle: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithText: Story;
export declare const CircleStyle: Story;
export declare const Disabled: Story;
export declare const CheckboxGroup: Story;
export declare const MixedStates: Story;
export declare const FormExample: Story;
