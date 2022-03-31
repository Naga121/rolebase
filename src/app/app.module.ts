import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { MsalModule, MsalRedirectComponent, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { NgToastModule } from 'ng-angular-popup';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () => import(`./user/user.module`).then((m) => m.UserModule),
  },
  { path: '**', redirectTo: 'auth' },
];

export function MSALInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:'3bd7c5d4-2c49-4e18-9c24-1f03370769c2',
      redirectUri:'http://localhost:4200'
    }
  })
}
const JWT_Module_Options: JwtModuleOptions = {
  config: {}
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot(JWT_Module_Options),
    RouterModule.forRoot(routes, { useHash: true }),
    MsalModule,
    NgToastModule,
  ],
  exports: [RouterModule],
  providers: [
     { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
     MsalService],
  bootstrap: [AppComponent,MsalRedirectComponent],
})
export class AppModule {}
