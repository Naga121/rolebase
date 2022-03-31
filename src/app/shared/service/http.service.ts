import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpReq } from '../common/app.entity';
import { ApexService } from './apex.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient,private apexService:ApexService,private router:Router) { }
  showLoader(show:boolean){
    this.apexService.showLoader(show)
  }
  restCall(httpReq:HttpReq,isTokenReq=true){
    if(httpReq.showLoader && httpReq.showLoader ===true){
      this.showLoader(true);
    }
    return this.restService(httpReq,isTokenReq)
  }
  restService(httpReq:HttpReq,isTokenReq:any){
    return this.requestMethod(httpReq,isTokenReq)
  }
  requestMethod(httpReq:HttpReq,isTokenReq:boolean):Observable<HttpResponse<any> | HttpErrorResponse> | any{
    let header:any;
    if(isTokenReq){
      if(localStorage.getItem('token')){
        header={
          Authorization:localStorage.getItem('token')
        };
      }
    }
    const url=environment.baseURL+httpReq.url;
    if(httpReq.type === 'get'){
      return this.http.get(url, { headers: header }).pipe(
        map((res:any)=>{
          if(httpReq.showLoader && httpReq.showLoader === true){
            this.showLoader(false);
          }
          return res;
        },(error:HttpErrorResponse)=>{
          console.log(this.showLoader);
          if(httpReq.showLoader && httpReq.showLoader === true){
            this.showLoader(false);
          }
          if(error.status == 401){
            this.router.navigate(['/auth'])
          }
            return error;
        }),
      );
    }else if(httpReq.type === 'post'){
      return this.http.post(url,httpReq.body,{ observe: 'response', headers: { ...header } }).pipe(
        map(
          (resp: any) => {
            if (httpReq.showLoader && httpReq.showLoader === true) {
              this.showLoader(false);
            }
            return resp;
          },
          (error: HttpErrorResponse) => {
            if (httpReq.showLoader && httpReq.showLoader === true) {
              this.showLoader(false);
            }
            if (error.status == 401) {
              this.router.navigate(['/auth']);
            }
            return error;
          }
        ),
      )
    }else if(httpReq.type === 'delete'){
      return this.http.delete(url,{observe:'response',headers:{...header}}).pipe(
        map(
          (resp: any) => {
            if (httpReq.showLoader && httpReq.showLoader === true) {
              this.showLoader(false);
            }
            return resp;
          },
          (error: HttpErrorResponse) => {
            if (httpReq.showLoader && httpReq.showLoader === true) {
              this.showLoader(false);
            }
            if (error.status == 401) {
              this.router.navigate(['/auth']);
            }
            return error;
          }
        ),
      );
    }else{
      this.http.put(url,httpReq.body,{observe:'response',headers:{...header}}).pipe(
        map(
          (resp: any) => {
            if (httpReq.showLoader && httpReq.showLoader === true) {
              this.showLoader(false);
            }
            return resp;
          },
          (error: HttpErrorResponse) => {
            if (httpReq.showLoader && httpReq.showLoader === true) {
              this.showLoader(false);
            }
            if (error.status == 401) {
              this.router.navigate(['/auth']);
            }
            return error;
          }
        ),
      );
    }
  }

}
