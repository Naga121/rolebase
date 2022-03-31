import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { Contants } from 'src/app/model/contants';
import { ApexService } from 'src/app/shared/service/apex.service';
import { RestService } from 'src/app/shared/service/rest.service';
import { Storage } from 'src/app/shared/utils/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted: boolean = false;
  errorMsg: string = '';
  spinner: boolean = false;
  public userRole: Contants = new Contants();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apexService: ApexService,
    private restService: RestService,
  ) {}

  get control() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  clearErrorMsg() {
    this.errorMsg = '';
  }
  // login() {
  //   this.spinner=true;
  //   this.restService.authentication(this.loginForm.value).subscribe(
  //     (res) => {
  //       if (res.status === 200) {
  //         Storage.setLocalItem('user', res['body']);
  //         if (res.this.userRole == 'admin') {
  //           this.router.navigate(['/admin']);
  //         } else {
  //           this.router.navigate(['/user']);
  //         }
  //       } else {
  //         this.errorMsg = ['error']['message'];
  //       }
  //     },
  //     (error) => {
  //       this.apexService.showLoader(false);
  //       this.errorMsg = error['error']['message'];
  //     }
  //   );
  // }


  // isLoggedIn(): boolean {
  //   return this.msalService.instance.getActiveAccount() != null;
  // }
  // login() {
  // this.msalService.loginPopup().subscribe((res: AuthenticationResult) => {
  //   console.log(res.account.name);
  //   this.msalService.instance.setActiveAccount(res.account);
  // });
  // }
  // logout() {
  //   this.msalService.logout();
  // }
}
