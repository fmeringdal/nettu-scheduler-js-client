import { NettuBaseClient } from "./baseClient";
import { Schedule, ScheduleRule } from "./domain/schedule";

export interface UpdateScheduleRequest {
  rules?: ScheduleRule[];
  timezone?: string;
}

export class NettuScheduleClient extends NettuBaseClient {
  public async insert() {
    return await this.post<Schedule>(`/schedule`, undefined);
  }

  public async update(scheduleId: string, update: UpdateScheduleRequest) {
    return await this.put<Schedule>(`/schedule/${scheduleId}`, update);
  }

  public async remove(scheduleId: string) {
    return await this.delete<void>(`/schedule/${scheduleId}`);
  }

  public async find(scheduleId: string) {
    return await this.get<Schedule>(`/schedule/${scheduleId}`);
  }
}
