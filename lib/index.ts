import { NettuAccountClient } from "./accountClient";
import {
  AccountCreds,
  EmptyCreds,
  ICredentials,
  UserCreds,
} from "./baseClient";
import { NettuCalendarClient } from "./calendarClient";
import { NettuEventClient } from "./eventClient";
import { NettuHealthClient } from "./healthClient";
import { NettuScheduleClient } from "./scheduleClient";
import { NettuServiceClient } from "./serviceClient";
import { NettuUserClient } from "./userClient";

export * from "./domain";

type PartialCredentials = {
  apiKey?: string;
  nettuAccount?: string;
  token?: string;
};

export interface INettuClient {
  account: NettuAccountClient;
  calendar: NettuCalendarClient;
  events: NettuEventClient;
  user: NettuUserClient;
  service: NettuServiceClient;
  schedule: NettuScheduleClient;
  health: NettuHealthClient;
}

type ClientConfig = {
  baseUrl: string;
};

export const config: ClientConfig = {
  baseUrl: "http://localhost:5000",
};

export const NettuClient = (
  partialCreds?: PartialCredentials
): INettuClient => {
  const creds = createCreds(partialCreds);

  return {
    account: new NettuAccountClient(creds),
    events: new NettuEventClient(creds),
    calendar: new NettuCalendarClient(creds),
    user: new NettuUserClient(creds),
    service: new NettuServiceClient(creds),
    schedule: new NettuScheduleClient(creds),
    health: new NettuHealthClient(creds),
  };
};

const createCreds = (creds?: PartialCredentials): ICredentials => {
  creds = creds ? creds : {};
  if (creds.apiKey) {
    return new AccountCreds(creds.apiKey);
  } else if (creds.nettuAccount) {
    return new UserCreds(creds.nettuAccount, creds.token);
  } else {
    return new EmptyCreds();
    // throw new Error("No api key or nettu account provided to nettu client.");
  }
};
