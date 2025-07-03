<template>
  <h-base-field ref="fieldRef" v-bind="baseFieldProps"
                @on-change-expand="expand"
                @on-click-inside="onClickInside"
                @on-change-state="state => fieldState = state">
    <template v-slot:post-label>
      <slot name="post-label" />
    </template>
    <template v-slot:main-slot>
      <template v-if="fieldMode === 'input'">
        <h-base :class-name="inputContainerClass">
          <form @submit.prevent novalidate>
            <input v-maska="maskOptions" :placeholder="placeholder" tabindex="1"
                   :readonly="isReadonly" type="text" :value="inputKeyword"
                   autocomplete="off" @input="updateTypedText" />
          </form>
        </h-base>
      </template>
      <template v-else>
        <h-base v-if="multiSelect" :class-name="inputContainerClass">
          <template v-if="((model ?? []) as string[]).length">
            <h-base class-name="flex gap-2">
              <h-button v-if="(model as string[]).length === props.items.length" :text="`${filteredItems[0].label}`" post-icon-name="icons_close_close" round="circle" size="xsm"
                        theme="secondary" type="filled" @on-click="clearAll" />
              <template v-else>
                <h-button v-for="(item, index) in model as string[]" :text="chipText(item)" :key="index" post-icon-name="icons_close_close" round="circle" size="xsm"
                          theme="secondary" type="filled"  @on-click="clearItem(item)"/>
              </template>
            </h-base>
          </template>
          <h-text-wrapper v-else :text="placeholder" :styles="{ opacity: '0.5' }" />
        </h-base>
        <h-text-wrapper v-else :class-name="inputContainerClass" :text="textLabel ?? placeholder" :styles="{ opacity: !textLabel ? '0.5' : '1' }" />
      </template>
    </template>
    <template v-slot:field-additional>
      <h-base v-if="openSlot && fieldMode === 'input'" :data-content-position="contentPosition" ref="scrollContainerRef"
              class-name="content-container box-shadow-base w-full rounded-1 absolute overflow-y-auto" :styles="scrollWrapperStyles">
        <h-base class-name="flex flex-col" :styles="scrollContainerStyles">
          <template v-for="(item, index) in displayedItems" :key="index">
            <h-flex-inliner class-name="flex-inliner-item w-full flex items-center h-font-regular h-typo-label-1-normal" :data-readonly="isReadonly" :styles="scrollItemStyles">
              <template v-slot:pre-most>
                <template v-if="multiSelect">
                  <h-checkbox v-if="index === 0 && item.value === ''" v-model:checkbox-model="totalModel" :label="item.label" :value="item.value" class-name="h-full w-full flex flex-col px-1 justify-center"/>
                  <h-checkbox v-else v-model:checkbox-model="model as HCheckboxModel" :label="item.label" :value="item.value" class-name="h-full w-full flex flex-col px-1 justify-center" />
                </template>
                <h-flex-inliner v-else class-name="w-full flex px-2 gap-2 items-center flex-inliner-item-inner h-full" @click="select(item)">
                  <template v-slot:pre-most>
                    <h-icon-wrapper v-if="item.value === (model as LVPair)?.value" height="1rem" icon-name="icons_checkmark_checkmark" width="1rem" />
                    <h-base v-else class-name="flex-none w-4 h-4" />
                  </template>
                  <template v-slot:main-slot>
                    <h-text-wrapper :text="item.label" />
                  </template>
                </h-flex-inliner>
              </template>
            </h-flex-inliner>
          </template>
        </h-base>
      </h-base>
    </template>
  </h-base-field>
</template>

