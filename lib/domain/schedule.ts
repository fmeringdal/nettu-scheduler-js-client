export interface Schedule {
  id: string;
  timezone: string;
  rules: ScheduleRule[];
}

export enum ScheduleRuleVariant {
  WDay = "WDay",
  Date = "Date",
}

export enum Weekday {
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
  Sun = "Sun",
}

export interface ScheduleRule {
  variant: {
    type: ScheduleRuleVariant;
    value: string;
  };
  intervals: ScheduleRuleInterval[];
}

export interface Time {
  hours: number;
  minutes: number;
}

export interface ScheduleRuleInterval {
  from: Time;
  to: Time;
}
