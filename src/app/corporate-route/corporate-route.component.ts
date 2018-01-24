import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-corporate-route',
  templateUrl: './corporate-route.component.html',
  styleUrls: ['./corporate-route.component.css']
})
export class CorporateRouteComponent implements OnInit {

  public loaded: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, environment.loadedTimeout);
  }

}