<script lang="ts" setup>
import HBase from '@/components/abstract/HBase.vue'
import { computed, nextTick, ref, watch } from 'vue'
import type { IconName } from '@/manage/types/icon-names'
import HCheckbox from '@/components/checkbox/HCheckbox.vue'
import HFlexInliner from '@/components/abstract/HFlexInliner.vue'
import HTextWrapper from '@/components/text/HTextWrapper.vue'
import HIconWrapper from '@/components/icon/HIconWrapper.vue'
import type { HCheckboxModel } from '@/manage/types/components/checkbox'
import type { LVPair } from '@/manage/types/global'
import HBaseField from '@/components/field/HBaseField.vue'
import { getFieldModel, getFieldStyle } from '@/composables/use-field'
import HButton from '@/components/button/HButton.vue'
import { HAutocompleteModel, HAutocompleteProps } from '@/manage/types/components/autocomplete'
import { vMaska } from 'maska/vue'
import { useSingleDebounced } from '@/composables/use-single-debounced'
import { klona } from 'klona'
import { useDebounceFn, useScroll } from "@vueuse/core";

interface FieldRef {
  setClickInside: (state: boolean) => void;
}

const props = withDefaults(defineProps<HAutocompleteProps>(), {
  labelPosition: 'left',
  hasMessage: false,
  placeholder: '선택하세요',
  readonly: false,
  isDisabled: false,
  multiSelect: false,
  contentPosition: 'bottom',
  inputDebounce: 100,
  unitHeightRem: 2.25,
  maxUnitCount: 5,
  remToPxRate: 16,
  containerZIndex: 90,
})

const totalItem = { label: '전체', value: '' }
const totalItems = computed(() => props.multiSelect && props.items.length > 0 ? [totalItem, ...props.items] : props.items)

const inputKeyword = ref('')
const fieldMode = ref<'input' | 'select'>('select')
const openSlot = ref(false)

const filteredItems = computed(() => {
  const cloned = klona(totalItems.value)
  return cloned.filter(item => {
    const fieldCondition = fieldMode.value === 'input' && inputKeyword.value === '' ? item.label !== '' : true
    const inputCondition = `${item.label ?? ''}`.toLowerCase().includes(inputKeyword.value.toLowerCase())
    return fieldCondition && inputCondition
  })
})

const scrollContainerRef = ref();
const { y } = useScroll(scrollContainerRef)
watch(y, (v) => {
  scrollTop.value = v;
  const rem = scrollTop.value / props.remToPxRate
  firstVisibleItemIndex.value = Math.floor(rem / unitHeight.value);
})

const unitHeight = computed(() => Math.max(0.125, props.unitHeightRem))
const containerHeight = computed(() => filteredItems.value.length >= props.maxUnitCount ? filteredItems.value.length * unitHeight.value : 0)
const scrollWrapperStyles = computed(() => ({ maxHeight: `${containerMaxHeight.value}rem`, zIndex: `${props.containerZIndex}` }))
const containerMaxHeight = computed(() => Math.floor(Math.max(1, props.maxUnitCount)) * unitHeight.value)
const scrollContainerStyles = computed(() => ({ height: containerHeight.value ? `${containerHeight.value}rem` : 'auto' }))
const scrollItemStyles = computed(() => ({ height: `${unitHeight.value}rem`, transform: `translateY(${scrollTop.value - 2}px)` }))

const firstVisibleItemIndex = ref(0)
const scrollTop = ref(0)
const displayedItems = ref(filteredItems.value)
const debouncedScrollUpdator = useDebounceFn(() => {
  initScroll();
  updateDisplayedItems(firstVisibleItemIndex.value);
}, 10)

watch(filteredItems, () => debouncedScrollUpdator(), { immediate: true, deep: true })

watch(openSlot, v => {
  if(v) debouncedScrollUpdator()
}, { immediate: true })

watch(firstVisibleItemIndex, (index) => updateDisplayedItems(index))

function initScroll() {
  firstVisibleItemIndex.value = 0;
  scrollTop.value = 0;
  const container = (scrollContainerRef.value as any)?.$el || scrollContainerRef.value;
  if (container && typeof container.scrollTo === 'function') container.scrollTo({ top: 0 });
}

function updateDisplayedItems(index: number) {
  displayedItems.value = filteredItems.value.slice(index, index + 5)
}

