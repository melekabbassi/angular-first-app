import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if (Boolean(localStorage.getItem('isConnected'))) {
        return true;
        } else {
        this.router.navigateByUrl('/auth');
        return false;
        }
        }
        
  
}
