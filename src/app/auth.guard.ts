import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  private user: any;

  constructor(private userService: UserService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(observer => {

      const token = localStorage.getItem('token');

      if (token) {

        this.userService.find().subscribe((user) => {
            localStorage.setItem('user', JSON.stringify(user));

            observer.next(true);
            observer.complete();
          }, (err) => {
             window.location.href = '/login';

            observer.next(false);
            observer.complete();
          });

      } else {
        window.location.href = '/login';

        observer.next(false);
        observer.complete();
      }
    });
  }
}