defineExpose({ getUpdatedValidState })

const [debouncedText, setTypedText] = useSingleDebounced({ target: inputKeyword, debounce: props.inputDebounce })
const maskOptions = { eager: true }
const updateTypedText = (event: Event) => setTypedText((event.target as HTMLInputElement).value)
watch(debouncedText, (string: string) => inputKeyword.value = string)

const fieldRef = ref<FieldRef|null>(null)
const model = defineModel<HAutocompleteModel>('autocompleteModel')

const totalModel = ref<HCheckboxModel>(false)

watch(() => totalModel.value, (e) => {
  if(e === null) return;
  else if(e) model.value = props.items.map(e => `${e.value}`);
  else model.value = []
})

watch(() => model.value, (e) => {
  if(!Array.isArray(e) || !props.multiSelect) return;
  if(!e.length) totalModel.value = false
  else if(e.length === props.items.length) totalModel.value = true;
  else totalModel.value = null;
}, { immediate: true })

const isReadonly = computed(() => props.isDisabled || props.readonly || !props.items.length)

const inputContainerClass = computed(() => {
  const cursor = isReadonly.value ? 'cursor-not-allowed' : fieldMode.value === 'input' ? 'cursor-text' : 'cursor-pointer'
  return `flex-1 flex h-full overflow-auto hide-scrollbar items-center ${ cursor }`
})


const { fieldState, validState, messages, validate } = getFieldModel(props, model)

const chipText = computed(() => (item: any) =>{
  const { multiSelect } = props;
  const label = props.items.find(e => e.value === item)?.label
  return multiSelect ? `${ label ?? '' }` : ''
})
const textLabel = computed(() => {
  const { multiSelect, items } = props
  if(!model.value) return undefined;
  const target = items.find(item => item.value === (model.value as LVPair).value)
  if (!target || multiSelect) return undefined
  else return target.label as string
})

const coreProps = computed(() => ({
  ...props,
  postIconName: openSlot.value ? 'icons_arrow_chevron_up' : ('icons_arrow_chevron_down' as IconName)
}))

const baseFieldProps = getFieldStyle<HAutocompleteProps>(fieldState, validState, messages, coreProps)

function expand(state: boolean) {
  if(isReadonly.value) return
  openSlot.value = state;
  if(!openSlot.value) fieldMode.value = 'select'
  nextTick(() => {
    if (!openSlot.value) validate();
  });
}

function select(item: LVPair) {
  model.value = item
  fieldRef.value?.setClickInside(!openSlot.value)
}

function getUpdatedValidState() {
  validate();
  return validState.value
}

function onClickInside() {
  if(fieldMode.value === 'input') return;
  if(!openSlot.value) {
    fieldMode.value = 'input'
    inputKeyword.value = ''
  }
  fieldRef.value!.setClickInside(!openSlot.value)
}

function clearAll() {
  if(props.readonly || props.isDisabled) return;
  else model.value = []
}

function clearItem (item: string) {
  if(props.readonly || props.isDisabled) return;
  else model.value = (model.value as string[]).filter(e => e !== item)
}
</script>

<style lang="sass" scoped>
.content-container[data-content-position="top"]
  bottom: 100%
  border-bottom: 2px solid var(--h-semantic-primary-stroke-global-default)
.content-container[data-content-position="bottom"]
  top: 100%
  border-top: 2px solid var(--h-semantic-primary-stroke-global-default)

.flex-inliner-item
  background: var(--h-semantic-secondary-background-normal-default)
  &:hover[data-readonly=false]
    background: var(--h-semantic-secondary-background-normal-hovered)

.flex-inliner-item-inner
  color: var(--h-semantic-secondary-foreground-normal-default)
  &:hover
    color: var(--h-semantic-secondary-foreground-normal-hovered)

form
  all: unset
  width: 100%
  height: 100%

input
  all: unset
  width: 100%
  height: 100%

input::placeholder
  opacity: 0.5

input::-ms-input-placeholder
  opacity: 0.5
</style>