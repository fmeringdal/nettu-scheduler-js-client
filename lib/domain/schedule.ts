export interface Schedule {
  id: string;
  timezone: string;
  rules: ScheduleRule[];
}

enum ScheduleRuleVariant {
  WDay = "WDay",
  Date = "Date",
}

export interface ScheduleRule {
  type: ScheduleRuleVariant;
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
