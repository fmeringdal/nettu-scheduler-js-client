import { Calendar } from "./domain/calendar";
import { NettuBaseClient } from "./baseClient";
import { Metadata } from "./domain/metadata";
import { CalendarEvent, CalendarEventInstance } from "./domain";
import { Timespan } from "./eventClient";

type CreateCalendarRequest = {
  timezone: string;
  weekStart?: number;
  metadata?: Metadata,
};

type UpdateCalendarRequest = CreateCalendarRequest;

type GetCalendarEventsResponse = {
  calendar: Calendar,
  events: {
    event: CalendarEvent;
    instances: CalendarEventInstance[];
  }[]
}

type CalendarResponse = {
  calendar: Calendar;
}

export class NettuCalendarClient extends NettuBaseClient {
  public create(userId: string, data: CreateCalendarRequest) {
    return this.post<CalendarResponse>(`/user/${userId}/calendar`, data);
  }

  public findById(calendarId: string) {
    return this.get<CalendarResponse>(`/user/calendar/${calendarId}`);
  }

  public findByMeta(
    meta: {
      key: string,
      value: string
    },
    skip: number,
    limit: number
  ) {
    return this.get<{ calendars: Calendar[] }>(`/calendar/meta?skip=${skip}&limit=${limit}&key=${meta.key}&value=${meta.value}`);
  }

  public remove(calendarId: string) {
    return this.delete<CalendarResponse>(`/user/calendar/${calendarId}`);
  }

  public update(
    calendarId: string,
    data: UpdateCalendarRequest
  ) {
    return this.put<CalendarResponse>(`/user/calendar/${calendarId}`, {
      settings: {
        timezone: data.timezone,
        weekStart: data.weekStart
      },
      metadata: data.metadata
    });
  }

  public getEvents(calendarId: string, startTS: number, endTS: number) {
    return this.get<GetCalendarEventsResponse>(`/user/calendar/${calendarId}/events?startTs=${startTS}&endTs=${endTS}`);
  }
}

export class NettuCalendarUserClient extends NettuBaseClient {
  public create(data: CreateCalendarRequest) {
    return this.post<CalendarResponse>("/calendar", data);
  }

  public findById(calendarId: string) {
    return this.get<CalendarResponse>(`/calendar/${calendarId}`);
  }

  public remove(calendarId: string) {
    return this.delete<CalendarResponse>(`/calendar/${calendarId}`);
  }

  public update(
    calendarId: string,
    data: UpdateCalendarRequest
  ) {
    return this.put<CalendarResponse>(`/calendar/${calendarId}`, data);
  }

  public getEvents(calendarId: string, timespan: Timespan) {
    return this.get<GetCalendarEventsResponse>(`/user/calendar/${calendarId}/events?startTs=${timespan.startTs}&endTs=${timespan.endTs}`);
  }
}