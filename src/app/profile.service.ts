import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Profile } from './models/profile';
import { Education } from './models/education';
import { WorkExperience } from './models/work-experience';
import { Skill } from './models/skill';
import { PortfolioItem } from './models/portfolio-item';
import { ServiceGatewayService } from './service-gateway.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(
    private serviceGateway: ServiceGatewayService,
  ) {

  }

  public create(profile: Profile): Observable<Profile> {
    return this.serviceGateway.post<Profile>('/api/profile', profile).map(this.mapToProfile);
  }

  public find(id: string, lastVisit: Date): Observable<Profile> {
    return this.serviceGateway.get<any>('/api/profile', {
      id,
      lastVisit,
    }).map(this.mapToProfile);
  }

  public list(): Observable<Profile[]> {
    return this.serviceGateway.get<Profile[]>('/api/profile', null).map((profiles: Profile[]) => {

      profiles.forEach((profile: Profile) => {
        this.mapToProfile(profile);
      });

      return profiles;
    });
  }

  public update(profile: Profile): Observable<Profile> {
    return this.serviceGateway.put<any>('/api/profile', profile).map(this.mapToProfile);
  }

  private mapToProfile(profile: any): Profile {
    profile.education.forEach((education: Education) => {
      education.to = education.to ? new Date(education.to) : null;
      education.from = education.from ? new Date(education.from) : null;
    });

    profile.workExperiences.forEach((workExperience: WorkExperience) => {
      workExperience.to = workExperience.to ? new Date(workExperience.to) : null;
      workExperience.from = workExperience.from ? new Date(workExperience.from) : null;
    });

    profile.personalInformation.birthDate = profile.personalInformation.birthDate ? new Date(profile.personalInformation.birthDate) : null;

    return profile;
  }

}
