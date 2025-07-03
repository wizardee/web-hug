<template>
  <h-base v-if="level !== DatePickerLevel.ERROR" class-name="w-full h-full flex flex-col">
    <h-base :styles="{borderBottom}" class-name="w-full h-16 flex px-4 items-center gap-2">
      <h-button :text="currentText" round="roundedSquare" size="md" theme="secondary" type="transparent"
                @click="setLevel" />
      <h-empty />
      <h-button pre-icon-name="icons_arrow_chevron_left" round="roundedSquare" size="md" theme="secondary"
                type="transparent" @click="pagin(true)" />
      <h-button pre-icon-name="icons_arrow_chevron_right" round="roundedSquare" size="md" theme="secondary"
                type="transparent" @click="pagin(false)" />
    </h-base>
    <h-base :styles="{borderBottom}" class-name="w-full flex-1 py-4 px-2">
      <h-base v-if="level === DatePickerLevel.YEAR" class-name="w-full grid grid-cols-3 gap-4">
        <template v-for="year in 12" :key="year">
          <h-button :text="`${year - 1 + +current.year}`" :theme="yearTheme(year - 1 + +current.year)"
                    v-bind="commonButtonProps"
                    @on-click="clickYear(year - 1 + +current.year)" />
        </template>
      </h-base>
      <h-base v-else-if="level === DatePickerLevel.MONTH" class-name="w-full grid grid-cols-3 gap-4">
        <template v-for="month in 12" :key="month">
          <h-button :text="`${month}월`" :theme="monthTheme(month)" v-bind="commonButtonProps"
                    @on-click="clickMonth(month)" />
        </template>
      </h-base>
      <h-base v-else class-name="w-full grid grid-cols-7">
        <template v-for="n in weekdays" :key="n">
          <h-base
            :styles="{color}"
            class-name="items-center flex justify-center overflow-x-hidden truncate h-8 h-font-medium h-typo-body-2-normal">
            <span> {{ n }} </span>
          </h-base>
        </template>
        <template v-for="(item, index) in calendar" :key="current.year + current.month + item.value + index">
          <h-base class-name="w-full h-fit mb-1 flex justify-center relative">
            <h-base :data-date-item-filled="getFilledState(item.value)" class-name="absolute w-full h-6 top-50% z--1"
                    style="transform: translateY(-50%)" />
            <h-button :text="`${item.value}`" class-name="w-8"
                      justify="justify-center"
                      round="circle"
                      size="md" style="padding: 0" v-bind="calendarItemProps(item.value)"
                      @mouseenter="setHovered(item.value)" @mouseleave="hovered = null" @on-click="clickDate(item.value)" />
          </h-base>
        </template>
      </h-base>

    </h-base>
    <h-base class-name="w-full h-fit flex px-3 py-2 gap-2 justify-end">
      <h-button round="roundedSquare" size="md" text="취소" theme="secondary" type="transparent" @on-click="revert" />
      <h-button round="roundedSquare" size="md" text="확인" theme="secondary" type="transparent" @on-click="apply" />
    </h-base>
  </h-base>
</template>

<script lang="ts" setup>

import { computed, type ComputedRef, type Ref, ref, unref, watch } from 'vue'
import { klona } from 'klona'
import { HBase, HButton, HEmpty } from "@/components";
import { HDatepickerDate, HDatepickerDateType, HDatepickerModel } from "@/manage/types/components/datepicker";
import { getSemantic, HButtonProps } from "@/manage";
import { compareDates, getMaxDate, YMDtoEachDashed } from "@/utils/date";

enum DatePickerLevel {
  ERROR = 0,
  YEAR = 1,
  MONTH = 2,
  DATE = 3
}


const props = defineProps<{ emptyDateType: HDatepickerDateType | 'ranged' }>()
const initValue: HDatepickerDate = { year: '', month: '', date: '' }
const model = defineModel<HDatepickerModel>('dateModel')
const start = ref(klona(initValue))
const end = ref(klona(initValue))
const level = ref(DatePickerLevel.ERROR)
const current = ref(start.value)
const calendar: Ref<{ value: string; clickable: boolean }[]> = ref([])
const yearLength = 12
const weekdays = ['일', '월', '화', '수', '목', '금', '토']
const emits = defineEmits(['onClose'])
const pivot = ref<boolean>(false)
const hovered = ref<HDatepickerDate | null>(null)
const dateType: ComputedRef<HDatepickerDateType> = computed(() => {
  const { month, date } = start.value
  if (!month.length) return 'year'
  else if (!date.length) return 'month'
  return 'date'
})
const isRanged = computed(() => props.emptyDateType === 'ranged' || Array.isArray(model.value))

