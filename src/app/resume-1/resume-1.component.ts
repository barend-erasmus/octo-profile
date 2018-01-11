import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-resume-1',
  templateUrl: './resume-1.component.html',
  styleUrls: ['./resume-1.component.css']
})
export class Resume1Component implements OnInit {

  public isEdit: boolean = false;

  public profile: Profile = null;

  constructor(
    private profileService: ProfileService,
  ) { }

  public ngOnInit(): void {
    this.profileService.get().subscribe((profile) => {
      this.profile = profile;
    })
  }

}
