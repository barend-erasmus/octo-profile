import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../models/profile';
import { WorkExperience } from '../models/work-experience';
import { Education } from '../models/education';

@Component({
  selector: 'app-resume-1',
  templateUrl: './resume-1.component.html',
  styleUrls: ['./resume-1.component.css']
})
export class Resume1Component implements OnInit {

  public isEdit: boolean = true;

  public profile: Profile = new Profile(
    null,
    null,
    [],
    null,
    null,
    null,
    null,
    null,
    null,
    [],
    [],
    null,
    null,
    [],
  );

  public newWorkExperience: WorkExperience = new WorkExperience(null, null, new Date(), null, null, new Date());

  public newEducation: Education = new Education(null, new Date(), null, null, new Date());

  constructor(
    private profileService: ProfileService,
  ) { }

  public ngOnInit(): void {
    // this.profileService.get().subscribe((profile) => {
    //   this.profile = profile;
    // });
  }

  public onClick_AddWorkExperience(): void {
    this.profile.workExperiences.push(this.newWorkExperience);

    this.newWorkExperience = new WorkExperience(null, null, new Date(), null, null, new Date());
  }

}
