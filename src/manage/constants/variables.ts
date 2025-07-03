import { getCSSVariable } from '@/utils/style'
import type { HPseudoState } from '@/manage/types/global'

export const VAR_PREFIX = '--h'
export const VAR_DIVIDER = '-'
export type HComponentSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg'
export type SemanticTheme =
  'primary'
  | 'secondary'
  | 'cta'
  | 'link'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'positive'
  | 'info'
  | 'white'
  | 'black'
export type SemanticTarget = 'global' | 'background' | 'foreground' | 'stroke'
export type SemanticLevel = 'global' | 'normal' | 'strong' | 'heavy' | 'inverse'
export type SemanticPseudo<T = never> = HPseudoState | T;

export function getHeightVar(height: HComponentSize) {
  return `var(--h-sizing-height-${ height })`
}

function createCSSVariable<T>(category: string, theme: SemanticTheme, target: SemanticTarget, level: SemanticLevel, pseudo: SemanticPseudo<T>) {
  const varName = [VAR_PREFIX, category, theme, target, level, pseudo].join(VAR_DIVIDER)
  const cssVariable = getCSSVariable(varName)
  
  if (!cssVariable) return ''
  return varName
}


export function getSemantic<T = never>(theme: SemanticTheme, target: SemanticTarget, level: SemanticLevel, pseudo: SemanticPseudo<T>, getVar = true) {
  
  const defaultValues: [SemanticTarget, SemanticLevel, SemanticPseudo<T>] = ['global', 'global', 'default']
  const args: [SemanticTarget, SemanticLevel, SemanticPseudo<T>] = [target, level, pseudo]
  const length = defaultValues.length
  for (let i = 0; i < Math.pow(2, length); i += 1) {
    const binaryFlag = i.toString(2).padStart(length, '0') // Convert to binary
    const [currentTarget, currentLevel, currentPseudo]
      = args.map((value, index) => binaryFlag[index] === '1' ? defaultValues[index] : value)
    
    const cssVariable = createCSSVariable<T>('semantic', theme, currentTarget as SemanticTarget, currentLevel as SemanticLevel, currentPseudo as SemanticPseudo)
    if (cssVariable) {
      return getVar ? `var(${ cssVariable })` : cssVariable
    }
  }
  return ''
}