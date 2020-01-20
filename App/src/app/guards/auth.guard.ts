import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{
  data :boolean;
  constructor(private router: Router){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.data = (localStorage.getItem('data')==null);
    if(this.data){
      alert("Login first");
      this.router.navigate(['/']);
      return false;
    }else{
      return true;
    }
      
    }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.data = (localStorage.getItem('data')==null);
      if(!this.data){
        alert("Login first");
        this.router.navigate(['/']);
        return false;
        
      }else{
        return true;
      }
  }
}
