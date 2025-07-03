import { Component } from 'vue'
import { IconName } from "@/manage";

export interface HToastProps extends HPassedToastProps {
  count?: number // toast 중복 수, 1 초과일 때 chip 이 부착됨
  time?: string; // 생성 시간 HH:MM
}

export interface HPassedToastProps {
  id: string
  iconName?: IconName;
  backgroundColor?: string;
  iconColor?: string;
  isAuto?: boolean;
  hasCloseButton?: boolean;
  showTime?: boolean;
  autoTime?: number; // auto 일 때 몇 초 뒤 자동으로 꺼지는지 결정.
  title: string // 제목
  beforeCloseComponent?: Component
}