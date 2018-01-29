import { Component, OnInit, ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Education } from '../models/education';
import { PortfolioItem } from '../models/portfolio-item';
import { Skill } from '../models/skill';
import { WorkExperience } from '../models/work-experience';
import { Profile } from '../models/profile';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent implements OnInit {

  public loaded = false;

  public newEducation: Education = new Education(null, new Date(), null, null, new Date());

  public newId: string = null;

  public newPortfolioItem: PortfolioItem = new PortfolioItem(null, null, null, null);

  public newSkill: Skill = new Skill(null, null, null, null);

  public newWorkExperience: WorkExperience = new WorkExperience(null, false, null, new Date(), null, null, new Date());

  public profile: Profile = Profile.empty();

  public tempPortfolioItem: PortfolioItem = null;

  constructor(private profileService: ProfileService, private element: ElementRef) { }

  public ngOnInit(): void {

    setTimeout(() => {
      this.loaded = true;
    }, environment.loadedTimeout);

    this.profileService.list().subscribe((profiles: Profile[]) => {
      if (profiles.length !== 0) {
        this.profile = profiles[0];
      } else {
        this.profile = null;
      }
    }, (err) => {
      this.profile = null;
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

        this.onClick_Save();
      };
      reader.onerror = (error) => {

      };

      event.target.value = '';

    }
  }

  public onClick_ResumeTemplate(value: string): void {
    this.profile.type = value;

    this.onClick_Save();
  }

  public onChange_PortfolioItemImage(event): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.tempPortfolioItem.image = reader.result;

        this.onClick_Save();
      };
      reader.onerror = (error) => {

      };

      event.target.value = '';
    }
  }

  public onClick_AddEducation(): void {
    this.profile.education.push(this.newEducation);

    this.onClick_Save();

    this.newEducation = new Education(null, new Date(), null, null, new Date());
  }

  public onClick_AddPortfolioItem(): void {
    this.profile.portfolio.push(this.newPortfolioItem);

    this.onClick_Save();

    this.newPortfolioItem = new PortfolioItem(null, null, null, null);
  }

  public onClick_AddSkill(): void {
    this.profile.skills.push(this.newSkill);

    this.onClick_Save();

    this.newSkill = new Skill(null, null, null, null);
  }

  public onClick_AddWorkExperience(): void {
    this.profile.workExperiences.push(this.newWorkExperience);

    this.onClick_Save();

    this.newWorkExperience = new WorkExperience(null, false, null, new Date(), null, null, new Date());
  }

  public onClick_Image(): void {
    this.element.nativeElement.querySelector('input#onChange_Image').click();
  }

  public onClick_PortfolioItemImage(portfolioItem: PortfolioItem): void {
    this.tempPortfolioItem = portfolioItem;
    this.element.nativeElement.querySelector('input#onChange_PortfolioItemImage').click();
  }

  public onClick_Save(): void {
    this.profileService.update(this.profile).subscribe((result) => {
      this.profile = this.profile;
    });
  }

  public onClick_SaveNewId(): void {

    const profile: Profile = Profile.empty();

    profile.id = this.newId;
    profile.type = 'resume-1';

    this.profileService.create(profile).subscribe((result) => {
      this.profile = result;
    });
  }

}
