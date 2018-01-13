import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../models/profile';
import { WorkExperience } from '../models/work-experience';
import { Education } from '../models/education';
import { Skill } from '../models/skill';
import { PortfolioItem } from '../models/portfolio-item';

@Component({
  selector: 'app-resume-base',
  templateUrl: './resume-base.component.html',
  styleUrls: ['./resume-base.component.css']
})
export class ResumeBaseComponent implements OnInit {

  public isEdit = false;

  public newEducation: Education = new Education(null, new Date(), null, null, new Date());

  public newPortfolioItem: PortfolioItem = new PortfolioItem(null, null, null, null);

  public newSkill: Skill = new Skill(null, null, null, null);

  public newWorkExperience: WorkExperience = new WorkExperience(null, false, null, new Date(), null, null, new Date());

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
    null,
    [],
    [],
    null,
    null,
    [],
  );

  public tempPortfolioItem: PortfolioItem = null;

  constructor(
    private element: ElementRef,
    private profileService: ProfileService,
  ) { }

  public ngOnInit(): void {
    this.profileService.get().subscribe((profile) => {
      this.profile = profile;
    });
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

      event.target.value = '';
    }
  }

  public onChange_PortfolioItemImage(event): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.tempPortfolioItem.image = reader.result;
      };
      reader.onerror = (error) => {

      };

      event.target.value = '';
    }
  }

  public onClick_AddEducation(): void {
    this.profile.education.push(this.newEducation);

    this.newEducation = new Education(null, new Date(), null, null, new Date());
  }

  public onClick_AddPortfolioItem(): void {
    this.profile.portfolio.push(this.newPortfolioItem);

    this.newPortfolioItem = new PortfolioItem(null, null, null, null);
  }

  public onClick_AddSkill(): void {
    this.profile.skills.push(this.newSkill);

    this.newSkill = new Skill(null, null, null, null);
  }

  public onClick_AddWorkExperience(): void {
    this.profile.workExperiences.push(this.newWorkExperience);

    this.newWorkExperience = new WorkExperience(null, false, null, new Date(), null, null, new Date());
  }

  public onClick_Edit(): void {
    this.isEdit = true;
  }

  public onClick_Image(): void {
    this.element.nativeElement.querySelector('input#onChange_Image').click();
  }

  public onClick_PortfolioItemImage(portfolioItem: PortfolioItem): void {
    this.tempPortfolioItem = portfolioItem;
    this.element.nativeElement.querySelector('input#onChange_PortfolioItemImage').click();
  }

  public onClick_Save(): void {
    this.isEdit = false;

    console.log(this.profile);
  }

}
