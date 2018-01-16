import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Profile } from './models/profile';
import { Education } from './models/education';
import { WorkExperience } from './models/work-experience';
import { Skill } from './models/skill';
import { PortfolioItem } from './models/portfolio-item';
import { ServiceGatewayService } from './service-gateway.service';

@Injectable()
export class ProfileService {

  constructor(
    private serviceGateway: ServiceGatewayService,
  ) { 

  }

  public create(profile: Profile): Observable<Profile> {
    return this.serviceGateway.post<any>('/api/profile', profile);
  }

  public find(id: string): Observable<Profile> {
    return this.serviceGateway.get<any>('/api/profile', {
      id,
    });
  }

  public list(): Observable<Profile[]> {
    return this.serviceGateway.get<any>('/api/profile', null);
  }

}
