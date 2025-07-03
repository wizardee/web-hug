import { ComputedRef, MaybeRef, ModelRef, Ref } from 'vue';
import { HBaseFieldCoreProps, HBaseFieldProps, HFieldValidationState } from '../manage/types/components/field';
export declare function getFieldModel<T extends HBaseFieldCoreProps>(props: T, model: ModelRef<any>): {
    fieldState: Ref<string, string>;
    validState: Ref<HFieldValidationState | undefined, HFieldValidationState | undefined>;
    messages: Ref<string[], string[]>;
    validate: () => void;
};
export declare function getFieldStyle<T extends HBaseFieldCoreProps>(fieldState: Ref<string>, validState: Ref<HFieldValidationState | undefined>, messages: Ref<string[]>, coreProps: MaybeRef<T>, hasButton?: boolean): ComputedRef<HBaseFieldProps>;
