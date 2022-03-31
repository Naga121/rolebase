import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpReq } from '../common/app.entity';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_TYPE_GET = 'get';
  REST_TYPE_POST = 'post';
  REST_TYPE_PUT = 'put';
  REST_TYPE_DELETE = 'delete';

  constructor(private httpService:HttpService) { }

  public authentication(data:any):Observable<any>{
    const httpReq:HttpReq = new HttpReq();
    httpReq.type=this.REST_TYPE_POST;
    httpReq.url='/users/verify';
    httpReq.showLoader=true;
    httpReq.body=data;
    return this.httpService.restCall(httpReq,false);
  }


}
