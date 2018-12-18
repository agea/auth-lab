import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
