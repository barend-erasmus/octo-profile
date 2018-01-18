import { Injectable } from '@angular/core';
import { ServiceGatewayService } from './service-gateway.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsageService {

   constructor(
    private serviceGateway: ServiceGatewayService,
  ) {

  }

  public counts(id: string): Observable<any> {
    return this.serviceGateway.get<any>('/api/usage/counts', {
      id,
    });
  }

}
