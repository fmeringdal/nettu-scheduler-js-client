import { Metadata } from "./metadata";

export type TimePlan = {
  variant: "Calendar" | "Schedule" | "Empty";
  id: string;
};

export interface UserServiceResource {
  id: string;
  userId: string;
  availibility: TimePlan;
  busy: BusyCalendar[];
  buffer: number;
  closestBookingTime: number;
  furthestBookingTime: number;
}

export enum BusyCalendarProvider {
  Google = "Google",
  Nettu = "Nettu",
}

export interface BusyCalendar {
  provider: BusyCalendarProvider;
  id: string;
}

export interface Service {
  id: string;
  accountId: string;
  users: UserServiceResource[];
  metadata: Metadata;
}
