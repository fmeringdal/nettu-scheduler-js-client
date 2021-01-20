import { Calendar } from "./domain/calendar";
import { NettuBaseClient } from "./baseClient";

type UpdateCalendarSettingsRequest = {
  wkst?: number;
  timezone?: string;
};

export class NettuCalendarClient extends NettuBaseClient {
  // data will probably be something in the future
  public insert(data: undefined) {
    return this.post<any>("/calendar", data);
  }

  public findById(calendarId: string) {
    return this.get<Calendar>(`/calendar/${calendarId}`);
  }

  public remove(calendarId: string) {
    return this.delete<any>(`/calendar/${calendarId}`);
  }

  public updateSettings(
    calendarId: string,
    settings: UpdateCalendarSettingsRequest
  ) {
    return this.put<void>(`/calendar/${calendarId}`, settings);
  }
}
