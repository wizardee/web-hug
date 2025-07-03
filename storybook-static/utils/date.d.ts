import { HDatepickerDate, HDatepickerDateType } from '../manage/types/components/datepicker';
export declare function YMDtoEachDashed(year: string, month: string, date: string, type: HDatepickerDateType): string;
export declare function getMaxDate(year: number, month: number): number | undefined;
export declare function isLeapYear(year: number): 29 | 28;
export declare function compareDates(dateA: HDatepickerDate, dateB: HDatepickerDate): "same" | "before" | "after";
