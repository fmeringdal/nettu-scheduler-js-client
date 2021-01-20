export enum Frequenzy {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}

export interface RRuleOptions {
  freq: Frequenzy;
  interval: number;
  count?: number;
  until?: number;
  bysetpos?: number[];
  byweekday?: number[];
  bynweekday?: number[][];
}

export interface CalendarEvent {
  id: string;
  startTs: number;
  duration: number;
  busy: boolean;
  endTs?: number;
  recurrence?: RRuleOptions;
  exdates: number[];
  calendarId: string;
  userId: string;
}

export interface CalendarEventInstance {
  startTs: number;
  endTs: number;
  busy: boolean;
}
