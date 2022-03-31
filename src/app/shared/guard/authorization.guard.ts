import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '../utils/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  // public user:any={}

  // canActivate( route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //     const allowedRoles=route.data.allowedRoles as Array<string>;
  //     this.user=Storage.getLocalItem('user');
  //     let isAuthorized:boolean=false;

  //     if(isAuthorized == null && allowedRoles.includes(this.user.role)){
  //       isAuthorized=true;
  //     }else if(this.user && this.user.role && allowedRoles.includes(this.user.role)){
  //       isAuthorized=true
  //     }else{
  //       window.alert('You do not have permission to access this component')
  //     }

  //   return isAuthorized;
  // }

  // canActivateChild(childRoute: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //   const allowedRoles=childRoute.data.allowedRoles as Array<string>;
  //   let  isAuthorized:boolean=true;
  //   if(allowedRoles == null || allowedRoles.length === 0){
  //     isAuthorized=true
  //   }else if(allowedRoles.includes(this.user.role)){
  //     isAuthorized=true;
  //   }else{
  //     window.alert(`You do not have permission to access this component`)
  //   }
  //   return isAuthorized;
  // }

}
