import { Service, TimePlan } from "./domain/service";
import { NettuBaseClient } from "./baseClient";
import { Metadata } from "./domain/metadata";

type AddUserToServiceRequest = {
  userId: string;
  availibility?: TimePlan,
  busy?: string[];
  buffer?: number;
  closestBookingTime?: number;
  furthestBookingTime?: number;
};

type UpdateUserToServiceRequest = {
  userId: string;
  availibility?: TimePlan,
  busy?: string[];
  buffer?: number;
  closestBookingTime?: number;
  furthestBookingTime?: number;
};

type GetServiceBookingslotsReq = {
  ianaTz: string;
  duration: number;
  interval: number;
  date: string;
};

type ServiceBookingSlot = {
  start: number;
  duration: number;
  userIds: string[];
};

type GetServiceBookingslotsResponse = {
  bookingSlots: ServiceBookingSlot[];
};

type CreateServiceRequest = {
  metadata?: Metadata;
}

type UpdateServiceRequest = {
  metadata?: Metadata;
}

type ServiceResponse = {
  service: Service;
}

export class NettuServiceClient extends NettuBaseClient {
  public create(data?: CreateServiceRequest) {
    data = data ? data : {};
    return this.post<ServiceResponse>("/service", data);
  }

  public update(serviceId: string, data?: UpdateServiceRequest) {
    data = data ? data : {};
    return this.put<ServiceResponse>(`/service/${serviceId}`, data);
  }

  public find(serviceId: string) {
    return this.get<ServiceResponse>(`/service/${serviceId}`);
  }

  public remove(serviceId: string) {
    return this.delete<ServiceResponse>(`/service/${serviceId}`);
  }

  public addUser(serviceId: string, data: AddUserToServiceRequest) {
    return this.post<ServiceResponse>(`/service/${serviceId}/users`, data);
  }

  public removeUser(serviceId: string, userId: string) {
    return this.delete<ServiceResponse>(`/service/${serviceId}/users/${userId}`);
  }

  public updateUserInService(
    serviceId: string,
    data: UpdateUserToServiceRequest
  ) {
    return this.put<ServiceResponse>(`/service/${serviceId}/users/${data.userId}`, data);
  }

  public getBookingslots(serviceId: string, req: GetServiceBookingslotsReq) {
    const queryString = `date=${req.date}&ianaTz=${req.ianaTz}&duration=${req.duration}&interval=${req.interval}`;
    return this.get<GetServiceBookingslotsResponse>(
      `/service/${serviceId}/booking?${queryString}`
    );
  }
}

export class NettuServiceUserClient extends NettuBaseClient {
  public getBookingslots(serviceId: string, req: GetServiceBookingslotsReq) {
    const queryString = `date=${req.date}&ianaTz=${req.ianaTz}&duration=${req.duration}&interval=${req.interval}`;
    return this.get<GetServiceBookingslotsResponse>(
      `/service/${serviceId}/booking?${queryString}`
    );
  }
}
