import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { NgToastService } from 'ng-angular-popup';
import { ApexService } from './shared/service/apex.service';
import { RestService } from './shared/service/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // showNavbar: any = false;
  // showLoader: any = true;
  // routes: string[] = ['/auth'];
  // showHideSideNavBar: any = true;

  userObj:any;
  constructor(
    private apexService: ApexService,
    private changeDetect: ChangeDetectorRef,
    private router: Router,
    private msalService: MsalService,
    private jwt:JwtHelperService,
    private toast:NgToastService,

  ) {

  }

  isIframe = false;
  ngOnInit(): void {
    // this.apexService.loaderEventValue.subscribe((data) => {
    //   if (data !== this.showLoader) {
    //     this.showLoader = data;
    //     this.changeDetect.detectChanges();
    //   }
    // });
    // this.onDetectRoute();
    this.isAuthenticated();
  }
  // ngAfterViewInit(): void {
  //   this.changeDetect.detectChanges();
  // }
  // onDetectRoute(){
  //   this.router.events.subscribe((event)=>{
  //     if (event instanceof NavigationStart) {
  //       const currentRoute = event.url.includes("?")
  //         ? event.url.substring(0, event.url.indexOf("?"))
  //         : event.url;
  //       this.showNavbar = !!!this.routes.some(
  //         (route) => currentRoute === route
  //       );
  //       window.scrollTo(0, 0);
  //     }
  //     if (event instanceof RouteConfigLoadStart) {
  //       this.showLoader = true;
  //     } else if (event instanceof RouteConfigLoadEnd) {
  //       this.showLoader = false;
  //     }
  //   })
  // }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }
  login() {
    this.msalService.loginPopup().subscribe((res: AuthenticationResult) => {
      this.toast.success({detail:'Success ',summary:res.account.name,duration:3000})
      localStorage.setItem('token',res.idToken)
      this.msalService.instance.setActiveAccount(res.account);

    },err=>{
      this.toast.error({detail:'Error',summary:'Login Failed',duration:3000})
    });
  }
  logout() {
    this.msalService.logout();
  }
  public isAuthenticated() {
    let token: string = localStorage.getItem("token");
   this.userObj=JSON.parse(JSON.stringify(this.jwt.decodeToken(token)));
  //  console.log(this.userObj);


  }
}
