import { Component, OnInit, Input } from '@angular/core';
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


  @Input()
  public profile: Profile = null;

  public loaded = false;

  constructor(

  ) { }

  public ngOnInit(): void {
    // setTimeout(() => {
    //   this.loaded = true;
    // }, 2000);
  }
}
