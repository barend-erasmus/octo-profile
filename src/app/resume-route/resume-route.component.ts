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

    const lastVisit = this.getCookie('lastVisit') ? new Date(this.getCookie('lastVisit')) : null;

    this.route.params.subscribe(params => {
      this.profileId = params['id'];

      this.profileService.find(this.profileId, lastVisit).subscribe((profile) => {
        this.profile = profile;

        this.setCookie('lastVisit', new Date().toString(), 30);
      });
    });
  }

  private getCookie(name: string): string {
    name = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
  }


  private setCookie(name: string, value: string, days: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

}
