import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApexService } from '../service/apex.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private apexService:ApexService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq:any=request.clone();
    return next.handle(authReq).pipe(tap(
      (res:any)=>{
      },
      (error:any)=>{
        if(error.status === 400){
        }else{
          this.apexService.showLoader(false);
        }
      }
    ));
  }
}
