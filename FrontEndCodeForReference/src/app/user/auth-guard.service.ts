import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DietService } from './diet.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router : Router, private dietService : DietService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.dietService.isloggedUser) {
      return true;
    } else {
      this.router.navigate(['/user/signIn'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
