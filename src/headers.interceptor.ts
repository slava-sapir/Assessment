import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentService } from './app/student.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headerReq = req.clone({
      headers: req.headers.append('Access-Control-Allow-Headers', 'Content-Type')
                          .append('Access-Control-Allow-Methods','GET')
                          .append('Access-Control-Allow-Origin','http://localhost:4200')
                          });
    
      return next.handle(headerReq);
  }
}
