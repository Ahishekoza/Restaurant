import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonalDetailsService } from './Services/personal-details.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  name:any;
  constructor(private personalDetails:PersonalDetailsService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
      if(this.personalDetails.CustomerName.value.length>0){
        return true;
      }
      window.location.href='/menuPage'
      return false;

    }
}
