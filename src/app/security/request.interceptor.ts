// import { Injectable } from "@angular/core";
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
// import { environment } from '@environment';
// import { Observable } from "rxjs";
// import { map, tap, finalize, timeout } from "rxjs/operators";

// import { InitService } from "src/app/_services/initApp/init.service";

// import { AppDataEncriptor } from 'src/app/_security/app.data.encriptor';
// import { LoaderService } from "../_services/loader/loader.service";

// @Injectable({
// providedIn: 'root'
// })
// export class RequestInterceptor implements HttpInterceptor {
//     constructor(
//         private initService: InitService,
//         private loaderService: LoaderService, 
//         private encriptor: AppDataEncriptor
//     ) { }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         var loaderView = false;
//         if (this.initService.getAccessToken != undefined
//             || this.initService.get3rdAccessToken != undefined) {
//             req = req.clone({ setHeaders: { Authorization: `Bearer ${this.initService.getAccessToken != undefined
//                 ? this.initService.getAccessToken : this.initService.get3rdAccessToken}`}});
//             req = req.clone({ headers: req.headers.append('AppToken', `${this.initService.getAppId}`) });
//             req = req.clone({ headers: req.headers.append('Identifier', `${this.initService.getUserIdentifier != undefined
//                 ? this.initService.getUserIdentifier : this.initService.get3rdParryUserDetails["user_id"]}`) });
//             req = req.clone({ headers: req.headers.append('Cache-Control', `no-store, no-cache, must-revalidate, post-check=0, pre-check=0`) });
//             req = req.clone({ headers: req.headers.append('Pragma', `no-cache`) });
//             req = req.clone({ headers: req.headers.append('Expires', `0`) });
                
//             if(!(req.body instanceof FormData)) {                
//                 req = req.clone({ headers: req.headers.append('Content-Type', 'application/json')});
//             }
//             var loaderViewObj = req.headers['lazyUpdate']
//             .find(function(el: any){
//                 if(el.name === "loaderView") {
//                     return el;
//                 }
//             });
//             loaderView = loaderViewObj != undefined ? JSON.parse(loaderViewObj["value"].toLowerCase()) : true;
//         }

//         //add headers for encription
//         if(environment.dataEncription && req.responseType != 'blob') {
//             req = req.clone({ responseType: 'text' });
//         }

//         //decide if loader appears or not
//         if(loaderView) {
//             this.loaderService.show();
//         }

//         //encript request body data if encription is enabled
//         if(environment.requestDataEncription && req != undefined && req.body != undefined) {
//             if(req.body instanceof FormData && req.body.get("details") != undefined) {
//                 const body = this.encriptor.encryptUsingAES256WithCBC(req.body.get("details")).toString();
//                 req.body.set("details", body);
//                 req = req.clone({body: req.body});
//             } else {
//                 const body = this.encriptor.encryptUsingAES256WithCBC(req.body).toString();
//                 req = req.clone({body: body});
//             }
//         }
        
//         return next.handle(req).pipe(
//             timeout(environment.apiResponseTimeout),
//             map(
//                 (event: HttpResponse<any> | any) => {
//                     if (event instanceof HttpResponse) {
//                         if(event['status'] === 200) {
//                             if(event['body'] != null && event['body'] != undefined) {
//                                 //decript response
//                                 if(environment.dataEncription && req.responseType != 'blob') {
//                                     try {
//                                         const convertVal = this.encriptor.decryptUsingAES256WithCBC(event['body']);
//                                         const newEvent = {...event};
//                                         newEvent.body = convertVal;
//                                         event = event.clone(newEvent);
//                                     } catch(err:any) {
//                                         if(err['message'] == 'Malformed UTF-8 data') {
//                                             const newEvent = {...event};
//                                             newEvent.body = JSON.parse(newEvent.body);
//                                             event = event.clone(newEvent);
//                                         } else if(err['message'] == 'Unexpected end of JSON input') {
//                                             const newEvent = {...event};
//                                             newEvent.body = JSON.parse(newEvent.body);
//                                             event = event.clone(newEvent);
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     } 
//                     return event;
//                 }
//             ),
//             tap(
//                 () => {},
//                 (error: any) => {
//                     if (error instanceof HttpErrorResponse) {
//                         if(error['status'] === 401){
//                             this.initService.callLogoutApp();
//                         } else {
//                             return;
//                         }
//                     }
//                 }
//             ),
//             finalize(() => {
//                 this.loaderService.hide();
//             })
//         );
//     }
// }
