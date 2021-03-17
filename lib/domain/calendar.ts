import { Metadata } from "./metadata";

export interface Calendar {
  id: string;
  userId: string;
  settings: {
    weekStart: string;
    timezone: string;
  },
  metadata: Metadata;
}
