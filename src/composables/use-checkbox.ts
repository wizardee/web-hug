import type { HCheckboxModel, HCheckboxStatus } from '@/manage/types/components/checkbox'

export function getCheckboxStatus(modelValue: HCheckboxModel | undefined, propValue: number | string): HCheckboxStatus {
  if (Array.isArray(modelValue)) return modelValue.includes(propValue) ? 'checked' : 'unchecked'
  else return (modelValue === null || modelValue === undefined) ? 'intermediate' : modelValue ? 'checked' : 'unchecked'
}