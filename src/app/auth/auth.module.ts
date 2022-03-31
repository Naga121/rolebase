import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';

export function MSALInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:'b655ac18-93df-47db-8047-3e487d530805',
      redirectUri:'http://localhost:4200'
    }
  })
}

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path:'**',component:LoginComponent}
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MsalModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },MsalService
  ],
})
export class AuthModule {}
