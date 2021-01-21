export interface UserServiceResource {
  id: string;
  userId: string;
  calendarIds: string[];
  scheduleIds: string[];
}

export interface Service {
  id: string;
  accountId: string;
  users: UserServiceResource[];
}
