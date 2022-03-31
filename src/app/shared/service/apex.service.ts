import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApexService {
  public sessonUserEvent: EventEmitter<any> = new EventEmitter();
  private loaderEvent = new Subject();
  public loaderEventValue = this.loaderEvent.asObservable();
  private sideNavBarEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sideNavBarValue = this.sideNavBarEvent.asObservable();
  constructor() {}
  showLoader(show:boolean){
    this.loaderEvent.next(show);
  }
  showSideNavBar(show:boolean){
    this.sideNavBarEvent.next(show)
  }
  sessionUserEmit(sessionUser:any){
    this.sessonUserEvent.emit(sessionUser)
  }
  getDateFromMillisec(data:any){
    const date=new Date(data);
    const year=date.getFullYear();
    const month=('0'+(date.getMonth()+1)).slice(-2);
    const day=('0'+date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
