import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Storage } from '../utils/storage';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigate(url: string, params?: any) {
    if (params) {
      let param: any = {};
      if (params instanceof Array) {
        for (let i = 0; i < params.length; i++) {
          for (let key in params[i]) {
            param[key] = params[i][key];
          }
        }
      } else {
        param = params;
      }
      const navigationExtras: NavigationExtras = {
        queryParams: param,
      };
      this.router.navigate([url], navigationExtras);
    } else {
      this.router.navigate([url]);
    }
  }
  getParam(key: string) {
    return this.route.snapshot.queryParams[key];
  }
  setLocalItem(key: string, value: any) {
    return Storage.setLocalItem(key, value);
  }
  getLocalItem(key: string) {
    return Storage.getSessionItem(key);
  }
  setSessionItem(key: string, value: any) {
    return Storage.setSessionItem(key, value);
  }
  getSessionItem(key: string) {
    return Storage.getSessionItem(key);
  }
  getSessionUser() {
    return Storage.getSessionUser();
  }
}
