import { Injectable } from '@angular/core';
import { ServiceGatewayService } from './service-gateway.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private serviceGateway: ServiceGatewayService,
  ) {

  }

  public authenticate(userName: string, password: string): Observable<any> {
    return this.serviceGateway.get<any>('/api/user', {
      password,
      userName,
    });
  }

  public create(userName: string, password: string): Observable<boolean> {
    return this.serviceGateway.post<any>('/api/user', {
      password,
      userName,
    });
  }

  public find(): Observable<any> {
    return this.serviceGateway.get<any>('/api/user', null);
  }

}