const color = getSemantic('secondary', 'foreground', 'normal', 'default')

const commonButtonProps: Pick<HButtonProps, 'size' | 'justify' | 'round' | 'type'> = {
  size: 'md',
  justify: 'justify-center',
  round: 'roundedSquare',
  type: 'filled'
}


const currentText = computed(() => {
  const { year, month } = current.value
  switch (level.value) {
    case DatePickerLevel.YEAR:
      return `${ +year }-${ +year + yearLength - 1 }`
    case DatePickerLevel.MONTH:
      return `${ +year }년`
    case DatePickerLevel.DATE:
      return `${ +year }년 ${ +month }월`
    default:
      return ''
  }
})

const calendarItemProps: ComputedRef<(date: string) => Pick<HButtonProps, 'type' | 'theme'>> = computed(() => (date: string) => {
  const currentDate = { ...current.value, date: date.padStart(2, '0') }
  const compareA = compareDates(currentDate, start.value)
  if (!pivot.value) {
    const compareB = compareDates(currentDate, end.value)
    if (compareA === 'same' || compareB === 'same') return { type: 'filled', theme: 'primary' }
    else return { type: 'transparent', theme: 'secondary' }
  } else {
    const compareB = !hovered.value ? '' : compareDates(currentDate, hovered.value)
    if (compareA === 'same' || compareB === 'same') return { type: 'outlined', theme: 'primary' }
    else return { type: 'transparent', theme: 'secondary' }
  }
})


const getFilledState = computed(() => (date: string) => {
  if(!isRanged.value) return 'none'
  const currentDate = { ...current.value, date: date.padStart(2, '0') }
  if (pivot.value) return ''
  const compare = compareDates(start.value, end.value);
  const compareA = compareDates(currentDate, start.value)
  if(compare === 'same') return 'none'
  if (compareA === 'same') return 'start'
  const compareB = compareDates(currentDate, end.value)
  if (compareB === 'same') return 'end'
  if (compareA === 'after' && compareB === 'before') return 'range'
  return 'none'

})



function setLevel() {
  if (level.value === DatePickerLevel.YEAR || level.value === DatePickerLevel.ERROR) return
  level.value -= 1
}

function pagin(isLeft: boolean) {
  const cloned = klona(unref(current))
  const negation = isLeft ? -1 : 1
  const currentMonth = isLeft ? 1 : 12
  const nextMonth = isLeft ? 12 : 1
  const { year, month } = cloned
  switch (level.value) {
    case DatePickerLevel.YEAR:
      cloned.year = `${ +year + negation * yearLength }`
      break
    case DatePickerLevel.MONTH:
      cloned.year = `${ +year + negation * 1 }`
      break
    case DatePickerLevel.DATE: {
      if (+month === currentMonth) {
        cloned.year = `${ +year + negation * 1 }`
        cloned.month = `${ nextMonth }`
      } else cloned.month = `${ +month + negation * 1 }`
    }
      break
    default:
      break
  }
  current.value = cloned
}

// todo: ranged 이면 exclude list 필요 없음, include list 에는 영향 받을듯 / 전체 - include list 로 제한 (있다면) - exclude list 제거 (있다면)
watch(() => model.value, (v) => {
  if (!v) initialize()
  else if (Array.isArray(v)) {
    level.value = DatePickerLevel.DATE
    start.value = deconstruct(v[0])
    initCurrent()
    initPivot()
    end.value = deconstruct(v[1])
  } else {
    start.value = deconstruct(v)
    level.value = start.value.date.length ? DatePickerLevel.DATE : start.value.month.length ? DatePickerLevel.MONTH : DatePickerLevel.YEAR
    initCurrent()
    initPivot()
    initEnd()
  }
}, { immediate: true })

watch(() => current.value, (value) => {
  if (!value.month.length) return
  const { year, month } = value
  const maxDate = getMaxDate(+year, +month)
  const day = new Date(YMDtoEachDashed(year, month, '1', 'date')).getDay()
  const emptyItems = Array.from({ length: day }).map(() => ({ value: '', clickable: false }))
  const filledItems = Array.from({ length: +(maxDate ?? 0) }).map((_, i) => ({ value: `${ i + 1 }`, clickable: true }))
  calendar.value = emptyItems.concat(filledItems)
}, { immediate: true })


