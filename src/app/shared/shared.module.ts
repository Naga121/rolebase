import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsifyMeDirective } from './directive/ellipsify-me.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './service/http.service';
import { AppService } from './service/app.service';
import { AuthGuard } from './guard/auth.guard';
import { RestService } from './service/rest.service';
import { HttpInterceptorService } from './interceptor/http-interceptor.interceptor';

@NgModule({
  declarations: [
    EllipsifyMeDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    HttpService,
    AppService,
    AuthGuard,
    RestService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true}
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    EllipsifyMeDirective,
  ]
})
export class SharedModule { }
