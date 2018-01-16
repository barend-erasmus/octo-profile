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
    return this.serviceGateway.post<Profile>('/api/profile', profile).map((profileMap: Profile) => {

      profileMap.education.forEach((education: Education) => {
        education.to = education.to ? new Date(education.to) : null;
        education.from = education.from ? new Date(education.from) : null;
      });

      profileMap.workExperiences.forEach((workExperience: WorkExperience) => {
        workExperience.to = workExperience.to ? new Date(workExperience.to) : null;
        workExperience.from = workExperience.from ? new Date(workExperience.from) : null;
      });

      profileMap.birthDate = profileMap.birthDate ? new Date(profileMap.birthDate) : null;

      return profileMap;
    });
  }

  public find(id: string): Observable<Profile> {
    return this.serviceGateway.get<any>('/api/profile', {
      id,
    }).map((profile: Profile) => {

      profile.education.forEach((education: Education) => {
        education.to = education.to ? new Date(education.to) : null;
        education.from = education.from ? new Date(education.from) : null;
      });

      profile.workExperiences.forEach((workExperience: WorkExperience) => {
        workExperience.to = workExperience.to ? new Date(workExperience.to) : null;
        workExperience.from = workExperience.from ? new Date(workExperience.from) : null;
      });

      profile.birthDate = profile.birthDate ? new Date(profile.birthDate) : null;

      return profile;
    });
  }

  public list(): Observable<Profile[]> {
    return this.serviceGateway.get<Profile[]>('/api/profile', null).map((profiles: Profile[]) => {

      profiles.forEach((profile: Profile) => {
        profile.education.forEach((education: Education) => {
          education.to = education.to ? new Date(education.to) : null;
          education.from = education.from ? new Date(education.from) : null;
        });

        profile.workExperiences.forEach((workExperience: WorkExperience) => {
          workExperience.to = workExperience.to ? new Date(workExperience.to) : null;
          workExperience.from = workExperience.from ? new Date(workExperience.from) : null;
        });

        profile.birthDate = profile.birthDate ? new Date(profile.birthDate) : null;
      });

      return profiles;
    });
  }

  public update(profile: Profile): Observable<Profile> {
    return this.serviceGateway.put<any>('/api/profile', profile).map((profileMap: Profile) => {

      profileMap.education.forEach((education: Education) => {
        education.to = education.to ? new Date(education.to) : null;
        education.from = education.from ? new Date(education.from) : null;
      });

      profileMap.workExperiences.forEach((workExperience: WorkExperience) => {
        workExperience.to = workExperience.to ? new Date(workExperience.to) : null;
        workExperience.from = workExperience.from ? new Date(workExperience.from) : null;
      });

      profileMap.birthDate = profileMap.birthDate ? new Date(profileMap.birthDate) : null;

      return profileMap;
    });
  }

}
