import { MaskType } from 'maska';
import { HBaseFieldCoreProps, PositionX } from '../..';
export type HDatepickerYearModel = string;
export type HDatepickerMonthModel = string;
export type HDatepickerDateModel = string | [string, string];
export type HDatepickerModel = HDatepickerYearModel | HDatepickerMonthModel | HDatepickerDateModel | undefined;
export type HDatepickerDateType = 'year' | 'month' | 'date';
export type HDatepickerDate = Record<HDatepickerDateType, string>;
export interface HDatepickerProps extends HBaseFieldCoreProps, HDatepickerContentProps {
    datepickerWidthClass?: string;
    emptyDateType?: HDatepickerDateType | 'ranged';
    datepickerPosition?: PositionX;
    mask?: MaskType;
    range?: {
        from: string;
        to: string;
    };
    excludeList?: string[];
    showEmpty?: boolean;
}
export interface HDatepickerContentProps {
}
