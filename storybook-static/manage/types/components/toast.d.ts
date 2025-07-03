import { Component } from 'vue';
import { IconName } from '../..';
export interface HToastProps extends HPassedToastProps {
    count?: number;
    time?: string;
}
export interface HPassedToastProps {
    id: string;
    iconName?: IconName;
    backgroundColor?: string;
    iconColor?: string;
    isAuto?: boolean;
    hasCloseButton?: boolean;
    showTime?: boolean;
    autoTime?: number;
    title: string;
    beforeCloseComponent?: Component;
}
