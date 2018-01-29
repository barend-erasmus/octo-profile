import { Component, OnInit } from '@angular/core';
import { UsageService } from '../usage.service';
import { ProfileService } from '../profile.service';
import { UsageCounts } from '../models/usage-counts';
import { Profile } from '../models/profile';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styleUrls: ['./dashboard-route.component.css']
})
export class DashboardRouteComponent implements OnInit {

  public loaded = false;

  public profile: Profile = Profile.empty();

  public usageCounts: UsageCounts = null;

  constructor(private profileService: ProfileService, private usageService: UsageService) { }

  public ngOnInit(): void {

    setTimeout(() => {
      this.loaded = true;
    }, environment.loadedTimeout);

    this.profileService.list().subscribe((profiles: Profile[]) => {
      if (profiles.length !== 0) {
        this.profile = profiles[0];

        this.usageService.counts(this.profile.id).subscribe((usageCounts: UsageCounts) => {
          this.usageCounts = usageCounts;
        }, (err) => {

        });
      }
    }, (err) => {

    });

  }

}