watch(() => level.value, (value) => {
  if(value !== 0) return;

  const { emptyDateType } = props
  const today = new Date();
  const y = today.getFullYear().toString().padStart(4, '0')
  const m = (today.getMonth() + 1).toString().padStart(2, '0')
  const d = today.getDate().toString()
  const sliceIndex = emptyDateType === 'year' ? 0 : emptyDateType === 'month' ? 1 : 2
  const str = [y, m, d].slice(0, sliceIndex + 1).join('')
  const v = emptyDateType === 'ranged' ? [str, str] : str
  if(Array.isArray(v)) {
    level.value = DatePickerLevel.DATE
    start.value = { year: y, month: m, date: d }
    current.value = { year: y, month: m, date: d };
    initPivot()
    end.value = { year: y, month: m, date: d }
  }
  else {
    start.value = deconstruct(v)
    level.value = start.value.date.length ? DatePickerLevel.DATE : start.value.month.length ? DatePickerLevel.MONTH : DatePickerLevel.YEAR
    initCurrent()
    initPivot()
    initEnd()
  }
}, { immediate: true })

const borderBottom = `1px solid ${ getSemantic('secondary', 'stroke', 'normal', 'default') }`

function deconstruct(dateModel: string) {
  return { year: dateModel.slice(0, 4), month: dateModel.slice(4, 6), date: dateModel.slice(6, 8) }
}

function initialize() {
  initStart()
  initEnd()
  initCurrent()
  initPivot()
  level.value = DatePickerLevel.ERROR
}

function initCurrent() {
  current.value = klona(start.value)
  if (current.value.date.length) current.value.date = ''
  else if (current.value.month.length) current.value.month = ''
}

function initPivot() {
  pivot.value = false
}

function initStart() {
  start.value = klona(initValue)
}

function initEnd() {
  end.value = klona(initValue)
}


function revert() {
  emits('onClose')
}

function apply() {
  const { year: startYear, month: startMonth, date: startDate } = start.value
  const { year: endYear, month: endMonth, date: endDate } = end.value;

  const startValue = [startYear, startMonth.padStart(2, '0'), startDate.padStart(2, '0')].filter(e => !!+e).join('')
  const endValue = [endYear, endMonth.padStart(2, '0'), endDate.padStart(2, '0')].filter(e => !!e.length).join('')
  model.value = isRanged.value ? [startValue, endValue] : startValue
  emits('onClose')
}

const monthTheme = computed(() => (month: number) => {
  if (!isRanged.value) {
    return (month === +start.value.month && +current.value.year === +start.value.year) ? 'primary' : 'secondary'
  } else return 'secondary'
})

const yearTheme = computed(() => (year: number) => {
  if (!isRanged.value) {
    return (year === +start.value.year) ? 'primary' : 'secondary'
  } else return 'secondary'
})


function setHovered(date: string) {
  hovered.value = { ...current.value, date: date.padStart(2, '0') }
}

function clickDate(date: string) {
  if (!isRanged.value) {
    start.value.year = current.value.year
    start.value.month = current.value.month
    start.value.date = `${ date }`
    return
  }
  if (!pivot.value) {
    start.value.year = current.value.year
    start.value.month = current.value.month
    start.value.date = `${ date }`
  } else {
    const currentDate = { ...current.value, date: date.padStart(2, '0') }
    const compareA = compareDates(currentDate, start.value)
    if (compareA === 'before') {
      end.value = klona(start.value)
      start.value.year = current.value.year
      start.value.month = current.value.month
      start.value.date = `${ date }`
    } else {
      end.value.year = current.value.year
      end.value.month = current.value.month
      end.value.date = `${ date }`
    }
  }
  pivot.value = !pivot.value
}

function clickMonth(month: number) {
  if (dateType.value === 'month') {
    start.value.year = current.value.year
    start.value.month = `${ month }`
  } else {
    current.value.month = `${ month }`
    level.value += 1
  }
}

function clickYear(year: number) {
  if (dateType.value === 'year') start.value.year = `${ year }`
  else {
    current.value.year = `${ year }`
    level.value += 1
  }
}


</script>
<style lang="sass" scoped>
[data-date-item-filled="range"]
  background: var(--h-semantic-primary-background-strong-selected)

[data-date-item-filled="start"]
  background: linear-gradient(to right, transparent 50%, var(--h-semantic-primary-background-strong-selected) 50%)

[data-date-item-filled="end"]
  background: linear-gradient(to left, transparent 50%, var(--h-semantic-primary-background-strong-selected) 50%)

[data-date-item-filled="none"]
  background: transparent
</style>