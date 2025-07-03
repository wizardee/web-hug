import { HDatepickerDate, HDatepickerDateType } from "@/manage/types/components/datepicker";

export function YMDtoEachDashed(year: string, month: string, date: string, type: HDatepickerDateType) {
  const y = year;
  const m = `-${month.padStart(2, '0')}`
  const d = `-${date.padStart(2, '0')}`
  return type === 'year' ? y : type === 'month' ? `${y}${m}` : `${y}${m}${d}`;
}


export function getMaxDate(year: number, month: number) {
  return { 1: 31, 2: isLeapYear(+year), 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 }[month]
}
export function isLeapYear(year: number) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? 29 : 28
}

export function compareDates(dateA: HDatepickerDate, dateB: HDatepickerDate) {
  const dateObjectA = new Date(`${dateA.year}-${dateA.month.padStart(2, '0')}-${dateA.date.padStart(2, '0')}`).getTime();
  const dateObjectB = new Date(`${dateB.year}-${dateB.month.padStart(2, '0')}-${dateB.date.padStart(2, '0')}`).getTime();
  if(dateObjectA === dateObjectB) return 'same'
  return dateObjectA < dateObjectB ? 'before' : 'after';
}