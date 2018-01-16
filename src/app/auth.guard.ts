import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  private user: any;

  constructor() { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(observer => {

      const token = localStorage.getItem('token');

      if (token) {
        observer.next(true);
        observer.complete();
      } else {
        window.location.href = '/login';

        observer.next(false);
        observer.complete();
      }
    });
  }
}
