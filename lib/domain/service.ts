import { Metadata } from "./metadata";


export type TimePlan = {
  variant: "Calendar" | "Schedule" | "Empty",
  id: string
}

export interface UserServiceResource {
  id: string;
  userId: string;
  availibility: TimePlan;
  busy: string[];
  buffer: number;
  closestBookingTime: number;
  furthestBookingTime: number;
}

export interface Service {
  id: string;
  accountId: string;
  users: UserServiceResource[];
  metadata: Metadata
}
