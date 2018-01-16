import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-route',
  templateUrl: './login-route.component.html',
  styleUrls: ['./login-route.component.css']
})
export class LoginRouteComponent implements OnInit {

  public password: string = null;
  public username: string = null;
  public message: string = null;

  constructor(
    private userService: UserService,
  ) { 

  }

  public ngOnInit(): void {

  }

  public onClick_Login(): void {
    this.userService.authenticate(this.username, this.password).subscribe((result) => {
      localStorage.setItem('token', result.token);
      window.location.href = '/admin/home';
    }, (err) => {
      this.message = err.error.message;
    });
  }

}
