import { Metadata } from "./metadata";

export interface Calendar {
  id: string;
  userId: string;
  settings: {
    weekStart: string;
    timezone: string;
  };
  synced: SyncedCalendar[];
  metadata: Metadata;
}

export enum SyncedCalendarProvider {
  Google = "Google",
}

export interface SyncedCalendar {
  provider: SyncedCalendarProvider;
  id: string;
}

export enum GoogleCalendarAccessRole {
  Owner = "Owner",
  Writer = "Writer",
  Reader = "Reader",
  FreeBusyReader = "FreeBusyReader",
}

export interface GoogleCalendarListEntry {
  id: string;
  access_role: GoogleCalendarAccessRole;
  summary: string;
  summaryOverride?: string;
  description?: string;
  location?: string;
  timeZone?: string;
  colorId?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  hidden?: boolean;
  selected?: boolean;
  primary?: boolean;
  deleted?: boolean;
}
