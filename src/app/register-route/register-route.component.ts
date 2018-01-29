import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register-route',
  templateUrl: './register-route.component.html',
  styleUrls: ['./register-route.component.css']
})
export class RegisterRouteComponent implements OnInit {

  public loaded = false;
  public password: string = null;
  public userName: string = null;
  public message: string = null;

  constructor(
    private userService: UserService,
  ) {

  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, environment.loadedTimeout);
  }

  public onClick_Register(): void {
    this.userService.create(this.userName, this.password).subscribe((resultCreate) => {
      this.userService.authenticate(this.userName, this.password).subscribe((resultAuthenticate) => {
        localStorage.setItem('token', resultAuthenticate.token);
        window.location.href = '/admin/home';
      });
    }, (err) => {
      this.message = err.error.message;
    });
  }

}
