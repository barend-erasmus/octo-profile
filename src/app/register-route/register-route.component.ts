import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-route',
  templateUrl: './register-route.component.html',
  styleUrls: ['./register-route.component.css']
})
export class RegisterRouteComponent implements OnInit {

  public password: string = null;
  public username: string = null;
  public message: string = null;

  constructor(
    private userService: UserService,
  ) {

  }

  public ngOnInit(): void {

  }

  public onClick_Register(): void {
    this.userService.create(this.username, this.password).subscribe((resultCreate) => {
      this.userService.authenticate(this.username, this.password).subscribe((resultAuthenticate) => {
        localStorage.setItem('token', resultAuthenticate.token);
        window.location.href = '/admin/home';
      });
    }, (err) => {
      this.message = err.error.message;
    });
  }

}
