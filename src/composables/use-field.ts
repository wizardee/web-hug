import { computed, type ComputedRef, isRef, MaybeRef, type ModelRef, type Ref, ref } from 'vue'
import { useValidation } from '@/composables/use-validation'
import type {
  HBaseFieldCoreProps, HBaseFieldProps,
  HFieldSize,
  HFieldValidationState
} from '@/manage/types/components/field'
import { getSemantic, type SemanticTheme } from '@/manage/constants/variables'
import { HTextWrapperProps } from '@/manage/types/components/text'

export function getFieldModel<T extends HBaseFieldCoreProps>(props: T, model: ModelRef<any>) {
  const fieldState = ref(props.isDisabled ? 'disabled' : props.readonly ? 'readonly' : 'default')
  const validState: Ref<HFieldValidationState | undefined> = ref(undefined)
  const messages: Ref<string[]> = ref([])
  
  function validate() {
    const { validationOption, hasMessage } = props
    if (!validationOption) return
    const target = model.value
    const validation = useValidation(validationOption, target)
    validState.value = validation.state
    messages.value = hasMessage ? validation.messages : []
  }
  
  return {
    fieldState,
    validState,
    messages,
    validate
  }
}

const boxHeightMap: Record<HFieldSize, string> = { xlg: '2.5rem', lg: '2.25rem', md: '2rem' }

const validTheme: Record<HFieldValidationState, SemanticTheme> = {
  error: 'error',
  success: 'info',
  warning: 'warning'
}

const labelMap: Record<HFieldSize, string> = {
  xlg: 'h-typo-body-2-normal h-font-regular',
  lg: 'h-typo-body-2-normal h-font-regular',
  md: 'h-typo-label-1-normal h-font-regular'
}

export function getFieldStyle<T extends HBaseFieldCoreProps>(fieldState: Ref<string>, validState: Ref<HFieldValidationState | undefined>, messages: Ref<string[]>, coreProps: MaybeRef<T>, hasButton = false) {
  const props = isRef(coreProps) ? coreProps : ref(coreProps);
  const labelWrapperProps: ComputedRef<HTextWrapperProps> = computed(() => {
    const { size, label } = props.value
    const className = `${ labelMap[size as HFieldSize] } items-center flex`
    const state = fieldState.value === 'disabled' ? 'disabled' : 'default'
    const color = getSemantic('secondary', 'foreground', 'normal', state)
    return { className, styles: { color }, text: label ?? '' }
  })
  
  const boxInlinerBaseProps = computed(() => {
    const state = fieldState.value
    const valid = validState.value
    const { size, type } = props.value
    const height = boxHeightMap[size as HFieldSize]
    const isReadonly = state === 'readonly'
    const color = valid ? getSemantic('secondary', 'foreground', 'normal', 'default') :
      getSemantic('secondary', 'foreground', isReadonly ? 'normal' : 'inverse', isReadonly ? 'default' : state)
    const borderThickness = type === 'outlined' ? '1px' : '0'
    const borderColor = valid ? getSemantic(validTheme[valid], 'stroke', 'normal', 'default') :
      getSemantic('secondary', 'stroke', 'normal', isReadonly ? 'default' : state)
    const border = `${ borderThickness } solid ${ borderColor }`
    const font = labelMap[size as HFieldSize]
    const backgroundColor = type === 'filled' ?
      getSemantic('secondary', 'background', 'strong', state === 'disabled' ? 'disabled' : state) : 'transparent'
    const padding = '0.5rem'
    const gap = '0.5rem'
    return {
      className: `rounded-1 ${ font }`,
      styles: { height, color, border, backgroundColor, paddingLeft: padding, paddingRight: hasButton ? 0: padding, gap }
    }
  })
  
  const iconWrapperProps = computed(() => {
    const size = '1.25rem'
    const valid = validState.value
    const state = fieldState.value === 'disabled' ? 'disabled' : 'default'
    const color = valid ? getSemantic('secondary', 'foreground', 'normal', 'default') :
      getSemantic('secondary', 'foreground', 'strong', state)
    return { width: size, height: size, color }
  })
  
  const preIconWrapperProps = computed(() => {
    const { preIconName } = props.value
    return !preIconName ? undefined : { ...iconWrapperProps.value, iconName: preIconName }
  })
  const postIconWrapperProps = computed(() => {
    const { postIconName } = props.value
    return !postIconName ? undefined : { ...iconWrapperProps.value, iconName: postIconName }
  })
  
  
  const messageWrapperCoreProps = computed(() => {
    const valid = validState.value
    const className = 'h-typo-label-1-normal h-font-regular'
    const color = valid ? getSemantic(validTheme[valid], 'foreground', 'normal', 'default') : ''
    return { className, styles: { color } }
  })
  
  return computed(() => ({
    ...props.value,
    labelWrapperProps: labelWrapperProps.value,
    boxInlinerBaseProps: boxInlinerBaseProps.value,
    preIconWrapperProps: preIconWrapperProps.value,
    postIconWrapperProps: postIconWrapperProps.value,
    messageWrapperCoreProps: messageWrapperCoreProps.value,
    messages: messages.value,
  })) as ComputedRef<HBaseFieldProps>
  
}