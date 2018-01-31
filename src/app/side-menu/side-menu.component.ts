import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()
  public profile: Profile = Profile.empty();

  constructor() { }

  public ngOnInit(): void {
  }

}
