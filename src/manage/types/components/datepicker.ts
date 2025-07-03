import type { MaskType } from 'maska'
import { HBaseFieldCoreProps, PositionX } from "@/manage";


export type HDatepickerYearModel = string; // YYYY
export type HDatepickerMonthModel = string; // YYYYMM
export type HDatepickerDateModel = string | [string, string] // YYYYMMDD
export type HDatepickerModel = HDatepickerYearModel | HDatepickerMonthModel | HDatepickerDateModel | undefined
export type HDatepickerDateType = 'year' | 'month' | 'date'
export type HDatepickerDate = Record<HDatepickerDateType, string>;

// range, excludeList 는 HDatepickerDateType 에 맞는 Regex
export interface HDatepickerProps extends HBaseFieldCoreProps, HDatepickerContentProps {
  datepickerWidthClass?: string;
  emptyDateType?: HDatepickerDateType | 'ranged'
  datepickerPosition?: PositionX;
  mask?: MaskType; // 항상 YYYY MM DD 순서 필요
  range?: {
    from: string; // YYYYMMDD or YYYYMM or YYYY
    to: string; // YYYYMMDD or YYYYMM or YYYY
  }
  excludeList?: string[],  // YYYYMMDD or YYYYMM or YYYY
  showEmpty?: boolean
}

export interface HDatepickerContentProps {
}