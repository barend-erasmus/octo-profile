import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public onClick_Logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

}
