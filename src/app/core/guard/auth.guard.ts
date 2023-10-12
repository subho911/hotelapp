import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("this.authService.currentUserValue");
    console.log(this.authService.currentUserValue);
    if (this.authService.currentUserValue.displayName) {
      return true;
    }
    this.router.navigate(['/authentication/signin']);
    return false;
  }
}
