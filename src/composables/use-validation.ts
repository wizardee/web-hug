import { type ZodEffects, ZodTypeAny } from 'zod'
import type {
  HFieldRef,
  HFieldValidationOption,
  HFieldValidationState,
  HValidationResult
} from '@/manage/types/components/field'
import type { Ref } from 'vue'

// https://github.com/colinhacks/zod/discussions/2009
export const getWarnings = (target: string, warnSchemaList: ZodEffects<ZodTypeAny>[]) => {
  return warnSchemaList.map(schema => {
    const result = schema.safeParse(target)
    return result.success ? result.data : null
  }).filter(Boolean)
}


export const useValidation = (validationOption: HFieldValidationOption | undefined, target: any): HValidationResult => {
  if (!validationOption) return { state: undefined, messages: [] }
  const { validator, warningSchemaList = [], validationStateList = [] } = validationOption
  const warnings = getWarnings(target, warningSchemaList)
  const parse = validator.safeParse(target)
  const { success, error } = parse
  const hasType = (type: HFieldValidationState) => validationStateList.indexOf(type) !== -1
  const getState = (type: HFieldValidationState) => (hasType(type) ? type : undefined) as HFieldValidationState | undefined
  
  if (!success) return { state: getState('error'), messages: hasType('error') ? error!.issues.map(e => e.message) : [] }
  else if (warnings.length !== 0) return { state: getState('warning'), messages: hasType('warning') ? warnings : [] }
  else return { state: getState('success'), messages: hasType('success') ? ['올바른 입력'] : []}
}


export const useValidationAll = (fieldRefs: Ref<HFieldRef | undefined>[], callback: () => void ) => {
  const validList = fieldRefs.map(ref => ref.value!.getUpdatedValidState());
  const isValidate = validList.every(valid => valid !== 'error');
  if(isValidate) callback()
}
