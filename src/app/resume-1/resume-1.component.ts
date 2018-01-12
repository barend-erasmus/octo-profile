import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../models/profile';
import { WorkExperience } from '../models/work-experience';
import { Education } from '../models/education';
import { Skill } from '../models/skill';

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

  public newSkill: Skill = new Skill(null, null, null, null);

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

  public onClick_AddEducation(): void {
    this.profile.education.push(this.newEducation);

    this.newEducation = new Education(null, new Date(), null, null, new Date());
  }

  public onClick_AddSkill(): void {
    this.profile.skills.push(this.newSkill);

    this.newSkill = new Skill(null, null, null, null);
  }

  public onClick_Save(): void {
    this.isEdit = false;
  }

  public onClick_Edit(): void {
    this.isEdit = true;
  }

  public onChange_Image(event): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profile.image = reader.result;
      };
      reader.onerror = (error) => {

      };
    }
  }

}
