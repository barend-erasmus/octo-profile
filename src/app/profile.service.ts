import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Profile } from './models/profile';
import { Education } from './models/education';
import { WorkExperience } from './models/work-experience';
import { Skill } from './models/skill';
import { PortfolioItem } from './models/portfolio-item';

@Injectable()
export class ProfileService {

  constructor() {

  }

  public get(id: string): Observable<Profile> {
    let profile: Profile = null;

    if (id === 'barend-erasmus') {
      profile = Profile.getProfileBarendErasmus();
    }else if (id === 'marla-tarrant') {
      profile = Profile.getProfileMarlaTarrant();
    }

    return Observable.of(profile);
  }

}
