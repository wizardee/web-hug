import { ZodEffects, ZodTypeAny } from 'zod';
import { HFieldRef, HFieldValidationOption, HValidationResult } from '../manage/types/components/field';
import { Ref } from 'vue';
export declare const getWarnings: (target: string, warnSchemaList: ZodEffects<ZodTypeAny>[]) => any[];
export declare const useValidation: (validationOption: HFieldValidationOption | undefined, target: any) => HValidationResult;
export declare const useValidationAll: (fieldRefs: Ref<HFieldRef | undefined>[], callback: () => void) => void;
