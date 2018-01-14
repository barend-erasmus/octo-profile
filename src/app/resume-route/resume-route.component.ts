import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../models/profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-resume-route',
  templateUrl: './resume-route.component.html',
  styleUrls: ['./resume-route.component.css']
})
export class ResumeRouteComponent implements OnInit {

  public profileId: string = null;

  public profile: Profile = null;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.profileId = params['id'];

      this.profileService.get(this.profileId).subscribe((profile) => {
        this.profile = profile;
      });
   });
  }

}
