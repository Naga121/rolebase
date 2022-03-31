export class HttpReq {
  url: string;
  type: string;
  showLoader: boolean = false;
  body: any = {};
  contentType: any = 'application/json';
  isAcessTokenReq:boolean = false;
}
